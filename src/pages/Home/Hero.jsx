import React from "react";

const Hero = () => {
  return (
    <div className="flex py-20 items-center">
      <div className="w-[65%]">
        <h1 className="text-8xl font-medium">AI Driven Robots</h1>
        <p className="text-xl w-[87%] leading-8 text-justify">
          Our AI-driven robots are designed to be highly adaptable and customizable, tailoring their capabilities to your unique business needs. Equipped with advanced machine learning algorithms, these robots can learn and improve over time, continuously adapting to changing conditions and challenges.
        </p>
      </div>
      <div>
        <img className="w-full" src="/robot.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
