import React from 'react'
import './IndividualPlan.css'
import { Link } from 'react-router-dom'



import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import idly from '../../../assets/idly.jpg'
import rice from '../../../assets/Rice.jpg'
import biriyani from '../../../assets/biriya.jpg'
import chappathi from '../../../assets/chappathi.jpg'
import pongal from '../../../assets/pongal.jpg'
import StarRatings from '../Home/StarRatings';
import { useState } from 'react';



const IndividualPlan = () => {


  const [addedItems, setAddedItems] = useState({
    idly: false,
    pongal: false,
    rice: false,
    biriyani: false,
    chappathi: false,
  });


  const handleAddClick = (item) => {
    setAddedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item], 
    }));
  };


  return (
    <> 
    
     <Link to={'/user/Payment'}> 
  <div className='sub-add'> <button> SUBSCRIBE</button></div></Link>
    <div className='listt'>Choose your Subscription Plans </div>
    <br/><br/>
 
   
  
  <div className='days'> 
    <div> 1 Day - ₹250</div> 
    <div> 15 Days - ₹3375 </div>
    <div> 30 Days - ₹6000 </div>

  </div>

  <div className='break'> 
            <div className='breakfast-outt'> <IoPartlySunnyOutline/><span className='fastt'> Breakfast </span>Order before 11:00AM </div>         
  </div>

  <div className='photo'> 
  <div> 
    <img src={idly} alt='idly'/><br/> 
    <h4> Idly+chutney+sambar <br/> <StarRatings/></h4>
    <div className='add'> 
    <button > Add </button> </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4> Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>
  <div> 
    <img src={biriyani} alt='dosa'/><br/> 
    <h4> Chicken Biriyani <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4>Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>

  <div> 
    <img src={chappathi} alt='idly'/><br/> 
    <h4> Chappathi  <br/>  <StarRatings /></h4>
    <div className='add'> 
    <button onClick={() => handleAddClick('chappathi')}> 
              {addedItems.chappathi ? 'Added' : 'Add'} 
              {addedItems.chappathi && '+'} 
            </button>
     </div> 
    </div>
    </div>


    <div className='break'> 
            
            <div className='breakfast-outt'> <IoSunnyOutline /><span className='fastt'> Lunch </span>   Order before 3:00AM  </div>
            
  </div>

  <div className='photo'> 
  <div> 
    <img src={idly} alt='idly'/><br/> 
    <h4> Idly+chutney+sambar <br/> <StarRatings/></h4>
    <div className='add'> 
    <button > Add </button> </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4> Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>
  <div> 
    <img src={biriyani} alt='dosa'/><br/> 
    <h4> Chicken Biriyani <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4>Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>

  <div> 
    <img src={chappathi} alt='idly'/><br/> 
    <h4> Chappathi  <br/>  <StarRatings /></h4>
    <div className='add'> 
    <button onClick={() => handleAddClick('chappathi')}> 
              {addedItems.chappathi ? 'Added' : 'Add'} 
              {addedItems.chappathi && '+'} 
            </button>
     </div> 
    </div>
    </div>


    <div className='break'> 
      
            <div className='breakfast-outt'>  <MdOutlineModeNight /> <span className='fastt'> Dinner </span> Order before 7:00PM </div> 
  </div>

  <div className='photo'> 
  <div> 
    <img src={idly} alt='idly'/><br/> 
    <h4> Idly+chutney+sambar <br/> <StarRatings/></h4>
    <div className='add'> 
    <button > Add </button> </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4> Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>
  <div> 
    <img src={biriyani} alt='dosa'/><br/> 
    <h4> Chicken Biriyani <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={pongal} alt='dosa'/><br/> 
    <h4> Pongal+sambar+vada <br/>  <StarRatings/></h4>
    <div className='add'> 
    <button> Add</button>  </div> 
  </div>
  <div> 
    <img src={rice} alt='idly'/><br/> 
    <h4>Rice + Chicken gravy <br/>  <StarRatings/></h4>
    <div className='add'> 
   <button  > Add </button> </div> 
  </div>

  <div> 
    <img src={chappathi} alt='idly'/><br/> 
    <h4> Chappathi  <br/>  <StarRatings /></h4>
    <div className='add'> 
    <button onClick={() => handleAddClick('chappathi')}> 
              {addedItems.chappathi ? 'Added' : 'Add'} 
              {addedItems.chappathi && '+'} 
            </button>
     </div> 
    </div>
    </div>



    
    </>
   
  )
}

export default IndividualPlan