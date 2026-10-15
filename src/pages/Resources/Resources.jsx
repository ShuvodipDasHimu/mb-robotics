import React from 'react';

const Resources = () => {
  const guides = [
    { title: "AI Neural Network Architecture v4.2", type: "Whitepaper", readTime: "12 min read" },
    { title: "Autonomous Navigation & Obstacle Avoidance Handbook", type: "Documentation", readTime: "25 min read" },
    { title: "Robotic Arm Calibration & Kinematics", type: "API Guide", readTime: "8 min read" },
  ];

  return (
    <div className="py-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold">Developer & Technical Resources</h1>
        <p className="text-white/70">Access documentation, whitepapers, and integration SDKs for MB Robotics systems.</p>
      </div>

      <div className="space-y-4">
        {guides.map((guide, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/10 transition-colors">
            <div>
              <div className="flex gap-2 items-center mb-1">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-secondary/20 text-secondary">{guide.type}</span>
                <span className="text-xs text-white/50">{guide.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{guide.title}</h2>
            </div>
            <button className="btn btn-outline btn-sm text-white border-white/20 hover:bg-white hover:text-black rounded-xl">Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;