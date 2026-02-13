import Image from "next/image";
import { MapPin, ArrowRight, Home, Key, TrendingUp, Compass, Star, User } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-6 py-6 flex justify-between items-center transition-all duration-300 hover:bg-black/90">
        <span className="text-xl font-bold tracking-[0.3em] uppercase border-2 border-white/20 p-2">The Maxwell</span>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-light text-zinc-400">
          <a href="#collection" className="hover:text-white transition">Collection</a>
          <a href="#guides" className="hover:text-white transition">Neighborhoods</a>
          <a href="#concierge" className="hover:text-white transition">Concierge</a>
          <a href="#investment" className="hover:text-white transition">Investment</a>
        </div>
        <button className="border border-white/20 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition">
          Private Viewing
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center px-6 md:px-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900 -z-10">
           {/* Placeholder for Luxury Video/Image Background */}
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-80" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-5xl z-10 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-slide-in-right" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            <span className="h-[1px] w-12 bg-white/40"></span>
            <p className="text-zinc-400 uppercase tracking-[0.3em] text-xs">Curated Luxury Estates</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-thin leading-[0.9] mb-10 tracking-tight">
            The Art of <br/>
            <span className="font-serif italic text-white/90 relative inline-block">
              Living Well
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
            </span>
            <span className="block text-2xl md:text-3xl mt-4 font-light text-zinc-500 tracking-wide">Jakarta's Most Prestigious Addresses</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 mt-12 opacity-0 animate-fade-in" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
             <button className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-zinc-300 transition hover:scale-105 duration-300">
               Explore Collection
             </button>
             <button className="flex items-center gap-4 text-zinc-400 px-6 py-4 uppercase tracking-[0.2em] text-xs hover:text-white transition group">
               <span className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-white transition">
                 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
               </span>
               Watch Showreel
             </button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="collection" className="py-32 px-6 md:px-20 bg-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">01 / Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-light">Signature Residences</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition mt-8 md:mt-0 group">
            View All Properties <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-900 mb-8 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
               <div className="absolute top-6 left-6 bg-white/10 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest border border-white/20">Just Listed</div>
               <div className="absolute bottom-6 left-6">
                 <p className="text-zinc-300 text-xs tracking-widest mb-1">South Jakarta</p>
                 <h3 className="text-2xl font-serif italic">The Langham Penthouse</h3>
               </div>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-4">
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>4 Beds</span>
                <span>•</span>
                <span>5 Baths</span>
                <span>•</span>
                <span>520 sqm</span>
              </div>
              <span className="text-white font-light tracking-wide">IDR 45.000.000.000</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-900 mb-8 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6">
                 <p className="text-zinc-300 text-xs tracking-widest mb-1">PIK 2</p>
                 <h3 className="text-2xl font-serif italic">Villa Del Luna (Waterfront)</h3>
               </div>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-4">
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>5 Beds</span>
                <span>•</span>
                <span>Pool</span>
                <span>•</span>
                <span>800 sqm</span>
              </div>
              <span className="text-white font-light tracking-wide">IDR 12.500.000.000</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-900 mb-8 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6">
                 <p className="text-zinc-300 text-xs tracking-widest mb-1">SCBD Area</p>
                 <h3 className="text-2xl font-serif italic">The Loft @ District 8</h3>
               </div>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-4">
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>2 Beds</span>
                <span>•</span>
                <span>Duplex</span>
                <span>•</span>
                <span>180 sqm</span>
              </div>
              <span className="text-white font-light tracking-wide">IDR 8.200.000.000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guides */}
      <section id="guides" className="py-32 px-6 md:px-20 bg-zinc-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4 block">02 / Locations</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Curated Neighborhoods</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just sell homes; we introduce you to lifestyles. Explore our detailed guides on Jakarta's most coveted districts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition duration-500"></div>
               <div className="aspect-video bg-zinc-800 scale-100 group-hover:scale-105 transition duration-700 ease-out"></div>
               <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl font-serif italic mb-2">Menteng</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-300 border-l border-white/50 pl-3">Old Money Heritage • Embassies • Greenery</p>
               </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition duration-500"></div>
               <div className="aspect-video bg-zinc-800 scale-100 group-hover:scale-105 transition duration-700 ease-out"></div>
               <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl font-serif italic mb-2">Senopati</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-300 border-l border-white/50 pl-3">Culinary Hub • Modern Living • Nightlife</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Analysis */}
      <section id="investment" className="py-32 px-6 md:px-20 bg-black text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4 block">03 / Insight</span>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Investment Intelligence</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-white/10 p-8 hover:bg-white/5 transition duration-300">
               <TrendingUp className="w-8 h-8 text-white/80 mb-6" />
               <h3 className="text-lg font-medium mb-3">Capital Appreciation</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">
                 Historical data shows a consistent 8-12% annual growth in our curated districts over the last decade.
               </p>
            </div>
            <div className="border border-white/10 p-8 hover:bg-white/5 transition duration-300">
               <Compass className="w-8 h-8 text-white/80 mb-6" />
               <h3 className="text-lg font-medium mb-3">Market Timing</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">
                 Our analysts predict a surge in high-end demand in Q4 2024. Now is the optimal entry point.
               </p>
            </div>
            <div className="border border-white/10 p-8 hover:bg-white/5 transition duration-300">
               <Key className="w-8 h-8 text-white/80 mb-6" />
               <h3 className="text-lg font-medium mb-3">Rental Yields</h3>
               <p className="text-zinc-500 text-sm leading-relaxed">
                 Expect 5-7% gross yield for furnished units in CBD areas, driven by expatriate demand.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Concierge */}
      <section id="concierge" className="py-32 px-6 md:px-20 bg-zinc-900 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4 block">04 / Service</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8">Beyond Real Estate: <br/><span className="font-serif italic text-white/70">Client Concierge</span></h2>
            <p className="text-zinc-400 mb-8 leading-relaxed font-light">
              We understand that buying a luxury home is just the beginning. Our dedicated concierge team handles everything from legal paperwork to interior design consultation.
            </p>
            <ul className="space-y-6">
               {[
                 "Priority Access to Off-Market Listings",
                 "Legal & Tax Advisory for Property Assets",
                 "Interior Designer & Contractor Network",
                 "Relocation Assistance for Expatriates"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-sm tracking-wide text-zinc-300">
                   <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                   {item}
                 </li>
               ))}
            </ul>
          </div>
          <div className="h-[500px] bg-zinc-800 relative p-8 flex items-center justify-center border border-white/5">
             <div className="absolute inset-4 border border-white/10"></div>
             <div className="text-center">
                <Star className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <h3 className="text-xl font-serif italic mb-2">Exclusive Access</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest max-w-xs mx-auto">
                   Join our private client list for early notifications on trophy assets.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-10">Acquire Your Legacy</h2>
          <p className="text-zinc-400 mb-12 font-light">
            Schedule a confidential consultation with our senior advisors.
          </p>
          <button className="bg-white text-black px-12 py-5 uppercase tracking-[0.2em] font-bold text-xs hover:bg-zinc-200 transition transform hover:-translate-y-1 duration-300">
            Request Private Viewing
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-16 px-6 md:px-20 bg-black text-zinc-600 text-xs uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <span className="text-white font-bold block mb-2">The Maxwell</span>
           <span>Luxury Real Estate &copy; 2024</span>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition">Instagram</a>
           <a href="#" className="hover:text-white transition">LinkedIn</a>
           <a href="#" className="hover:text-white transition">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
