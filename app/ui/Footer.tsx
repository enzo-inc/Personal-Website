import React from 'react';
import { courierPrime } from '@/app/fonts';

export const Footer = () => {
    return (
      <footer className="w-full">
        <div className="border-t border-black mx-7 my-2 pb-5">
          <p className={`${courierPrime.className} mt-5 font-thin text-left border-t-10 border-transparent`}>
            Made by me using React, Next.js 14 and Tailwind CSS
          </p>
        </div>
      </footer>
    );
  };
