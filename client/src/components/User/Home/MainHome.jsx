
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './MainHome.css';
// import MainNavbar from '../Navbar/MainNavbar';


// const MainHome = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [additionalItems, setAdditionalItems] = useState([]);

//   useEffect(() => {
//     const fetchDailyMenu = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_SERVER_URL}/dailyPeriod/getMenuWithPeriod`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         console.log('DAILY MENU:', response.data);

//         const dailyMenuData = response.data.formattedMenu || [];

//         // Group items by period_name (Daily, Weekly)
//         const groupedMenu = dailyMenuData.reduce(
//           (acc, item) => {
//             const period = item.period_name || 'Uncategorized'; // Ensure fallback for undefined period_name
//             if (!acc[period]) {
//               acc[period] = [];
//             }
//             acc[period].push(item);
//             return acc;
//           },
//           { Daily: [], Weekly: [] } // Ensure keys exist
//         );

//         setFoodItems(groupedMenu);
//       } catch (error) {
//         console.error('Error fetching daily menu:', error);
//       }
//     };

//     fetchDailyMenu();
//   }, []);

  
   
 

//   // useEffect(() => {
//   //   const fetchFoodMenu = async () => {
//   //     try {
//   //       const token = localStorage.getItem('token');
//   //       const response = await axios.get(
//   //         `${process.env.REACT_APP_BACKEND_SERVER_URL}/userSubscription/getFoodWithID/${id}`,
//   //         { headers: { Authorization: `Bearer ${token}` } }
//   //       );
//   //       console.log('SUB MENU:', response.data);

//   //       const foodData = response.data?.data?.[0]?.FoodItems || [];
//   //       setFoodItems(foodData);
//   //       setSubscriptionId(response.data?.data?.[0]?.subscription_id || null);
//   //       setMealTypeId(response.data?.data?.[0]?.meal_type_id ); // Set meal type
//   //     } catch (error) {
//   //       console.error('Error fetching food menu:', error);
//   //     }
//   //   };

//   //   fetchFoodMenu();
//   // }, [id]);


//   useEffect(() => {
//     const fetchAdditionalItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_SERVER_URL}/extra/getAllAdditional`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAdditionalItems(response.data.foodItems);
//       } catch (error) {
//         console.error('Error fetching additional items:', error);
//       }
//     };

//     fetchAdditionalItems();
//   }, []);

  


//   return (
//     <>
//       {/* <MainNavbar />
//       <h2>Food Menu</h2>

//       <button onClick={() => navigate('/cart')} className="cart-button">Go to Cart</button>


//       <div className="food-items">
//         {foodItems.length > 0 ? (
//           foodItems.map((item, index) => (
//             <div key={index} className="food-item">
//               <span>{item.item_name}</span>
//               <button onClick={() => handleRemoveItem(item)}>-</button>
//               <span>{cart.filter((cartItem) => cartItem.id === item.id).length}</span>
//               <button onClick={() => handleAddItem(item)}>+</button>
//             </div>
//           ))
//         ) : (
//           <p>No items available.</p>
//         )}
//       </div> */}
//  <MainNavbar />
//       <h2>Food Menu</h2>

//       <div className="menu-container">
//         {/* Daily Menu */}
//         <div className="menu-section">
//           <h3>Daily Menu</h3>

//           {foodItems.Daily.length > 0 ? (
//             foodItems.Daily.map((item, index) => (
//               <div key={index} className="food-item">
//                 <span>Food: {item.food_name}</span>
//                 <span>Type: {item.food_type}</span>
//               </div>
//             ))
//           ) : (
//             <p>No items available for Daily Menu.</p>
//           )}
//         </div>

//         {/* Weekly Menu */}
//         <div className="menu-section">
//           <h3>Weekly Menu</h3>
//           {foodItems.Weekly.length > 0 ? (
//             foodItems.Weekly.map((item, index) => (
//               <div key={index} className="food-item">
//                 <span>Food: {item.food_name}</span>
//                 <span>Type: {item.food_type}</span>
//               </div>
//             ))
//           ) : (
//             <p>No items available for Weekly Menu.</p>
//           )}
//         </div>
//       </div>

//     </>
//   );
// };

// export default MainHome;

 















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './MainHome.css';
// import MainNavbar from '../Navbar/MainNavbar';

