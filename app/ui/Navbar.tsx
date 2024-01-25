import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-3" style={{backgroundColor:"#fef8f5"}}>
      <div className="w-1/3 flex justify-start">
        <a href="https://drive.google.com/file/d/1rqjmTBOe7xLWDAyTb8ers8E9hBuyd8To/view?usp=drive_link" target="_blank" className="text-black hover:text-black px-2 py-2 rounded-md text-s font-semibold underline-link relative">
          CV
        </a>
        <a href="/locations" className="text-black hover:text-black px-2 py-2 rounded-md text-s font-semibold underline-link relative">
          PROJECTS
        </a>
      </div>
      <div className="w-1/3 flex justify-center">
        <span className="font-bold text-3xl tracking-tight">ENZO INCUTTI</span>
      </div>
      <div className="w-1/3 flex justify-end">
        {/* Empty div for balancing the flex spacing */}
        <div></div>
      </div>
    </nav>
  );
};

