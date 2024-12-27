const express = require('express')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getAllMealType = async (req,res) => {
    try {
        const getMeal = await prisma.meal_type.findMany()
        res.status(200).json({message : "Fetched successfully", getMeal})
    } catch (error) {
      console.log(error)
      res.status(404).json({error : "No meal type found"})  
    }
}

const createMealType = async (req, res) => {
    try {
        const { meal_type, food_item_id } = req.body;

        const foodItemId = parseInt(food_item_id, 10);
        if (isNaN(foodItemId)) {
            return res.status(400).json({ error: "Invalid or missing food_item_id" });
        }

        const getFoodItem = await prisma.food_Items.findUnique({
            where: {
                id: foodItemId, 
            },
        });

        if (!getFoodItem) {
            return res.status(404).json({ error: "Food item not found" });
        }

        const createMeal = await prisma.meal_type.create({
            data: {
                meal_type,
                food_item_id: foodItemId, 
                created_at: new Date(),
                updatedAt: new Date(),
            },
        });

        res.status(200).json({ message: "Meal Created", createMeal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create meal", details: error.message });
    }
};



module.exports = {getAllMealType,createMealType}