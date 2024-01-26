'use client'

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { toggleCursorAnimation } from '../../lib/utils';

export const Featured = () => {
  const typingRef = React.createRef<HTMLSpanElement>();

  return (
    <section className="py-10 bg-gray-100" style={{backgroundColor:"#fef8f5"}}>
      <div className="container mx-auto">

        <TypeAnimation
          ref={typingRef}
          sequence={[
            "HI THERE, I'M ENZO. CURRENTLY BUILDING THE FUTURE.",
            () => toggleCursorAnimation(typingRef, false)
          ]}
          wrapper="span"
          speed={2}
          cursor={false}
          repeat={0}
          style={{ display: 'inline-block' }}
          className={`text-6xl font-bold mb-4 text-left typing_animation`}
        >
        </TypeAnimation>
        
      </div>
    </section>
  );
};