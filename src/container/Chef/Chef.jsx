import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper app__padding'>
    {/* ====== CHEF IMG ======== */}
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef img' />
    </div>
    {/* ====== CHEF INFO ====== */}
    <div className='app__wrapper_info'>
      <SubHeading title="Chef’s Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      {/* ====== CHEF QUOTE ====== */}
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>"Fine dining is not just about the food it's an exquisite symphony of flavors, textures, and emotions that transports you to a world of culinary artistry"</p>
        </div>
      </div>
      {/* ===== CHEF SING & NAME */}
      <div className='app__chef-sign'>
        <p className='p__opensans'>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
