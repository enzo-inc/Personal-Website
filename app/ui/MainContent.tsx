import React from 'react';
import { Featured } from '@/app/ui/Featured';
import { SocialMediaLinks } from '@/app/ui/SocialMediaLinks';
import { bioText } from '@/app/content/bio'; 

export const MainContent = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto flex flex-wrap items-start">
        <div className="w-full md:w-1/2 md:mb-0">
          <Featured />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-left preserve-newlines pt-3 text-lg leading-tight">{bioText}</p>
          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
};
