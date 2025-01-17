

import React, {  useEffect, useState } from 'react';
import './BudgetCombo.css'
import { IoSunnyOutline, IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import idly from '../../../assets/idly.jpg';
import rice from '../../../assets/Rice.jpg';
import biriyani from '../../../assets/biriya.jpg';
import chappathi from '../../../assets/chappathi.jpg';
import pongal from '../../../assets/pongal.jpg';
import StarRatings from '../Home/StarRatings';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle } from "react-icons/fa6";
 

const BudgetCombo = () => {

    const [plans, setPlans] = useState([]);
    const [addedItems, setAddedItems] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
   
    useEffect(() => {
      const fetchPlans = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/sub/names`, {
            headers: { Authorization: `Bearer ${token}` },
          });
   
          const plansData = response.data.groupedSubscriptions?.['Combo Budget']?.Combo || [];
          setPlans(plansData);
          setLoading(false);
          console.log("Response : " , response.data)
        } catch (error) {
          console.error('Error fetching subscription plans:', error.response?.data || error.message);
          setPlans([]);
          setLoading(false);
        }
      };
   
      fetchPlans();
    }, []);
   
    const handleAddClick = (item) => {
      setAddedItems((prevState) => ({
        ...prevState,
        [item]: !prevState[item],
      }));
    };


      
  const handleSubscribe = () => {
    if (!isSignedIn) {
      setShowModal(true);
      return;
    }
    navigate('/user/Payment');
  };



  const handleSignIn = () => {
    setIsSignedIn(true); 
    setShowModal(false);
    navigate('/user/Payment');
    
  };

  const onClose = () => {
    setShowModal(false);
  };


  return (
    <> 
   
     <div className="backgrd">
        {/* <Link to={'/user/Payment'}>
          <div className="sub-add"><button>SUBSCRIBE</button></div>
        </Link> */}
        <div className='sub-add'>
          <button onClick={handleSubscribe}>SUBSCRIBE</button>
        </div>
        <div className="listt">Choose your Subscription Plans</div>
        <br /><br />
 
        <div className='days'>
          {loading ? (
            <div>Loading plans...</div>
          ) : (
            plans.length > 0 ? (
              plans.map((plan, index) => (
                <div key={index} className="plan-card">
                  {plan.days} Day = ₹{plan.price}
                </div>
              ))
            ) : (
              <div>No plans available</div>
            )
          )}
        </div>
     
 
 
 
  <div className='break'>
            <div className='breakfast-outt'> <IoPartlySunnyOutline/><span className='fastt'> Breakfast </span>Order before 11:00AM </div>        
  </div>
 
  <div className='photo'>
  <div>
    <div className='days-align'> Monday</div> <br/>
    <img src={idly} alt='idly'/><br/>
    <h6> Idly+chutney+sambar <br/> <StarRatings/></h6>
    {/* <div className='add'>
    <button > Add </button> </div> */}
  </div>
  <div>
  <div className='days-align'> Tuesday</div> <br/>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
  <div className='days-align'> Wednesday</div> <br/>
    <img src={rice} alt='idly'/><br/>
    <h6> Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
  <div>
  <div className='days-align'> Thursday</div> <br/>
    <img src={biriyani} alt='dosa'/><br/>
    <h6> Chicken Biriyani <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
  <div className='days-align'> Friday</div> <br/>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
  <div className='days-align'> Saturday</div> <br/>
    <img src={rice} alt='idly'/><br/>
    <h6>Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
 
  <div>
  <div className='days-align'> Sunday</div> <br/>
    <img src={chappathi} alt='idly'/><br/>
    <h6> Chappathi  <br/>  <StarRatings /></h6>
    {/* <div className='add'>
    <button onClick={() => handleAddClick('chappathi')}>
              {addedItems.chappathi ? 'Added' : 'Add'}
              {addedItems.chappathi && '+'}
            </button>
     </div> */}
    </div>
    </div>
 
  <div className='break'>
               <div className='breakfast-outt'> <IoSunnyOutline /><span className='fastt'> Lunch </span>   Order before 3:00AM  </div>
           
  </div>
 
  <div className='photo'>
  <div>
    <img src={idly} alt='idly'/><br/>
    <h6> Idly+chutney+sambar <br/> <StarRatings/></h6>
    {/* <div className='add'>
    <button > Add </button> </div> */}
  </div>
  <div>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={rice} alt='idly'/><br/>
    <h6> Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
  <div>
    <img src={biriyani} alt='dosa'/><br/>
    <h6> Chicken Biriyani <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={rice} alt='idly'/><br/>
    <h6>Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
 
  <div>
    <img src={chappathi} alt='idly'/><br/>
    <h6> Chappathi  <br/>  <StarRatings /></h6>
    {/* <div className='add'>
    <button onClick={() => handleAddClick('chappathi')}>
              {addedItems.chappathi ? 'Added' : 'Add'}
              {addedItems.chappathi && '+'}
            </button>
     </div> */}
    </div>
    </div>
 
  <div className='break'>
     <div className='breakfast-outt'>  <MdOutlineModeNight /> <span className='fastt'> Dinner </span> Order before 7:00PM </div>
  </div>
  <div className='photo'>
  <div>
    <img src={idly} alt='idly'/><br/>
    <h6> Idly+chutney+sambar <br/> <StarRatings/></h6>
    {/* <div className='add'>
    <button > Add </button> </div> */}
  </div>
  <div>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={rice} alt='idly'/><br/>
    <h6> Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
  <div>
    <img src={biriyani} alt='dosa'/><br/>
    <h6> Chicken Biriyani <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={pongal} alt='dosa'/><br/>
    <h6> Pongal+sambar+vada <br/>  <StarRatings/></h6>
    {/* <div className='add'>
    <button> Add</button>  </div> */}
  </div>
  <div>
    <img src={rice} alt='idly'/><br/>
    <h6>Rice + Chicken gravy <br/>  <StarRatings/></h6>
    {/* <div className='add'>
   <button  > Add </button> </div> */}
  </div>
 
  <div>
    <img src={chappathi} alt='idly'/><br/>
    <h6> Chappathi  <br/>  <StarRatings /></h6>
    {/* <div className='add'>
    <button onClick={() => handleAddClick('chappathi')}>
              {addedItems.chappathi ? 'Added' : 'Add'}
              {addedItems.chappathi && '+'}
            </button>
     </div> */}
    </div>
    </div>
 
    </div>


    {showModal && (
        <div className="modaal-overlay">
          <div className="modaal">
          <button className="close-btnn" onClick={onClose}>X</button>
            <h3  className="sign-in-subscribe "style={{marginTop:'1rem'}}>Please Sign In to Subscribe</h3>
            <button onClick={handleSignIn} className="sign-inn-btn">  <FaGoogle />   Sign In with Google   </button>
          </div>
        </div>
      )}
    
    </>
   
  )
}

export default BudgetCombo