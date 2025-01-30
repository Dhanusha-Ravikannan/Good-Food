

// import React from 'react';
// import './IndividualPackDinner.css';
// import { MdOutlineModeNight } from "react-icons/md";
// import idly from '../../../assets/idly.jpg'
// import rice from '../../../assets/Rice.jpg'
// import biriyani from '../../../assets/biriya.jpg'
// import chappathi from '../../../assets/chappathi.jpg'
// import pongal from '../../../assets/pongal.jpg'
// import StarRatings from '../Home/StarRatings';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';


// const IndividualPackDinner = () => {

//   const [addedItems, setAddedItems] = useState({
//     idly: false,
//     pongal: false,
//     rice: false,
//     biriyani: false,
//     chappathi: false,
//   });


//   const handleAddClick = (item) => {
//     setAddedItems(prevState => ({
//       ...prevState,
//       [item]: !prevState[item], 
//     }));
//   };

//   return (
//     <> 
//     <div className='backgrd'> 
//     <Link to={'/user/Payment'}> 
//   <div className='sub-add'> <button> SUBSCRIBE</button></div></Link>
//     <div className='listt'>Choose your Subscription Plans </div>
//     <br/><br/>
  
//   <div className='days'> 
//     <div> 1 Day - ₹75</div> 
//     <div> 15 Days - ₹68 </div>
//     <div> 30 Days - ₹60 </div>

//   </div>




//     <div className='break'>      
//           <div className='breakfast-outt'>  <MdOutlineModeNight /> <span className='fastt'> Dinner </span> Order before 7:00PM </div> 
//   </div>

//   <div className='photo'> 
//   <div> 
//     <img src={idly} alt='idly'/><br/> 
//     <h6> Idly+chutney+sambar <br/> <StarRatings/></h6>
//     <div className='add'> 
//     <button > Add </button> </div> 
//   </div>
//   <div> 
//     <img src={pongal} alt='dosa'/><br/> 
//     <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
//     <div className='add'> 
//     <button> Add</button>  </div> 
//   </div>
//   <div> 
//     <img src={rice} alt='idly'/><br/> 
//     <h6> Rice + Chicken gravy <br/>  <StarRatings/></h6>
//     <div className='add'> 
//    <button  > Add </button> </div> 
//   </div>
//   <div> 
//     <img src={biriyani} alt='dosa'/><br/> 
//     <h6> Chicken Biriyani <br/>  <StarRatings/></h6>
//     <div className='add'> 
//     <button> Add</button>  </div> 
//   </div>
//   <div> 
//     <img src={pongal} alt='dosa'/><br/> 
//     <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
//     <div className='add'> 
//     <button> Add</button>  </div> 
//   </div>
//   <div> 
//     <img src={rice} alt='idly'/><br/> 
//     <h6>Rice + Chicken gravy <br/>  <StarRatings/></h6>
//     <div className='add'> 
//    <button  > Add </button> </div> 
//   </div>

//   <div> 
//     <img src={chappathi} alt='idly'/><br/> 
//     <h6> Chappathi  <br/>  <StarRatings /></h6>
//     <div className='add'> 
//     <button onClick={() => handleAddClick('chappathi')}> 
//               {addedItems.chappathi ? 'Added' : 'Add'} 
//               {addedItems.chappathi && '+'} 
//             </button>
//      </div> 
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default IndividualPackDinner




















// import axios from 'axios';
// import React from 'react';
// import './IndividualPackDinnerBudget.css';
// import { MdOutlineModeNight } from "react-icons/md";
// import idly from '../../../assets/idly.jpg'
// import rice from '../../../assets/Rice.jpg'
// import biriyani from '../../../assets/biriya.jpg'
// import chappathi from '../../../assets/chappathi.jpg'
// import pongal from '../../../assets/pongal.jpg'
// import StarRatings from '../Home/StarRatings';
// import { useState,useEffect } from 'react';
// import { Link, useNavigate  } from 'react-router-dom';
// import { FaGoogle } from "react-icons/fa6";
 
 
// const IndividualPackDinnerBudget = () => {
 
