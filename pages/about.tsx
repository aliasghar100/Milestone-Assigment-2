import React from "react";
import Navbar from "../components/Navbar";

const About: React.FC = () => (
  <div>
    <Navbar />
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-500">About Us</h1>
      <p className="text-lg mt-4 max-w-2xl text-center">
        Learn more about our mission to drive innovation in Artificial
        Intelligence.
      </p>
    </main>
  </div>
);

export default About;
