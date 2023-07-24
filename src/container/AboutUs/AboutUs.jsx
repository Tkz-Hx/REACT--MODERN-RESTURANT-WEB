import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    {/*======ABOUT US====== */}
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>At Fine Dining Kitchen, we strive to redefine the art of dining. Immerse yourself in a world of exquisite flavors, impeccable service, and elegant ambiance.</p>
        <button type='button' className='custom__button' style={{ borderRadius: "15px" }}>Know More</button>
      </div>
      {/* ====== KNIFE IMG ======= */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      {/*====== OUR HISTORY======= */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>The concept of fine dining as we know it today evolved during the 18th and 19th centuries, particularly in France, with the emergence of renowned culinary schools</p>
        <button type='button' className='custom__button' style={{ borderRadius: "15px" }}>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
