'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { toggleCursorAnimation } from '../../lib/utils';

export const SocialMediaLinks = () => {
  const typingRefLinkedin = React.createRef<HTMLSpanElement>();
  const typingRefTwitter = React.createRef<HTMLSpanElement>();
  const typingRefGithub = React.createRef<HTMLSpanElement>();

    return (
        <div>
          <div className='py-1'>
            <a href="https://www.linkedin.com/in/vincenzo-incutti/" target="_blank">
            <TypeAnimation
            ref={typingRefLinkedin}
            sequence={[
              7800,
              "LINKEDIN",
              () => toggleCursorAnimation(typingRefLinkedin, false)
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            className={`text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative typing_animation`}
          >
          </TypeAnimation>
            </a>
          </div>
          <div className='py-1'>
            <a href="https://twitter.com/enzo__inc" target="_blank">
            <TypeAnimation
            ref={typingRefTwitter}
            sequence={[
              7800,
              "TWITTER",
              () => toggleCursorAnimation(typingRefTwitter, false)
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            className={`text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative typing_animation`}
          >
          </TypeAnimation>
            </a>
          </div>
          <div className='py-1'>
            <a href="https://github.com/enzo-inc" target="_blank">
            <TypeAnimation
            ref={typingRefGithub}
            sequence={[
              7800,
              "GITHUB",
              () => toggleCursorAnimation(typingRefGithub, false)
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            className={`text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative typing_animation`}
          >
          </TypeAnimation>
            </a>
          </div>
        </div>
    );
  };
