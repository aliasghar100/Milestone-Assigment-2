import React from "react";
import Navbar from "../components/Navbar";

const Contact: React.FC = () => (
  <div>
    <Navbar />
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-500">Contact Us</h1>
      <p className="text-lg mt-4 max-w-2xl text-center">
        Get in touch with us for any inquiries about our AI solutions.
      </p>
    </main>
  </div>
);

export default Contact;
