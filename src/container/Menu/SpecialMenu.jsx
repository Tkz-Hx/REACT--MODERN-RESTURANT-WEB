import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding ' id='menu'>
    {/* ===== TITLTE & SUB-TITLE */}
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    {/* ======= WINE & BEER SECTION ====== */}
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu_menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      {/* === WINE IMG ==== */}
      <div className='app__specialMenu_menu_img'>
        <img src={images.menu} alt='menu img' />
      </div>

      {/* ===== COCTAILS SECTION */}
      <div className='app__specialMenu_menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* ==== BUTTON ==== */}
    <div style={{ margin: "15px" }}>
      <button type='button' className='custom__button' style={{ borderRadius: "15px" }}>View More</button>
    </div>
  </div>
);

export default SpecialMenu;


