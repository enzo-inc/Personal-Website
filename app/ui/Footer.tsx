import React from 'react';
import { courierPrime } from '@/app/fonts';



export const Footer = () => {
  const linkClass = `text-black hover:text-black py-2 mt-5 font-thin text-left border-t-10 border-transparent  underline-link relative`
    return (
      <footer className="w-full">
        <div className="border-t border-black mx-7 my-2 pb-5">
          <p className={`${courierPrime.className} mt-5 font-thin text-left border-t-10 border-transparent`}>
           2024. Made by me using
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={linkClass}> React</a>, 
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className={linkClass}> Next.js</a>,
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className={linkClass}> Vercel</a>,
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className={linkClass}> Tailwind CSS</a> and
            <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className={linkClass}> shadcn/ui</a> ~  
            <a href="https://github.com/enzo-inc/Personal-Website" target="_blank" rel="noopener noreferrer" className={`${linkClass}`} >  Check out the source code!</a>
          </p>
        </div>
      </footer>
    );
  };
