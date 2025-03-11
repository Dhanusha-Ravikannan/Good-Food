
require("dotenv").config();
const Razorpay = require("razorpay");
const { PrismaClient } = require("@prisma/client");
 
const prisma = new PrismaClient();
 
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
 
const createOrderAndSubscription = async (req, res) => {
  try {
    const { amount, subscription_id } = req.body;
    if (!amount || !subscription_id ) {
      return res.status(400).json({ error: "Amount, subscription_id are required" });
    }
 
    const orderOptions = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
 
    const order = await razorpay.orders.create(orderOptions);
    console.log("Razorpay Order Created:", order);
 
   
 
    const { customer_id } = req.user;
 
    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(subscription_id) },
    });
 
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }
 
    const subscriptionData = await prisma.subscription.findUnique({
      where: { id: subscription.id },
      include: {
        DurationSub: { select: { quantity: true } },
        DurationSubs: { select: { actual_days: true, addon_days: true } },
        MealSub: { select: { meal_type: true } },
        PricingDetails: { select: { price: true } },
      },
    });
 
    if (!subscriptionData) {
      return res.status(404).json({ error: "Subscription details not found" });
    }
 
    const quantity = subscriptionData.DurationSub?.quantity || 0;
    const actual_days = subscriptionData.DurationSubs?.actual_days || 0;
    const addon_days = subscriptionData.DurationSubs?.addon_days || 0;
    const validity = actual_days + addon_days;
 
    const start_date = new Date();
    const end_date = new Date(start_date);
    end_date.setDate(start_date.getDate() + quantity);
 
    console.log("Start Date:", start_date.toISOString().split("T")[0]);
    console.log("End Date:", end_date.toISOString().split("T")[0]);
    console.log("Validity Days:", validity);
    console.log("Customer_ID:", customer_id);
 
    const userSubscription = await prisma.user_Subscription.create({
      data: {
        subscription_id: subscription.id,
        start_date,
        end_date,
        status: "Pending",
        customer_id,
        validity_days: validity,
        created_at: new Date(),
        updatedAt: new Date(),
      },
    });
 
    res.status(200).json({
      message: "Order Created & Subscription Activated",
      order,
      subscription: userSubscription,
    });
 
  } catch (error) {
    console.error("Error processing payment and subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
 
const getKey = async (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID });
};
  
  const updatePaymentStatus = async (req, res) => {
    try {
      const { payment_id, order_id, subscription_id,  payment_status, payment_info } = req.body;
      const {customer_id}=req.user;
      console.log("Payment ID :",payment_id)
      console.log("Order ID :",order_id)
      console.log("Subscription ID:",subscription_id)
      console.log("Customer ID:",customer_id)
      console.log("Payment Status:",payment_status)
      console.log("Payment Info:",payment_info)
 
      if (!payment_id || !order_id || !subscription_id || !customer_id || !payment_status || !payment_info) {
        return res.status(400).json({ error: "All fields are required" });
      }
 
      const userSubscription = await prisma.user_Subscription.findUnique({
        where: { id: Number(subscription_id) },
      });
 
      if (!userSubscription) {
        return res.status(404).json({ error: "User Subscription not found" });
      }
 
      const itemPayment = await prisma.item_Payment.create({
        data: {
          payment_method: "Razorpay",
          customer_id,
          user_subscription_id: userSubscription.id,
          payment_status,
          payment_info: payment_info,
          created_at: new Date(),
          updatedAt: new Date(),
        },
      });
 
      if (payment_status === "captured") {
        await prisma.user_Subscription.update({
          where: { id: userSubscription.id },
          data: { status: "Active", updatedAt: new Date() },
        });
      }
 
      res.status(200).json({
        message: "Payment details updated successfully",
        itemPayment,
      });
 
    } catch (error) {
      console.error("Error updating payment details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
 
module.exports = { createOrderAndSubscription, getKey,updatePaymentStatus };
 