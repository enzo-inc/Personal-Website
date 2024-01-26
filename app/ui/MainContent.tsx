'use client';

import React from 'react';
import { Featured } from '@/app/ui/Featured';
import { SocialMediaLinks } from '@/app/ui/SocialMediaLinks';
import { bioText } from '@/app/content/bio'; 
import { TypeAnimation } from 'react-type-animation';
import { toggleCursorAnimation } from '../../lib/utils';

export const MainContent = () => {
  const typingRef = React.createRef<HTMLSpanElement>();
  const [typing, setTyping] = React.useState(true);

  const toggleTyping = () => {
    setTyping(!typing);
  }

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     toggleTyping();
  //   }, 3000);
  // }, []);

  return (
    <section className="py-5">
      <div className="container mx-auto flex flex-wrap items-start">
        <div className="w-full md:w-1/2 md:mb-0">
          <Featured />
        </div>
        <div className="w-full md:w-1/2">

          <TypeAnimation
          ref={typingRef}
          splitter={(str) => str.split(/(?= )/)}
          sequence={[
            bioText,
            () => toggleCursorAnimation(typingRef, false),
            () => toggleTyping()
          ]}
          wrapper="span"
          speed={70}
          cursor={false}
          repeat={0}
          style={{ display: 'inline-block' }}
          className={`text-left preserve-newlines pt-3 text-lg leading-tight typing_animation`}
        >
        </TypeAnimation>

        {/* Divider appears when main content has been tpyed */}
        <div 
          style={{ 
            borderBottom: !typing ? '2px solid black' : 'none', 
            marginTop: '40px', 
            paddingTop: '10px', 
            textAlign: 'left',
            width: '0',
            animation: !typing ? 'expand 3s forwards' : 'none'
          }} 
        />

        <SocialMediaLinks />

        </div>
      </div>
    </section>
  );
};
