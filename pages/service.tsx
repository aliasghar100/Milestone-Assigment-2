import React from "react";
import Navbar from "../components/Navbar";

const Services: React.FC = () => (
  <div>
    <Navbar />
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-500">Our Services</h1>
      <p className="text-lg mt-4 max-w-2xl text-center">
        Discover our range of AI services designed to help your business thrive.
      </p>
    </main>
  </div>
);

export default Services;
