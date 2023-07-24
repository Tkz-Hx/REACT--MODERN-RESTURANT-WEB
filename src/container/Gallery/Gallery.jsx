import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants'
import { SubHeading } from '../../components';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);


  // ====== SCROLL PHOTO GALLERY========//
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>

      {/* ======= TITLE & SUBTITLE ======= */}
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>Each dish is carefully crafted by skilled chefs, using the finest ingredients and innovative techniques to create a harmonious symphony of flavors that tantalize the palate</p>
        <button type='button' className='custom__button' style={{ borderRadius: "15px" }}>View More</button>
      </div>

      <div className='app__gallery-img'>
        <div className='app__gallery-img_container' ref={scrollRef}>
          {/* ===== MAP METHOD USED TO LOOP THROUGH IMAGES ======== */}

          {galleryImages.map((images, index) => (
            // ======== WE USE (INDEX +1) TO COUNT THROUGH ALL IMAGES =========//
            <div className='app__gallery-img_card flex__center' key={`gallery_img-${index + 1}`}>
              <img src={images} alt='gallery' />
              <BsInstagram className='gallery__img-icon' />
            </div>
          ))}
        </div>
        {/* ======== CREATING ARROW TO SCROLL LEFT AND RIGHT ========= */}
        <div className='app__gallery-img_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('Right')} />
        </div>
      </div>
    </div>
  )

};

export default Gallery;
