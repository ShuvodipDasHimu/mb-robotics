import React from 'react';

const Products = () => {
  const allProducts = [
    { name: "Bio-Robot", img: "Bio Robot.png", category: "Medical & Environmental", price: "$12,400" },
    { name: "Incruiser", img: "Incruiser.png", category: "Heavy Industrial", price: "$24,500" },
    { name: "Mechabot", img: "Mechabot.png", category: "Inspection & Diagnostics", price: "$18,900" },
    { name: "Visibot", img: "Visibot.png", category: "AR & Assistance", price: "$9,800" },
  ];

  return (
    <div className="py-12">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold">Our Robotic Fleet</h1>
        <p className="text-white/70">Browse our high-performance autonomous AI robots engineered for industry-leading precision and adaptability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.map((prod, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-indigo-400/50 transition-all">
            <div>
              <span className="text-xs px-3 py-1 bg-indigo-400/20 text-indigo-400 font-semibold rounded-full">{prod.category}</span>
              <div className="h-48 flex items-center justify-center my-6">
                <img src={prod.img} alt={prod.name} className="max-h-full object-contain drop-shadow-xl" />
              </div>
              <h2 className="text-2xl font-bold">{prod.name}</h2>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-lg font-semibold text-indigo-400">{prod.price}</span>
              <button className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white border-none rounded-xl px-4">Inquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;