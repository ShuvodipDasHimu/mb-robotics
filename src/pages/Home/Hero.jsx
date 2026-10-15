import React from "react";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div className="flex flex-col lg:flex-row py-10 lg:py-20 items-center gap-12">
        {/* Main Text Content */}
        <div className="w-full lg:w-[65%] text-center lg:text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            AI Driven Robots
          </h1>
          <p className="text-lg sm:text-xl lg:w-[87%] leading-relaxed text-white/90 text-justify lg:text-left mx-auto lg:mx-0">
            Our AI-driven robots are designed to be highly adaptable and
            customizable, tailoring their capabilities to your unique business
            needs. Equipped with advanced machine learning algorithms, these
            robots can learn and improve over time, continuously adapting to
            changing conditions and challenges.
          </p>
        </div>

        {/* Visual Banner */}
        <div className="w-full lg:w-[35%] flex flex-col items-center mt-8 lg:mt-0">
          {/* Commented out "Who am I?" for now */}
          {/* 
          <span className="py-2.5 px-6 mb-4 text-lg font-medium rounded-lg bg-gradient-to-br from-indigo-400/80 to-purple-600/60 backdrop-blur-md shadow-lg">
            Who am I?
          </span> 
          */}
          
          <img className="w-full max-w-xs object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="/robot.png" alt="Oditi AI Robot" />
          
          {/* Constrained width with hover effect */}
          <span className="mt-4 bg-gradient-to-br from-blue-500/60 to-purple-600/60 backdrop-blur-md w-full max-w-xs sm:max-w-sm text-sm sm:text-base rounded-lg p-4 font-medium shadow-xl border border-white/10 text-center hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(129,140,248,0.4)] transition-all duration-300">
            🤖 Oditi, our newly invented robot, she is definitely a threat for humans
          </span>
        </div>
      </div>

      {/* Robot Cards Grid with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        <div className="flex flex-col justify-center bg-[#6c598e] gap-4 px-10 py-10 rounded-3xl shadow-2xl border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <img className="w-1/3 self-center drop-shadow-md hover:scale-110 transition-transform duration-300" src="/Bio Robot.png" alt="" />
          <h1 className="font-semibold text-2xl">Bio-Robot</h1>
          <p className="text-sm text-white/90">Its adaptable design allows it to adapt to various roles, from environmental monitoring to medical assistance</p>
        </div>

        <div className="flex flex-col justify-center bg-[#cb7b74] gap-4 px-10 py-10 rounded-3xl shadow-2xl border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <img className="w-1/3 self-center drop-shadow-md hover:scale-110 transition-transform duration-300" src="/Incruiser.png" alt="" />
          <h1 className="font-semibold text-2xl">Incruiser</h1>
          <p className="text-sm text-white/90">The engine-like design could enable the robot to perform highly precise movements and tasks</p>
        </div>

        <div className="flex flex-col justify-center bg-[#576c8f] gap-4 px-10 py-10 rounded-3xl shadow-2xl border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <img className="w-1/3 self-center drop-shadow-md hover:scale-110 transition-transform duration-300" src="/Mechabot.png" alt="" />
          <h1 className="font-semibold text-2xl">Mechabot</h1>
          <p className="text-sm text-white/90">The robot is equipped with sensors and vision systems to inspect engine components for defects.</p>
        </div>

        <div className="flex flex-col justify-center bg-[#4b6687] gap-4 px-10 py-10 rounded-3xl shadow-2xl border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <img className="w-1/3 self-center drop-shadow-md hover:scale-110 transition-transform duration-300" src="/Visibot.png" alt="" />
          <h1 className="font-semibold text-2xl">Visibot</h1>
          <p className="text-sm text-white/90">They offer advanced features like augmented reality, real-time translations, and seamless integration</p>
        </div>
      </div>
    </>
  );
};

export default Hero;