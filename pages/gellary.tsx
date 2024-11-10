import React from "react";
import Navbar from "../components/Navbar";

const Gallery: React.FC = () => (
  <div>
    <Navbar />
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-500">Gallery</h1>
      <p className="text-lg mt-4 max-w-2xl text-center">
        A glimpse into our AI projects and accomplishments.
      </p>
    </main>
  </div>
);

export default Gallery;
