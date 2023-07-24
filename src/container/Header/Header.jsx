import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The key to fine Dining</h1>
        <p className='p__opensans' style={{ margin: "2rem 0" }}>Let it be the land, but let us live in old age. Seasoning of the disease is easier than chocolate And, in the end, there is a lot of good things exist like our foods.</p>
        <button type='button' className='custom__button' style={{ borderRadius: "15px" }}>Explore Menu</button>
      </div>

      {/* ===== HEADER IMG ===== */}
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  );
};

export default Header;
