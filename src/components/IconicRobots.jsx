import React from "react";

const IconicRobots = () => {
  const popCultureRobots = [
    {
      name: "Doraemon",
      img: "/Doraemon.webp",
      universe: "Doraemon Universe",
      tagline: "22nd-Century Robotic Cat",
      desc: "An iconic cat-like robot sent back in time with a 4D pocket full of futuristic gadgets to assist and guide.",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      name: "Emeth",
      img: "/Emeth.webp",
      universe: "One Piece",
      tagline: "Ancient Iron Giant",
      desc: "A legendary colossal mechanical giant powered by ancient, mystery-shrouded technology from 900 years ago.",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      name: "WALL-E",
      img: "/WallE.webp",
      universe: "Pixar",
      tagline: "Waste Allocator",
      desc: "A heart-warming waste allocation unit designed for cleanup, bridging Earth's cleanup duties and a new beginning.",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      name: "EVE",
      img: "/eve.webp",
      universe: "Pixar",
      tagline: "Extraterrestrial Vegetation Evaluator",
      desc: "A sleek, high-tech search probe robot designed to evaluate a planet for the existence of life, complementing WALL-E.",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      name: "H.E.R.B.I.E.",
      img: "/HERBIE.webp",
      universe: "Fantastic Four: First Steps",
      tagline: "Humanoid Experimental Robot, B-type Integrated Electronics",
      desc: "The quirky, loyal artificial companion built to assist the Fantastic Four with complex science and space faring.",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      name: "Roz",
      img: "/Roz.webp",
      universe: "The Wild Robot",
      tagline: "ROZZUM unit 7134",
      desc: "A futuristic helper robot stranded on an uninhabited island, learning empathy, motherly instincts, and wildlife survival.",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    },
    {
      name: "Baymax",
      img: "/Baymax.webp",
      universe: "Big Hero 6",
      tagline: "Personal Healthcare Companion",
      desc: "An inflatable healthcare assistant designed by Tadashi Hamada, programmed to care for human physical and emotional well-being.",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      name: "Optimus Prime",
      img: "/optimusprime.webp",
      universe: "Transformers",
      tagline: "Autobot Cybertronian Leader",
      desc: "Legendary sentinel and brave leader of the Autobots, transforming into a truck and leading the fight for liberty.",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
    {
      name: "Bumblebee",
      img: "/Bumblebee.webp",
      universe: "Transformers",
      tagline: "Autobot Cybertronian Scout",
      desc: "Courageous scout and a skilled warrior of the Autobots, transforming into a sports car and protecting humanity.",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
        {
      name: "E.D.I.T.H.",
      img: "/EDITH.webp",
      universe: "Marvel / Spider-Man",
      tagline: "Tactical AI Glasses System",
      desc: "Even Dead, I'm The Hero — Tony Stark's augmented reality tactical defense network & orbital weapons intelligence.",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
    {
      name: "JARVIS",
      img: "/J.A.R.V.I.S..webp",
      universe: "Marvel / Iron Man",
      tagline: "Just A Rather Very Intelligent System",
      desc: "Tony Stark's primary home automation and sophisticated tactical AI assistant before evolving into the Vision.",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    },
    {
      name: "FRIDAY",
      img: "/Friday.webp",
      universe: "Marvel / Avengers",
      tagline: "Advanced Tactical UI & Armor Assistant",
      desc: "Tony Stark's sharp, high-performance Irish-accented artificial intelligence built straight into his later Iron Man suits.",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    },
  ];

  return (
    <section className="py-16 my-12">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-indigo-400/20 text-indigo-400 border border-indigo-400/30">
          Pop-Culture & Sci-Fi Legends
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Robotics In Fiction & Beyond
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          From futuristic companions to galactic guardians — explore the legendary fictional AI & robotic icons that inspire our real-world innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popCultureRobots.map((bot, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-indigo-400/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl relative"
          >
            {/* Round Picture / Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 flex items-center justify-center">
              <img 
                src={bot.img} 
                alt={bot.name}
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.parentNode.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M8 14h8"></path><path d="M12 10V6"></path><path d="M9 10h6"></path></svg>
                  `;
                }}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3 pr-20">
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${bot.badgeColor}`}>
                  {bot.universe}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 pr-20">{bot.name}</h3>
              <p className="text-xs font-medium text-indigo-400 mb-3">{bot.tagline}</p>
              <p className="text-sm text-white/75 leading-relaxed">{bot.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>Status: Legend</span>
              <span className="text-indigo-400 font-semibold cursor-pointer hover:underline">
                Explore Story →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconicRobots;