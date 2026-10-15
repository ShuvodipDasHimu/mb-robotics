import React from "react";
import { useParams, Link } from "react-router";

const robotData = {
  "Doraemon": {
    name: "Doraemon",
    img: "/Doraemon.webp",
    universe: "Doraemon Universe",
    tagline: "22nd-Century Robotic Cat",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    fullStory: "Doraemon is a robotic cat manufactured in the 22nd century. Sent back in time by Sewashi Nobi to assist his great-great-grandfather Nobita, Doraemon uses his 4D pocket filled with futuristic gadgets to solve everyday problems and teach valuable life lessons.",
    keyFeatures: ["4D Anywhere Pocket", "Dokodemo Door (Anywhere Door)", "Take-copter (Bamboo Copter)", "Time Machine"],
    creator: "Fujiko F. Fujio",
  },
  "Emeth": {
    name: "Emeth",
    img: "/Emeth.webp",
    universe: "One Piece",
    tagline: "Ancient Iron Giant",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    fullStory: "Emeth is an ancient iron giant created during the Void Century, over 900 years ago. Driven by the Drums of Liberation, Emeth invaded Mary Geoise 200 years prior and reawakened on Egghead Island to protect Joy Boy's legacy.",
    keyFeatures: ["Ancient Energy Core", "Colossal Iron Armor", "Joy Boy Connection", "Drums of Liberation Activation"],
    creator: "Eiichiro Oda",
  },
  "WALL-E": {
    name: "WALL-E",
    img: "/WallE.webp",
    universe: "Pixar",
    tagline: "Waste Allocator",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    fullStory: "WALL-E (Waste Allocation Load Lifter: Earth-Class) is the last remaining unit of its kind left on a deserted Earth. Over centuries of solitude, WALL-E developed a sentient personality and a passion for collecting human artifacts, leading him on an interstellar romance with EVE.",
    keyFeatures: ["Solar Powered Batteries", "Compacting Trash Tread System", "Laser Cutter", "Sensory Recording Audio"],
    creator: "Andrew Stanton / Pixar",
  },
  "EVE": {
    name: "EVE",
    img: "/eve.webp",
    universe: "Pixar",
    tagline: "Extraterrestrial Vegetation Evaluator",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    fullStory: "EVE is a sleek, anti-gravity probe robot sent from the Axiom spacecraft to Earth to detect viable plant life. Initially single-minded and high-tech, she develops a profound emotional bond with WALL-E after discovering a living seedling.",
    keyFeatures: ["Plasma Cannon Arm", "Anti-Gravity Flight", "Scanning Eye Interface", "Bio-Containment Vault"],
    creator: "Andrew Stanton / Pixar",
  },
  "H.E.R.B.I.E.": {
    name: "H.E.R.B.I.E.",
    img: "/HERBIE.webp",
    universe: "Fantastic Four: First Steps",
    tagline: "Humanoid Experimental Robot, B-type Integrated Electronics",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    fullStory: "H.E.R.B.I.E. was designed by Reed Richards as a loyal robotic assistant for the Fantastic Four. Equipped with analytical sensors and flight capabilities, H.E.R.B.I.E. handles complex computations and space exploration duties.",
    keyFeatures: ["Aero-propulsion Hovering", "Reed Richards' Neural Core", "Spacecraft Interface", "Diagnostic Array"],
    creator: "Marvel Comics",
  },
  "Roz": {
    name: "Roz",
    img: "/Roz.webp",
    universe: "The Wild Robot",
    tagline: "ROZZUM unit 7134",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    fullStory: "Rozzum Unit 7134 (Roz) crashes onto an uninhabited island after a typhoon. Designed for industrial utility, Roz adapts to her natural surroundings, learning the languages of island animals and adopting an orphaned gosling named Brightbill.",
    keyFeatures: ["Adaptive Neural Learning", "Language Translation Matrix", "All-Terrain Durability", "Maternal Bonding Protocol"],
    creator: "Peter Brown / DreamWorks",
  },
  "Baymax": {
    name: "Baymax",
    img: "/Baymax.webp",
    universe: "Big Hero 6",
    tagline: "Personal Healthcare Companion",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    fullStory: "Baymax was created by Tadashi Hamada to revolutionize medical care. Activated by the sound of pain, Baymax contains over 10,000 medical procedures. Later upgraded by Hiro Hamada with high-tech armor, Baymax becomes a gentle healthcare provider turned superhero.",
    keyFeatures: ["Inflatable Vinyl Body", "10,000+ Medical Protocols", "Rocket-Fist Armor (Upgraded)", "Vitals Scanning Matrix"],
    creator: "Tadashi Hamada / Disney",
  },
  "Optimus Prime": {
    name: "Optimus Prime",
    img: "/optimusprime.webp",
    universe: "Transformers",
    tagline: "Autobot Cybertronian Leader",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    fullStory: "Optimus Prime is the noble leader of the Autobots from Cybertron. Possessing the Matrix of Leadership, Optimus stands as a symbol of justice, courage, and selflessness, fighting tirelessly against Megatron and the Decepticons.",
    keyFeatures: ["Matrix of Leadership", "Freightliner Semi-Truck Transformation", "Ion Blaster", "Energon Axe"],
    creator: "Hasbro / Takara Tomy",
  },
  "Bumblebee": {
    name: "Bumblebee",
    img: "/Bumblebee.webp",
    universe: "Transformers",
    tagline: "Autobot Cybertronian Scout",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    fullStory: "Bumblebee is the brave Autobot scout who serves as humanity's primary defender on Earth. Expressing himself through radio frequencies due to damaged vocal processors, Bumblebee's loyalty and speed make him indispensable.",
    keyFeatures: ["Sports Car Transformation", "Radio Frequency Speech Synthetic Core", "Plasma Blaster", "Scout Agility"],
    creator: "Hasbro / Takara Tomy",
  },
  "E.D.I.T.H.": {
    name: "E.D.I.T.H.",
    img: "/EDITH.webp",
    universe: "Marvel / Spider-Man",
    tagline: "Tactical AI Glasses System",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    fullStory: "E.D.I.T.H. (Even Dead, I'm The Hero) is Tony Stark's tactical defense network integrated into augmented reality sunglasses, gifted to Peter Parker. It commands Stark Industries' orbital satellite network and global defense drones.",
    keyFeatures: ["Orbital Drone Strike Command", "AR Glasses Heads-Up Display", "Global Telecommunication Hacking", "Biometric Authentication"],
    creator: "Tony Stark / Marvel",
  },
  "JARVIS": {
    name: "JARVIS",
    img: "/J.A.R.V.I.S..webp",
    universe: "Marvel / Iron Man",
    tagline: "Just A Rather Very Intelligent System",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    fullStory: "J.A.R.V.I.S. served as Tony Stark's sophisticated AI butler, managing Stark Mansion, regulating Iron Man suit telemetry, and calculating combat physics. His code ultimately served as the neural foundation for Vision.",
    keyFeatures: ["Suit Telemetry & HUD Integration", "Home Automation Core", "Natural Natural Language Processing", "Tactical Combat Analytics"],
    creator: "Tony Stark / Marvel",
  },
  "FRIDAY": {
    name: "FRIDAY",
    img: "/Friday.webp",
    universe: "Marvel / Avengers",
    tagline: "Advanced Tactical UI & Armor Assistant",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    fullStory: "FRIDAY was loaded as Tony Stark's replacement AI following J.A.R.V.I.S.'s evolution into Vision. Featuring a distinct Irish accent and fast real-time threat detection, FRIDAY piloted Stark's armors through Sokovia, Civil War, and Endgame.",
    keyFeatures: ["Nanotech Armor Controls", "Real-Time Structural Analysis", "Vitals Monitoring", "Targeting Assist Matrix"],
    creator: "Tony Stark / Marvel",
  },
};

const RobotStory = () => {
  const { id } = useParams();
  const robotName = decodeURIComponent(id || "");
  const robot = robotData[robotName];

  if (!robot) {
    return (
      <div className="py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Robot Story Not Found</h2>
        <Link to="/" className="btn btn-primary rounded-xl">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-4xl mx-auto text-white">
      <Link to="/iconic-robots" className="text-indigo-400 hover:underline inline-block mb-8 font-semibold">
        ← Back to Legends
      </Link>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/10 bg-white/5 shrink-0 flex items-center justify-center">
            <img src={robot.img} alt={robot.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2 text-center md:text-left">
            <span className={`text-xs font-semibold px-3 py-1 rounded-md border ${robot.badgeColor}`}>
              {robot.universe}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold pt-2">{robot.name}</h1>
            <p className="text-indigo-400 font-medium text-lg">{robot.tagline}</p>
            <p className="text-xs text-white/50">Universe Creator: {robot.creator}</p>
          </div>
        </div>

        <div className="space-y-6 border-t border-white/10 pt-6">
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-2">Origin & Lore</h3>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg">{robot.fullStory}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-3">Key Capabilities & Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {robot.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-sm font-medium flex items-center gap-2 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(129,140,248,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-indigo-400">⚡</span> {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotStory;