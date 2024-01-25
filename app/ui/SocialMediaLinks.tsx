import React from 'react';

export const SocialMediaLinks = () => {
    return (
      <div style={{ borderTop: '1px solid black', marginTop: '40px', paddingTop: '10px', textAlign: 'left' }}>
        <div>
          <div className='py-1'>
            <a href="https://www.linkedin.com/in/vincenzo-incutti/" target="_blank" className="text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative">
              LINKEDIN
            </a>
          </div>
          <div className='py-1'>
            <a href="https://twitter.com/enzo__inc" target="_blank" className="text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative">
              TWITTER
            </a>
          </div>
          <div className='py-1'>
            <a href="https://github.com/enzo-inc" target="_blank" className="text-black hover:text-black py-2 rounded-md text-s font-bold underline-link relative">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    );
  };
