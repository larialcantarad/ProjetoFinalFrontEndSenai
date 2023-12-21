import './home.css'

import React, { useState } from 'react';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

import {
 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {

    src : '/public/t.png',
    altText: '',
  
    
    caption: '',
    key: 1,
  },
  {
   
    src: '/public/t2.jpg',
    altText: '',
    caption: '',
    key: 2,
  },
  {
   
    src: '/public/E2.jpg',
    altText: '',
    caption: '',
    key: 3,
  
  },
  
];


function carrosel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} style={{ width: "1380px", height: "600px" }}/> 
        
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

    );
  }
  
  export default carrosel;
