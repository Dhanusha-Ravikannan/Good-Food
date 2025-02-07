// import React, { useState, useEffect } from 'react';
// import './MainHome.css';
// import MainNavbar from '../Navbar/MainNavbar';
// import { IoSunnyOutline } from "react-icons/io5";
// import { IoPartlySunnyOutline } from "react-icons/io5";
// import { MdOutlineModeNight } from "react-icons/md";
// import idly from '../../../assets/idly.jpg';
// import rice from '../../../assets/Rice.jpg';
// import biriyani from '../../../assets/biriya.jpg';
// import chappathi from '../../../assets/chappathi.jpg';
// import pongal from '../../../assets/pongal.jpg';
// import StarRatings from './StarRatings';
// import Footer from './Footer';
// import { ImSpoonKnife } from "react-icons/im";
// import { useNavigate } from 'react-router-dom';

// const MainHome = () => {
//   const [addedItems, setAddedItems] = useState({
//     idly: 0,
//     pongal: 0,
//     rice: 0,
//     biriyani: 0,
//     chappathi: 0,
//   });

//   const navigate = useNavigate();

//   const addonMenu = () => {
//     navigate('/user/MenuAddon');
//   };

//   const items = [
//     { name: 'idly', image: idly, description: 'Idly+chutney+sambar', price: 30 },
//     { name: 'pongal', image: pongal, description: 'Pongal+sambar+vada', price: 40 },
//     { name: 'rice', image: rice, description: 'Rice + Chicken gravy', price: 50 },
//     { name: 'biriyani', image: biriyani, description: 'Chicken Biriyani', price: 60 },
//     { name: 'chappathi', image: chappathi, description: 'Chappathi', price: 20 },
//     { name: 'biriyani', image: biriyani, description: 'Chicken Biriyani', price: 60 },
//     { name: 'rice', image: rice, description: 'Rice + Chicken gravy', price: 50 },
    
//   ];

//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const initialState = {};
//     items.forEach(item => {
//       const storedItem = storedItems.find(stored => stored.name === item.name);
//       initialState[item.name] = storedItem ? storedItem.quantity : 0;
//     });
//     setAddedItems(initialState);
//   }, []);


//   const handleQuantityChange = (item, operation) => {
//     setAddedItems((prevState) => {
//       const newQuantity = operation === 'increment'
//         ? prevState[item] + 1
//         : prevState[item] > 0
//         ? prevState[item] - 1
//         : 0;
  
//       let storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//       let updatedItems = storedItems.map(cartItem => {
//         if (cartItem.name === item) {
//           return { ...cartItem, quantity: newQuantity, totalPrice: newQuantity * cartItem.price };
//         }
//         return cartItem;
//       }).filter(cartItem => cartItem.quantity > 0);
  
//       localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  
//       return { ...prevState, [item]: newQuantity };
//     });
//   };
  

//   const handleAddToCart = (item) => {
//     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const existingItem = storedItems.find(cartItem => cartItem.name === item.name);

//     if (existingItem) {
      
//       existingItem.quantity += 1;
//       existingItem.totalPrice = existingItem.quantity * existingItem.price;
//     } else {
   
//       storedItems.push({ ...item, quantity: 1, totalPrice: item.price });
//     }
   
//     localStorage.setItem('cartItems', JSON.stringify(storedItems));

//     setAddedItems((prevState) => ({
//       ...prevState,
//       [item.name]: prevState[item.name] + 1,
//     }));
//   };

//   const daysOfWeek = [
//     'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
//   ];

//   return (
//     <>
//       <MainNavbar />

//       <div className='search'>
//         <input placeholder='Search' />
//       </div>

