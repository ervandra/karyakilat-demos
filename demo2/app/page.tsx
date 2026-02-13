import Image from "next/image";
import { MapPin, ArrowRight, Home, Key } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
        <span className="text-xl font-bold tracking-widest uppercase">The Maxwell</span>
        <button className="border border-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
          Contact
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center px-6 md:px-20 border-b border-white/10">
        <div className="absolute inset-0 bg-zinc-900 -z-10">
           {/* Placeholder for Luxury Image */}
           <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
        </div>
        <div className="max-w-4xl">
          <p className="text-zinc-400 uppercase tracking-[0.2em] mb-4 text-sm">Exclusive Listings</p>
          <h1 className="text-5xl md:text-8xl font-light leading-tight mb-8">
            Hunian Eksklusif <br/>
            <span className="font-serif italic text-white/80">Jantung Jakarta</span>
          </h1>
          <div className="flex gap-4">
             <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-zinc-200 transition">
               View Collection
             </button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 px-6 md:px-20">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-light">Featured Properties</h2>
          <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition">
            See All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-800 mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-zinc-700 group-hover:scale-105 transition duration-700 ease-out"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-1">Penthouse 88</h3>
                <p className="text-zinc-500 text-sm">South Jakarta</p>
              </div>
              <span className="text-white/80">IDR 45M</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-800 mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-zinc-700 group-hover:scale-105 transition duration-700 ease-out"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-1">Villa Del Luna</h3>
                <p className="text-zinc-500 text-sm">PIK 2</p>
              </div>
              <span className="text-white/80">IDR 12.5M</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-zinc-800 mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-zinc-700 group-hover:scale-105 transition duration-700 ease-out"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-1">The Loft</h3>
                <p className="text-zinc-500 text-sm">SCBD Area</p>
              </div>
              <span className="text-white/80">IDR 8.2M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-zinc-900 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8">Why Buy Now?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-white/60" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Prime Location</h3>
                  <p className="text-zinc-400 leading-relaxed">Located in the most prestigious districts with high capital appreciation potential.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Home className="w-6 h-6 text-white/60" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Modern Design</h3>
                  <p className="text-zinc-400 leading-relaxed">Architecturally significant homes designed for the modern elite.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-zinc-800 rounded-sm"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl font-serif italic mb-8">Ready to move in?</h2>
        <button className="bg-white text-black px-12 py-5 uppercase tracking-widest font-bold text-sm hover:bg-zinc-200 transition">
          Schedule Private Viewing
        </button>
      </section>

      <footer className="border-t border-white/10 py-12 px-6 text-center text-zinc-500 text-xs uppercase tracking-widest">
        &copy; 2024 The Maxwell Collections.
      </footer>
    </div>
  );
}
