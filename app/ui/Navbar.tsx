'use client';

import React, { useRef } from 'react';
import { ProjectSheet } from '@/app/ui/ProjectSheet';
import { TypeAnimation } from 'react-type-animation';
import { toggleCursorAnimation } from '../../lib/utils';


export const Navbar = () => {
  const typingRefProjects = React.createRef<HTMLSpanElement>();
  const typingRefCV = React.createRef<HTMLSpanElement>();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-3" style={{backgroundColor:"#fef8f5"}}>
      <div className="w-1/3 flex justify-start">
        <a href="https://drive.google.com/file/d/1rqjmTBOe7xLWDAyTb8ers8E9hBuyd8To/view?usp=drive_link" target="_blank">
        <TypeAnimation
            ref={typingRefCV}
            sequence={[
              "CV",
              () => toggleCursorAnimation(typingRefCV, false)
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            className={`text-black hover:text-black px-2 py-2 rounded-md text-s font-semibold underline-link relative typing_animation`}
          >
          </TypeAnimation>
        </a>
        
        <ProjectSheet trigger={
          <a href="#">
            <TypeAnimation
            ref={typingRefProjects}
            sequence={[
              "PROJECTS",
              () => toggleCursorAnimation(typingRefProjects, false)
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            className={`text-black hover:text-black px-2 py-2 rounded-md text-s font-semibold underline-link relative typing_animation`}
          >
          </TypeAnimation>
        </a>
        }>

        </ProjectSheet>
      </div>
      <div className="w-1/3 flex justify-center">
      <TypeAnimation
          sequence={[
            "ENZO INCUTTI",
          ]}
          wrapper="span"
          speed={1}
          cursor={true}
          repeat={0}
          style={{ display: 'inline-block' }}
          className={`font-bold text-3xl tracking-tight typing_animation`}
        >
        </TypeAnimation>
      </div>
      <div className="w-1/3 flex justify-end">
        {/* Empty div for balancing the flex spacing */}
        <div></div>
      </div>
    </nav>
  );
};