//       <div className='break'>
//         <div className='breakfast-out'>
//           <IoPartlySunnyOutline /><span className='fast'> Breakfast </span> <br /> Order before 11:00AM
//         </div>
//         <div className='breakfast-out'>
//           <IoSunnyOutline /><span className='fast'> Lunch </span>  <br /> Order before 3:00AM
//         </div>
//         <div className='breakfast-out'>
//           <MdOutlineModeNight /> <span className='fast'> Dinner </span>  <br /> Order before 7:00PM
//         </div>
//         <div onClick={addonMenu} className='breakfast-out'>
//           <ImSpoonKnife /> <span className='fast'> Menu </span> <br /> Additional Charge
//         </div>
//       </div>
//       <div className='photo'>
//         {items.map((item, index) => (
//           <div key={item.name}>             
//             <div className='days-align'>{daysOfWeek[index % daysOfWeek.length]}</div>
//             <br/>                            
//             <img src={item.image} alt={item.name} /><br />
//             <h4>{item.description} <br /> <StarRatings /></h4>               
//             <div className='add'>
//               {addedItems[item.name] > 0 ? (
//                 <div className="quantity-container">
//                   <button onClick={() => handleQuantityChange(item.name, 'decrement')}>-</button>
//                   <span>{addedItems[item.name]}</span>
//                   <button onClick={() => handleQuantityChange(item.name, 'increment')}>+</button>
//                 </div>
//               ) : (
//                 <button onClick={() => handleAddToCart(item)}>Add</button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MainHome;






 
import React, { useState, useEffect } from 'react';
import './MainHome.css';
import MainNavbar from '../Navbar/MainNavbar';
import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import idly from '../../../assets/idly.jpg';
import rice from '../../../assets/Rice.jpg';
import biriyani from '../../../assets/biriya.jpg';
import chappathi from '../../../assets/chappathi.jpg';
import pongal from '../../../assets/pongal.jpg';
import StarRatings from './StarRatings';
import Footer from './Footer';
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import fish from '../../../assets/fish.jpg'
import egg from '../../../assets/Egg.webp'
import noodles from '../../../assets/noodles.jpg'
import chicken from '../../../assets/chicken.jpg'
import seafood from '../../../assets/seafood.jpg'
import varietyrice from '../../../assets/varietyrice.jpg'
 
 
const MainHome = () => {
  const [addedItems, setAddedItems] = useState({
    idly: 0,
    pongal: 0,
    rice: 0,
    biriyani: 0,
    chappathi: 0,
  });
 
  // State for additional items
  const [addonItems, setAddonItems] = useState({
    fish: 0,
    egg: 0,
    chicken: 0,
    noodles: 0,
    seafood: 0,
    varietyrice: 0,
  });
 
  const navigate = useNavigate();
 
  const addonMenu = () => {
    navigate('/user/MenuAddon');
  };
 
  const items = [
    { name: 'idly', image: idly, description: 'Idly+chutney+sambar', price: 30 },
    { name: 'pongal', image: pongal, description: 'Pongal+sambar+vada', price: 40 },
    { name: 'rice', image: rice, description: 'Rice + Chicken gravy', price: 50 },
    { name: 'biriyani', image: biriyani, description: 'Chicken Biriyani', price: 60 },
    { name: 'chappathi', image: chappathi, description: 'Chappathi', price: 20 },
    { name: 'biriyani', image: biriyani, description: 'Chicken Biriyani', price: 60 },
    { name: 'rice', image: rice, description: 'Rice + Chicken gravy', price: 50 },
  ];
 
  // Handle increment and decrement for the main items
  const handleQuantityChange = (item, operation) => {
    setAddedItems((prevState) => {
      const newQuantity = operation === 'increment'
        ? prevState[item] + 1
        : prevState[item] > 0
        ? prevState[item] - 1
        : 0;
 
      let storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let updatedItems = storedItems.map(cartItem => {
        if (cartItem.name === item) {
          return { ...cartItem, quantity: newQuantity, totalPrice: newQuantity * cartItem.price };
        }
        return cartItem;
      }).filter(cartItem => cartItem.quantity > 0);
 
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
 
      return { ...prevState, [item]: newQuantity };
    });
  };
 
  // Handle add to cart for the main items
  const handleAddToCart = (item) => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = storedItems.find(cartItem => cartItem.name === item.name);
 
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      storedItems.push({ ...item, quantity: 1, totalPrice: item.price });
    }
 
    localStorage.setItem('cartItems', JSON.stringify(storedItems));
 
    setAddedItems((prevState) => ({
      ...prevState,
      [item.name]: prevState[item.name] + 1,
    }));
  };
 
  // Handle add to cart for additional items
  const handleAddonQuantityChange = (addon, operation) => {
    setAddonItems((prevState) => {
      const newQuantity = operation === 'increment'
        ? prevState[addon] + 1
        : prevState[addon] > 0
        ? prevState[addon] - 1
        : 0;
 
      let storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let updatedItems = storedItems.map(cartItem => {
        if (cartItem.name === addon) {
          return { ...cartItem, quantity: newQuantity, totalPrice: newQuantity * cartItem.price };
        }
        return cartItem;
      }).filter(cartItem => cartItem.quantity > 0);
 
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
 
      return { ...prevState, [addon]: newQuantity };
    });
  };
 
  // Handle add to cart for additional items
  const handleAddonAddToCart = (addon) => {
    const addonItemsList = {
      fish: { name: 'fish', image: fish, description: 'Starters', price: 30 },
      egg: { name: 'egg', image: egg, description: 'Egg', price: 20 },
      chicken: { name: 'chicken', image: chicken, description: 'Chicken', price: 40 },
      noodles: { name: 'noodles', image: noodles, description: 'Noodles', price: 50 },
      seafood: { name: 'seafood', image: seafood, description: 'Seafood', price: 60 },
      varietyrice: { name: 'varietyrice', image: varietyrice, description: 'Variety Rice', price: 35 },
    };
 
    const item = addonItemsList[addon];
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = storedItems.find(cartItem => cartItem.name === item.name);
 
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      storedItems.push({ ...item, quantity: 1, totalPrice: item.price });
    }
 
    localStorage.setItem('cartItems', JSON.stringify(storedItems));
 
    setAddonItems((prevState) => ({
      ...prevState,
      [addon]: prevState[addon] + 1,
    }));
  };
 
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];
 
  return (
    <>
      <MainNavbar />
      <div className='search'>
        <input placeholder='Search' />
      </div>
 
      <div className='break'>
        <div className='breakfast-out'>
          <IoPartlySunnyOutline /><span className='fast'> Breakfast </span> <br /> Order before 11:00AM
        </div>
        <div className='breakfast-out'>
          <IoSunnyOutline /><span className='fast'> Lunch </span>  <br /> Order before 3:00AM
        </div>
        <div className='breakfast-out'>
          <MdOutlineModeNight /> <span className='fast'> Dinner </span>  <br /> Order before 7:00PM
        </div>
        <div onClick={addonMenu} className='breakfast-out'>
          <ImSpoonKnife /> <span className='fast'> Menu </span> <br /> Additional Charge
        </div>
      </div>
 
      <div className='photo'>
        {items.map((item, index) => (
          <div key={item.name}>
            <div className='days-align'>{daysOfWeek[index % daysOfWeek.length]}</div>
            <br />
            <img src={item.image} alt={item.name} /><br />
            <h4>{item.description} <br /> <StarRatings /></h4>
            <div className='add'>
              {addedItems[item.name] > 0 ? (
                <div className="quantity-container">
                  <button onClick={() => handleQuantityChange(item.name, 'decrement')}>-</button>
                  <span>{addedItems[item.name]}</span>
                  <button onClick={() => handleQuantityChange(item.name, 'increment')}>+</button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(item)}>Add</button>
              )}
            </div>
          </div>
        ))}
      </div>
 
      <div className='choose-menu'> Choose more Delicious Foods </div>
 
      <div className='addon-container'>
        {['fish', 'egg', 'chicken', 'noodles', 'seafood', 'varietyrice'].map((addon) => (
          <div className='addon-item' key={addon}>
            <img className='addon-image' src={addon === 'fish' ? fish : addon === 'egg' ? egg : addon === 'chicken' ? chicken : addon === 'noodles' ? noodles : addon === 'seafood' ? seafood : varietyrice} alt={addon} />
            <div className='addon-label'>{addon.charAt(0).toUpperCase() + addon.slice(1)}  </div>
            {addonItems[addon] > 0 ? (
              <div className="quantity-container">
                <button onClick={() => handleAddonQuantityChange(addon, 'decrement')}>-</button>
                <span>{addonItems[addon]}</span>
                <button onClick={() => handleAddonQuantityChange(addon, 'increment')}>+</button>
              </div>
            ) : (
              <button style={{backgroundColor:'orangered'}} onClick={() => handleAddonAddToCart(addon)}>Add</button>
            )}
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
 
      {/* <Footer /> */}
    </>
  );
};
 
export default MainHome;