

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './MainHome.css';
// import MainNavbar from '../Navbar/MainNavbar';
// import { IoSunnyOutline, IoPartlySunnyOutline } from "react-icons/io5";
// import { MdOutlineModeNight } from "react-icons/md";
// import { ImSpoonKnife } from "react-icons/im";
// import { useNavigate, useParams } from 'react-router-dom';

// const MainHome = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [additionalItems, setAdditionalItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const { id } = useParams();
//   const [cart, setCart] = useState([]);
//   const [subscriptionId, setSubscriptionId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFoodMenu = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_SERVER_URL}/userSubscription/getFoodWithID/${id}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         console.log("SUB DETAILS:", response.data);

//         const subId = response.data.getFood[0]?.subscription_id || null;
//         setSubscriptionId(subId);

//         // Extracting FoodItems properly
//         const foodData = response.data.getFood[0]?.Subscription?.FoodSubscription?.flatMap(
//           (foodSub) => foodSub.FoodItems ? [foodSub.FoodItems] : []
//         ) || [];

//         setFoodItems(foodData);
//       } catch (error) {
//         console.error('Error fetching food menu:', error);
//       }
//     };

//     fetchFoodMenu();
//   }, [id]);

//   useEffect(() => {
//     const fetchAdditionalItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_SERVER_URL}/extra/getAllAdditional`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         console.log("Additional Items:", response.data.foodItems);
//         setAdditionalItems(response.data.foodItems);
//       } catch (error) {
//         console.error('Error fetching additional items:', error);
//       }
//     };

//     fetchAdditionalItems();
//   }, []);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//   }, []);

//   const handleAddItem = async (item) => {
//     if (!subscriptionId) {
//       console.error("Subscription ID not found!");
//       return;
//     }

//     const updatedCart = [...cart, { ...item, item_name: item.item_name || item.name }];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `${process.env.REACT_APP_BACKEND_SERVER_URL}/cart/newCart`,
//         {
//           subscription_id: subscriptionId,
//           food_item_id: item.id,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const handleRemoveItem = (item) => {
//     const updatedCart = cart.filter((cartItem, index) =>
//       cartItem.item_name !== (item.item_name || item.name) ||
//       index !== cart.findIndex(cart => cart.item_name === (item.item_name || item.name))
//     );
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };


  

//   const goToCart = () => {
//     navigate('/user/cart');
//   };

//   return (
//     <>
//       <MainNavbar />
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <button onClick={goToCart} className="cart-button">Go to Cart</button>

//       <div className='break'>
//         <div className='breakfast-out'>
//           <IoPartlySunnyOutline /><span className='fast'> Breakfast </span> <br /> Order before 11:00AM
//         </div>
//         <div className='breakfast-out'>
//           <IoSunnyOutline /><span className='fast'> Lunch </span>  <br /> Order before 3:00PM
//         </div>
//         <div className='breakfast-out'>
//           <MdOutlineModeNight /> <span className='fast'> Dinner </span>  <br /> Order before 7:00PM
//         </div>
//         <div className='breakfast-out'>
//           <ImSpoonKnife /> <span className='fast'> Menu </span> <br /> Additional Charge
//         </div>
//       </div>

//       <div className="food-items">
//         <h2>Your Food Items</h2>
//         {foodItems.length > 0 ? (
//           <div className="food-items-container">
//             {foodItems
//               .filter((item) =>
//                 item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .map((item, index) => (
//                 <div key={index} className="food-item">
//                   <img
//                     src={item.image_url || "https://via.placeholder.com/50"}
//                     alt={item.item_name}
//                     className="food-item-image"
//                   />
//                   <span>{item.item_name}</span>
               
//                   <div className="food-item-actions">
//                     <button onClick={() => handleRemoveItem(item)}>-</button>
//                     <span>{cart.filter((cartItem) => cartItem.item_name === item.item_name).length}</span>
//                     <button onClick={() => handleAddItem(item)}>+</button>
//                   </div>

//                 </div>
//               ))}
//           </div>
//         ) : (
//           <p>No food items found for your subscription.</p>
//         )}
//       </div>