//   const [plans, setPlans] = useState([]);
//   const [addedItems, setAddedItems] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isSignedIn, setIsSignedIn] = useState(false); 
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/sub/names`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
 
//         const plansData = response.data.groupedSubscriptions?.['Individual Budget']?.Dinner || [];
//         setPlans(plansData);
//         setLoading(false);
//         console.log("Response : " , response.data)
//       } catch (error) {
//         console.error('Error fetching subscription plans:', error.response?.data || error.message);
//         setPlans([]);
//         setLoading(false);
//       }
//     };
 
//     fetchPlans();
//   }, []);
 
//   const handleAddClick = (item) => {
//     setAddedItems(prevState => ({
//       ...prevState,
//       [item]: !prevState[item],
//     }));
//   };

//   const handleSubscribe = () => {
//     if (!isSignedIn) {
//       setShowModal(true);
//       return;
//     }
//     navigate('/user/Payment');
//   };

//   const handleSignIn = () => {
//     setIsSignedIn(true); 
//     setShowModal(false);
//     navigate('/user/Payment');
    
//   };

//   const onClose = () => {
//     setShowModal(false);
//   }; 
 
//   return (
//     <>
//     <div className='backgrd'>
//     {/* <Link to={'/user/Payment'}>
//   <div className='sub-add'> <button> SUBSCRIBE</button></div></Link> */}

// <div className='sub-add'>
//           <button onClick={handleSubscribe}>SUBSCRIBE</button>
//         </div>
//     <div className='listt'>Choose your Subscription Plans </div>
//     <br/><br/>
 
// <div className='days'>
//           {loading ? (
//             <div>Loading plans...</div>
//           ) : (
//             plans.length > 0 ? (
//               plans.map((plan, index) => (
//                 <div key={index} className="plan-card">
//                   {plan.days} Day = ₹{plan.price}
//                 </div>
//               ))
//             ) : (
//               <div>No plans available</div>
//             )
//           )}
//         </div>
//   <div className='break'>   
//             <div className='breakfast-outt'>  <MdOutlineModeNight /> <span className='fastt'> Dinner </span> Order before 7:00PM </div>
//   </div>
 
//   <div className='photo'>
//   <div>
//     <img src={idly} alt='idly'/><br/>
//     <h6> Idly+chutney+sambar <br/> <StarRatings/></h6>
  
//   </div>
//   <div>
//     <img src={pongal} alt='dosa'/><br/>
//     <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
   
//   </div>
//   <div>
//     <img src={rice} alt='idly'/><br/>
//     <h6> Rice + Chicken gravy <br/>  <StarRatings/></h6>
   
//   </div>
//   <div>
//     <img src={biriyani} alt='dosa'/><br/>
//     <h6> Chicken Biriyani <br/>  <StarRatings/></h6>
    
//   </div>
//   <div>
//     <img src={pongal} alt='dosa'/><br/>
//     <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
   
//   </div>
//   <div>
//     <img src={rice} alt='idly'/><br/>
//     <h6>Rice + Chicken gravy <br/>  <StarRatings/></h6>  
//   </div>

//   <div>
//     <img src={chappathi} alt='idly'/><br/>
//     <h6> Chappathi  <br/>  <StarRatings /></h6>   
//     </div>
//     </div>
//     </div>

//     {showModal && (
//         <div className="modaal-overlay">
//           <div className="modaal">
//           <button className="close-btnn" onClick={onClose}>X</button>
//             <h3  className="sign-in-subscribe "style={{marginTop:'1rem'}}>Please Sign In to Subscribe</h3>
//             <button onClick={handleSignIn} className="sign-inn-btn">  <FaGoogle />   Sign In with Google   </button>
//           </div>
//         </div>
//       )}
      
//     </>
//   )
// }
 
// export default IndividualPackDinnerBudget





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IndividualPackDinnerBudget.css';
import { IoPartlySunnyOutline } from "react-icons/io5";
import idly from '../../../assets/idly.jpg';
import rice from '../../../assets/Rice.jpg';
import biriyani from '../../../assets/biriya.jpg';
import chappathi from '../../../assets/chappathi.jpg';
import pongal from '../../../assets/pongal.jpg';
import StarRatings from '../Home/StarRatings';
import { useNavigate } from 'react-router-dom';

const IndividualPackDinnerBudget = () => {
  const [error, setError] = useState('');
  const [plans, setPlans] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      const fetchPlans = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_SERVER_URL}/sub/names`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const BudgetData = response.data.groupedSubscriptions["Individual Plan Budget"]["Dinner"];
          setPlans(BudgetData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching subscription plans:', error.response?.data || error.message);
          setPlans([]);
          setLoading(false);
        }
      };
  
      fetchPlans();
    }, []);


  const handlePlanClick = async (planId) => {
      setSelectedPlanId(planId);
      setFoodItems([]); 
    
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/foodMenu/getWithID`,
          { subscription_id: planId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('Food Items fetched:', response.data);
    
        const fetchedItems = response.data.menuWithID?.map((item) => item.FoodItems) || [];
        setFoodItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching food items:', error.response?.data || error.message);
        setFoodItems([]);
        setError('Failed to fetch food items. Please try again.');
      }
    };


  const handleSubscribe = async () => {
      if (!selectedPlanId) {
        alert('Please select a plan first.');
        return;
      }
  
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_SERVER_URL}/userSubscription/createUserSubscription`,
          { subscription_id: selectedPlanId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
  console.log("Subscription Created:",response.data)
        alert('Subscription successfully created.');
        navigate('/user/Payment');
      } catch (err) {
        console.error('Error creating subscription:', err);
        setError('Failed to create subscription. Please try again.');
      }
    };

  return (
    <> 
      <div className='backgrd'> 
      <div className="sub-add">
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="days">
        {loading ? (
          <div>Loading...</div>
        ) : (
          plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-item ${selectedPlanId === plan.id ? 'selected' : ''}`}
              onClick={() => handlePlanClick(plan.id)}
            >
              <div>{plan.days} Days - ₹{plan.price}</div>
            </div>
          ))
        )}
      </div>
      {foodItems.length > 0 && (
  <div className="food-items">
    <h2>Food Items for Selected Plan:</h2>
    <ul>
    {foodItems.length > 0 && (
  
    <ul>
      {foodItems.map((item) => (
        <li key={item.id}>{item.item_name}</li> 
      ))}
    </ul>
)}
    </ul>
  </div>
)}

        <div className='break'> 
          <div className='breakfast-outt'>
            <IoPartlySunnyOutline />
            <span className='fastt'> Dinner </span>Order before 11:00PM
          </div>
        </div>

        <div className='photo'>
          {/* You can adjust the meal items for Dinner here */}
          {[{ name: 'idly', image: idly, description: 'Idly+chutney+sambar', day: 'Monday' },
            { name: 'pongal', image: pongal, description: 'Pongal+sambar+vada', day: 'Tuesday' },
            { name: 'rice', image: rice, description: 'Rice + Chicken gravy', day: 'Wednesday' },
            { name: 'biriyani', image: biriyani, description: 'Chicken Biriyani', day: 'Thursday' },
            { name: 'pongal', image: pongal, description: 'Pongal+sambar+vada', day: 'Friday' },
            { name: 'rice', image: rice, description: 'Rice + Chicken gravy', day: 'Saturday' },
            { name: 'chappathi', image: chappathi, description: 'Chappathi', day: 'Sunday' }
          ].map((item) => (
            <div key={item.name}>
              <div className='days-align'>{item.day}</div>
              <br />
              <img src={item.image} alt={item.name} />
              <br />
              <h6>{item.description} <br /><StarRatings /></h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndividualPackDinnerBudget;
