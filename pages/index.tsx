import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section with Background Video */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        >
          <source src="44.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/3 left-0 w-full text-center text-white z-10">
          <h1 className="text-4xl font-bold text-teal-400 animate__animated animate__fadeIn animate__delay-1s">
            Discover the Power of Artificial Intelligence
          </h1>
          <p className="mt-4 text-lg text-white animate__animated animate__fadeIn animate__delay-2s">
            Explore how AI is shaping the future and transforming industries
            worldwide.
          </p>
        </div>
      </div>

      {/* Content Section with Gradient & Animations */}
      <div className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold animate__animated animate__fadeIn">
            The Future is AI
          </h2>
          <p className="mt-4 text-lg">
            Artificial Intelligence (AI) is revolutionizing the way we interact
            with the world. From machine learning to deep learning, AI is
            pushing the boundaries of innovation and technology.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4">
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="1.jpg"
            alt="AI Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="2.jpg"
            alt="AI Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="3.jpg"
            alt="AI Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="6.jpg"
            alt="AI Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="7.jpg"
            alt="AI Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="8.jpg"
            alt="AI Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>By Ali Asghar | Aritifical Intelligence</p>
      </footer>
    </div>
  );
};

export default HomePage;
