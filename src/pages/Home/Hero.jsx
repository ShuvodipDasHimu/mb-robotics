import React from "react";

const Hero = () => {
  return (
    <>
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
          <span className="relative left-110 span-2 bg-gradient-to-br w-[30%] flex rounded-lg px-8 py-4 bottom-40 font-medium">
            Oditi, our newly invented robot, she is definitely a threat for
            humans
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-16 relative -top-55">
        <div className="flex flex-col justify-center bg-[#6c598e] gap-4 px-12 py-10 rounded-2xl shadow-2xl">
          <img className="w-1/3 self-center" src="Bio Robot.png" alt="" />
          <h1 className="font-semibold text-3xl">Bio-Robot</h1>
          <p>Its adaptable design allows it to adapt to various roles, from environmental monitoring to medical assistance</p>
        </div>

        <div className="flex flex-col justify-center bg-[#cb7b74] gap-4 px-12 py-10 rounded-2xl shadow-2xl">
          <img className="w-1/3 self-center" src="Incruiser.png" alt="" />
          <h1 className="font-semibold text-3xl">Incruiser</h1>
          <p>The engine-like design could enable the robot to perform highly precise movements and tasks</p>
        </div>

        <div className="flex flex-col justify-center bg-[#576c8f] gap-4 px-12 py-10 rounded-2xl shadow-2xl">
          <img className="w-1/3 self-center" src="Incruiser.png" alt="" />
          <h1 className="font-semibold text-3xl">Mechabot</h1>
          <p>The robot is equipped with sensors and vision systems to inspect engine components for defects.</p>
        </div>

        <div className="flex flex-col justify-center bg-[#4b6687] gap-4 px-12 py-10 rounded-2xl shadow-2xl">
          <img className="w-1/3 self-center" src="Incruiser.png" alt="" />
          <h1 className="font-semibold text-3xl">Visibot</h1>
          <p>They offer advanced features like augmented reality, real-time translations, and seamless integration</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
