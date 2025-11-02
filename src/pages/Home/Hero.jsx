import React from "react";

const Hero = () => {
  return (
    <div className="flex py-20 items-center">
      <div className="w-[65%]">
        <h1 className="text-8xl font-medium">AI Driven Robots</h1>
        <p className="text-xl w-[87%] leading-8 text-justify">
          Our AI-driven robots are designed to be highly adaptable and
          customizable, tailoring their capabilities to your unique business
          needs. Equipped with advanced machine learning algorithms, these
          robots can learn and improve over time, continuously adapting to
          changing conditions and challenges.
        </p>
      </div>
      <div>
        <span className="py-10 font-medium px-8 text-2xl span rounded-lg bg-gradient-to-br top-22 left-18 relative">
          Who am I?
        </span>
        <img className="w-full" src="/robot.png" alt="" />
        <span className="relative left-110 span-2 bg-gradient-to-br w-[30%] flex rounded-lg px-8 py-4 bottom-20">Oditi, our newly invented robot, she is definitely a threat for humans</span>
      </div>
    </div>
  );
};

export default Hero;
