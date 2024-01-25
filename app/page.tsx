import React from 'react';
import { Navbar } from '@/app/ui/Navbar';
import { MainContent } from '@/app/ui/MainContent';
import { Footer } from '@/app/ui/Footer';

export default function Home() {
  return (
    <div className="flex flex-col h-screen"> {/* Use h-screen to make sure the container takes full viewport height */}
      <Navbar />
      <div className="flex-grow" style={{ marginRight: '100px' }}> {/* Apply flex-grow here */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