// const MainHome = () => {
//   const [foodItems, setFoodItems] = useState({ Daily: {}, Weekly: {} });

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_SERVER_URL}/dailyPeriod/getMenuWithPeriod`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         console.log('DAILY MENU:', response.data);

//         const menuData = response.data.formattedMenu || [];

//         // Group menu data by period_name (Daily/Weekly) and food_type (Breakfast/Lunch/Dinner)
//         const groupedMenu = menuData.reduce((acc, item) => {
//           const period = item.period_name || 'Uncategorized';
//           const mealType = item.food_type || 'Other';

//           if (!acc[period]) acc[period] = {};
//           if (!acc[period][mealType]) acc[period][mealType] = [];

//           acc[period][mealType].push({
//             food_name: item.food_name,
//             meal_type_id: item.meal_type_id, 
//             parent_plan_id: item.plan_id  
//           });
          

//           return acc;
//         }, { Daily: {}, Weekly: {} });
//         console.log('Grouped Menu:', groupedMenu);

//         setFoodItems(groupedMenu);
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//       }
//     };

//     fetchMenu();
//   }, []);


//   const handleAddToOrder = async (meal_type_id, parent_plan_id) => {
//     console.log('meal_type_id:', meal_type_id);
//     console.log('parent_plan_id:', parent_plan_id);
  
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         `${process.env.REACT_APP_BACKEND_SERVER_URL}/orders/checkOrderTiming`,
//         { meal_type_id, parent_plan_id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('ORDER TYM: ', response.data);
  
//       if (response.data.isOrderAllowed) {
//         alert('Order placed successfully!');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error('Failed to check order timing:', error);
//     }
//   };
  
//   return (
//     <>
//       <MainNavbar />
//       <div className="menu-container">
//         <h2>Food Menu</h2>

//         {['Daily', 'Weekly'].map((period) => (
//           <div key={period} className="menu-section">
//             <h3 className="period-title">{period} Menu</h3>

//             {Object.entries(foodItems[period]).map(([mealType, foods]) => (
//   <div key={mealType} className="meal-section">
//     <h4 className="meal-title">{mealType}</h4>
//     <ul className="food-list">
//       {foods.map((food, index) => (
//         <li key={index} className="food-item">
//           {food.food_name}
//           <br />
//           <button>-</button>
//           <button onClick={() => handleAddToOrder(food.meal_type_id, food.parent_plan_id)}>+</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// ))}

//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default MainHome;















import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MainHome.css';
import MainNavbar from '../Navbar/MainNavbar';
 
const MainHome = () => {
  const [foodItems, setFoodItems] = useState({ Daily: {}, Weekly: {} });
 
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/dailyPeriod/getMenuWithPeriod`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
 
        console.log('DAILY MENU:', response.data);
 
        const menuData = response.data.formattedMenu || [];
 
        // Group menu data by period_name (Daily/Weekly) and food_type (Breakfast/Lunch/Dinner)
        const groupedMenu = menuData.reduce((acc, item) => {
          const period = item.period_name || 'Uncategorized';
          const mealType = item.food_type || 'Other';
 
          if (!acc[period]) acc[period] = {};
          if (!acc[period][mealType]) acc[period][mealType] = [];
 
          acc[period][mealType].push({
            food_name: item.food_name,
            meal_type_id: item.meal_type_id,
            parent_plan_id: item.plan_id  
          });
         
 
          return acc;
        }, { Daily: {}, Weekly: {} });
        console.log('Grouped Menu:', groupedMenu);
 
        setFoodItems(groupedMenu);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
 
    fetchMenu();
  }, []);
const handleAddToOrder = async (meal_type_id, parent_plan_id, food_name) => {
  console.log('meal_type_id:', meal_type_id);
  console.log('parent_plan_id:', parent_plan_id);
 
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER_URL}/orders/checkOrderTiming`,
      { meal_type_id, parent_plan_id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log('ORDER TYM: ', response.data);
 
    if (response.data.isOrderAllowed) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
 
      const existingItem = cartItems.find((item) => item.meal_type_id === meal_type_id);
 
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        cartItems.push({
          meal_type_id,
          parent_plan_id,
          name: food_name,
          price: 50, // adjust price dynamically if needed
          quantity: 1,
          totalPrice: 50,
        });
      }
 
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
 
      updateSubscriptionCalendar();
 
      alert('Meal added to cart!');
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error('Failed to check order timing:', error);
  }
};
 
const updateSubscriptionCalendar = () => {
  const reports = JSON.parse(localStorage.getItem('reports')) || [];
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
 
  // Increment tomorrow's quantity
  const updatedReports = reports.map((report) => {
    const reportDate = new Date(report.ordered_date);
    if (reportDate.toDateString() === tomorrow.toDateString()) {
      return {
        ...report,
        breakfast_qty: report.breakfast_qty + 1,
      };
    }
    return report;
  });
 
  // Decrease last day's quantity
  if (updatedReports.length > 0) {
    const lastReport = updatedReports[updatedReports.length - 1];
    lastReport.breakfast_qty = Math.max(0, lastReport.breakfast_qty - 1);
  }
 
  localStorage.setItem('reports', JSON.stringify(updatedReports));
};
 
 
  return (
    <>
      <MainNavbar />
      <div className="menu-container">
        <h2>Food Menu</h2>
 
        {['Daily', 'Weekly'].map((period) => (
          <div key={period} className="menu-section">
            <h3 className="period-title">{period} Menu</h3>
 
            {Object.entries(foodItems[period]).map(([mealType, foods]) => (
  <div key={mealType} className="meal-section">
    <h4 className="meal-title">{mealType}</h4>
    <ul className="food-list">
      {foods.map((food, index) => (
        <li key={index} className="food-item">
          {food.food_name}
          <br />
          <button>-</button>
          <button onClick={() => handleAddToOrder(food.meal_type_id, food.parent_plan_id)}>+</button>
        </li>
      ))}
    </ul>
  </div>
))}
 
          </div>
        ))}
      </div>
    </>
  );
};
 
export default MainHome;