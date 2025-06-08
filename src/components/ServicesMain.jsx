import { Sidebar } from 'lucide-react';
import React from 'react';
import Locations from './Service';


function ServiceMain() {
  return (
    <div className="bg-gray-200 min-h-screen text-black">
      <div className="flex max-w-7xl mx-auto pt-12 px-6">
        <Sidebar />
        <Locations />
      </div>
    </div>
  );
}

export default ServiceMain;
