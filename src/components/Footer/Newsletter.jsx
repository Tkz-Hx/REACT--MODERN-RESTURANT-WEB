import React from 'react';
import { useState } from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';



const Newsletter = () => {

  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubscribe = () => {
    console.log(email)
  }

  return (
    <div className='app__newsletter'> 
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      
      {/* ===== SUBSCRIBE BUTTON WITH INPUT ======== */}
      <div className='app__newsletter-input flex__center'>
        <input type='email ' placeholder='Enter your email address' value={email} onChange={handleChange} />
        <button className='custom__button' onClick={handleSubscribe}>Subscribe</button>
      </div>

    </div>
  )

};

export default Newsletter;