//       <div className='choose-menu'> Choose more Delicious Foods </div>
//       <div className="additional-items">
//         <h2>Additional Items</h2>
//         {additionalItems.length > 0 ? (
//           <div className="food-items-container">
//             {additionalItems.map((item, index) => (
//               <div key={index} className="food-item">
//                 <span>{item.name}</span>
//                 <div className="food-item-actions">
//                   <button onClick={() => handleRemoveItem(item)}>-</button>
//                   <span>
//                     {cart.filter((cartItem) => cartItem.item_name === (item.item_name || item.name)).length}
//                   </span>
//                   <button onClick={() => handleAddItem(item)}>+</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No additional items available.</p>
//         )}
//       </div>
//       <div className='bottom'></div>
//     </>
//   );
// };

// export default MainHome;






import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MainHome.css';
import MainNavbar from '../Navbar/MainNavbar';
import { IoSunnyOutline, IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate, useParams } from 'react-router-dom';

  const MainHome = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [additionalItems, setAdditionalItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [subscriptionId, setSubscriptionId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodMenu = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/userSubscription/getFoodWithID/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const subId = response.data.getFood[0]?.subscription_id || null;
        setSubscriptionId(subId);

        const foodData = response.data.getFood[0]?.Subscription?.FoodSubscription?.flatMap(
          (foodSub) => foodSub.FoodItems ? [foodSub.FoodItems] : []
        ) || [];

        setFoodItems(foodData);
      } catch (error) {
        console.error('Error fetching food menu:', error);
      }
    };

    fetchFoodMenu();
  }, [id]);

  useEffect(() => {
    const fetchAdditionalItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/extra/getAllAdditional`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAdditionalItems(response.data.foodItems);
      } catch (error) {
        console.error('Error fetching additional items:', error);
      }
    };

    fetchAdditionalItems();
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddItem = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item_name === (item.item_name || item.name));
    let updatedCart = [...cart];

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, item_name: item.item_name || item.name, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (item) => {
    let updatedCart = [...cart];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item_name === (item.item_name || item.name));

    if (existingItemIndex !== -1) {
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const goToCart = () => {
    navigate('/user/cart');
  };

  return (
    <>
      <MainNavbar />
      <div className="search">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <button onClick={goToCart} className="cart-button">Go to Cart</button>
      <div className='break'>
        <div className='breakfast-out'><IoPartlySunnyOutline /> Breakfast <br /> Order before 11:00AM</div>
        <div className='breakfast-out'><IoSunnyOutline /> Lunch <br /> Order before 3:00PM</div>
        <div className='breakfast-out'><MdOutlineModeNight /> Dinner <br /> Order before 7:00PM</div>
        <div className='breakfast-out'><ImSpoonKnife /> Menu <br /> Additional Charge</div>
      </div>

      <div className="food-items">
        <div className="food-items-container">
          {foodItems.map((item, index) => (
            <div key={index} className="food-item">
                  <img
                    src={item.image_url || "https://via.placeholder.com/50"}
                    alt={item.item_name}
                    className="food-item-image"
                  />            
              <span>{item.item_name}</span>
              <div className="food-item-actions">
                <button onClick={() => handleRemoveItem(item)}>-</button>
                <span>{cart.find(cartItem => cartItem.item_name === item.item_name)?.quantity || 0}</span>
                <button onClick={() => handleAddItem(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className='choose-menu'> Choose more Delicious Foods </div>
      <div className="additional-items">
        {additionalItems.length > 0 ? (
          <div className="food-items-container">
            {additionalItems.map((item, index) => (
              <div key={index} className="food-item">
                <img
                    src={item.image_url || "https://via.placeholder.com/50"}
                    alt={item.item_name}
                    className="food-item-image"
                  /> 
                <span>{item.name}</span>
                <div className="food-item-actions">
                  <button onClick={() => handleRemoveItem(item)}>-</button>
                  <span>
                    {cart.filter((cartItem) => cartItem.item_name === (item.item_name || item.name)).length}
                  </span>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No additional items available.</p>
        )}
      </div>
    </>
  );
};

export default MainHome;
