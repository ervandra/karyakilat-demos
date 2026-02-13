import Image from "next/image";
import { Star, Calendar, Sparkles, MapPin, Microscope, Heart, Clock, User, CheckCircle, Shield } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF0F5] text-stone-800 font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#EFAFAF] text-white text-center text-xs py-2 font-medium tracking-wide animate-pulse-slow">
        Opening Promo: Diskon 50% All Treatments (Valid Until 31 Oct)
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#FDEAEA]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-2xl font-serif text-[#D48F8F] tracking-tight">Maxwell<span className="text-stone-400 font-light italic">Clinic</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#treatments" className="hover:text-[#D48F8F] transition relative group">Treatments<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D48F8F] transition-all group-hover:w-full"></span></a>
            <a href="#science" className="hover:text-[#D48F8F] transition relative group">Science<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D48F8F] transition-all group-hover:w-full"></span></a>
            <a href="#doctors" className="hover:text-[#D48F8F] transition relative group">Doctors<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D48F8F] transition-all group-hover:w-full"></span></a>
          </div>
          <button className="bg-[#D48F8F] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#c27d7d] transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent -z-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D48F8F]/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="relative z-10 animate-fade-in-up">
             <div className="inline-flex items-center gap-2 text-[#D48F8F] bg-white px-4 py-1.5 rounded-full shadow-sm font-bold uppercase tracking-wider text-xs mb-6 border border-[#FDEAEA]">
               <Sparkles className="w-3 h-3" /> Aesthetic & Wellness Center
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-800 mb-6 leading-[1.1]">
               Wujudkan Kulit <br/><span className="text-[#D48F8F] italic">Impian Anda</span>
             </h1>
             <p className="text-lg text-stone-500 mb-10 max-w-md leading-relaxed font-light">
               Perpaduan teknologi laser USA terbaru dan keahlian dokter spesialis dermatologi untuk hasil yang nyata, aman, dan natural.
             </p>
             <div className="flex gap-4">
                <button className="bg-[#D48F8F] text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:-translate-y-1 transition flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Konsultasi Gratis
                </button>
                <button className="flex items-center gap-2 text-stone-600 px-8 py-4 font-medium hover:text-[#D48F8F] transition border border-transparent hover:border-[#D48F8F]/20 rounded-full">
                  Lihat Pricelist
                </button>
             </div>
             <div className="mt-12 flex items-center gap-8 border-t border-stone-200/50 pt-8">
                <div>
                   <div className="text-2xl font-serif text-[#D48F8F]">FDA</div>
                   <div className="text-xs text-stone-400 uppercase tracking-wide">Approved Tech</div>
                </div>
                <div className="w-px h-8 bg-stone-200"></div>
                <div>
                   <div className="text-2xl font-serif text-[#D48F8F]">10k+</div>
                   <div className="text-xs text-stone-400 uppercase tracking-wide">Procedures</div>
                </div>
             </div>
           </div>
           
           <div className="relative animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="aspect-[4/5] bg-white rounded-t-[120px] rounded-b-[40px] shadow-2xl overflow-hidden relative border-8 border-white group">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#D48F8F]/30 via-transparent to-transparent z-10"></div>
                 {/* Placeholder Image */}
                 <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-300 font-serif italic text-2xl group-hover:scale-105 transition duration-700">
                    Model Portrait
                 </div>
              </div>
              
              {/* Floating Review */}
              <div className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-xl max-w-[220px] border border-[#FDEAEA] animate-bounce-slow">
                 <div className="flex text-yellow-400 mb-2 gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                 </div>
                 <p className="text-xs text-stone-600 italic leading-relaxed">"Kulit jadi glowing banget setelah 1x treatment! Dokternya super ramah & detail."</p>
                 <div className="mt-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-stone-200 rounded-full"></div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase">Jessica, Model</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Science */}
      <section id="science" className="py-24 px-6 bg-white relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#D48F8F] to-transparent"></div>
         <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#D48F8F] font-bold tracking-widest text-xs uppercase mb-4 block">Medical Grade Technology</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">The Science of Beauty</h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
               Kami tidak menggunakan "obat racikan" tanpa label. Semua protokol perawatan berbasis bukti medis (Evidence-Based Medicine) dan menggunakan teknologi yang telah teruji klinis.
            </p>
         </div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFF0F5] p-10 rounded-3xl text-center group hover:bg-[#ffe6ee] transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#D48F8F] shadow-sm group-hover:scale-110 transition">
                  <Microscope className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif mb-4 text-stone-800">Analisa Kulit AI</h3>
               <p className="text-sm text-stone-500 leading-relaxed">
                  Menggunakan VISIA® Skin Analysis untuk melihat kondisi lapisan kulit terdalam yang tidak kasat mata, memastikan diagnosa akurat.
               </p>
            </div>
            <div className="bg-[#FFF0F5] p-10 rounded-3xl text-center group hover:bg-[#ffe6ee] transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#D48F8F] shadow-sm group-hover:scale-110 transition">
                  <Shield className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif mb-4 text-stone-800">Sterilisasi Autoclave</h3>
               <p className="text-sm text-stone-500 leading-relaxed">
                  Semua alat logam disterilisasi dengan standar rumah sakit (Grade B Autoclave) untuk mencegah infeksi silang 100%.
               </p>
            </div>
            <div className="bg-[#FFF0F5] p-10 rounded-3xl text-center group hover:bg-[#ffe6ee] transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#D48F8F] shadow-sm group-hover:scale-110 transition">
                  <Sparkles className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif mb-4 text-stone-800">Laser PicoWay®</h3>
               <p className="text-sm text-stone-500 leading-relaxed">
                  Gold standard untuk menghilangkan pigmentasi dan bekas jerawat. Energi picosecond memecah pigmen tanpa merusak kulit sekitar.
               </p>
            </div>
         </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-24 bg-[#FFF0F5] px-6">
         <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl font-serif text-stone-800 mb-4">Signature Treatments</h2>
                  <p className="text-stone-500">Dikurasi khusus untuk kulit tropis Indonesia.</p>
               </div>
               <button className="hidden md:block text-[#D48F8F] font-medium hover:underline decoration-[#D48F8F]">View Full Menu</button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Glass Skin Laser", price: "499k", desc: "Mencerahkan wajah kusam secara instan, mengecilkan pori, dan memberikan efek glowing tanpa downtime.", tag: "BEST SELLER" },
                 { title: "Acne Fighter Peeling", price: "350k", desc: "Kombinasi chemical peeling medis untuk mengeringkan jerawat meradang dan memudarkan bekas kemerahan.", tag: "ACNE PRONE" },
                 { title: "Hifu V-Shape Lift", price: "1.2jt", desc: "Teknologi ultrasound untuk mengencangkan kulit kendur di area pipi dan double chin. Hasil langsung terlihat.", tag: "ANTI AGING" }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer group border border-[#FDEAEA]">
                    <div className="flex justify-between items-start mb-6">
                       <span className="bg-[#FFF0F5] text-[#D48F8F] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">{item.tag}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-stone-800 mb-2">{item.title}</h3>
                    <div className="text-[#D48F8F] font-medium mb-6">Start from {item.price}</div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-8 border-t border-stone-100 pt-6">{item.desc}</p>
                    <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest group-hover:text-[#D48F8F] transition">
                       Book Now <ArrowRightIcon className="w-4 h-4" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Before/After Methodology */}
      <section className="py-24 px-6 bg-white">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">Real Results, Real People</h2>
               <p className="text-stone-500 max-w-2xl mx-auto">
                  Kami transparan dengan hasil. Tidak ada editing berlebihan. Ini adalah dokumentasi perjalanan pasien kami.
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-stone-50 p-6 rounded-3xl">
                  <div className="flex gap-4 mb-6">
                     <div className="w-1/2 aspect-square bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm font-bold">BEFORE</div>
                     <div className="w-1/2 aspect-square bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm font-bold">AFTER</div>
                  </div>
                  <h4 className="font-serif text-xl mb-2">Acne Scars Recovery</h4>
                  <p className="text-sm text-stone-500 mb-4">Treatment: 3x CO2 Fractional Laser + PRP</p>
                  <div className="flex items-center gap-2 text-xs text-stone-400 italic">
                     <Clock className="w-3 h-3" /> Durasi: 3 Bulan
                  </div>
               </div>
               
               <div className="bg-stone-50 p-6 rounded-3xl">
                  <div className="flex gap-4 mb-6">
                     <div className="w-1/2 aspect-square bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm font-bold">BEFORE</div>
                     <div className="w-1/2 aspect-square bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm font-bold">AFTER</div>
                  </div>
                  <h4 className="font-serif text-xl mb-2">Pigmentation Removal</h4>
                  <p className="text-sm text-stone-500 mb-4">Treatment: 5x PicoWay Laser</p>
                  <div className="flex items-center gap-2 text-xs text-stone-400 italic">
                     <Clock className="w-3 h-3" /> Durasi: 5 Bulan
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Meet the Doctors */}
      <section id="doctors" className="py-24 px-6 bg-[#D48F8F] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif mb-4">Meet Our Experts</h2>
               <p className="text-white/80">Dokter kami bukan sekadar estetikawan, mereka adalah dermatolog bersertifikasi.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="flex justify-center md:justify-end">
                  <div className="relative w-64 h-80 bg-white/10 rounded-[40px] overflow-hidden backdrop-blur-sm border border-white/20">
                     {/* Placeholder Doctor Photo */}
                     <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center text-white/50">Dr. Sarah Photo</div>
                  </div>
               </div>
               <div>
                  <h3 className="text-3xl font-serif mb-2">dr. Sarah Wijaya, Sp.KK</h3>
                  <p className="text-white/70 uppercase tracking-widest text-xs mb-6">Chief Dermatologist</p>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed font-light italic">
                     "Kecantikan yang sesungguhnya adalah ketika Anda merasa nyaman dengan kulit Anda sendiri. Fokus saya adalah mengembalikan kesehatan kulit, bukan mengubah wajah Anda menjadi orang lain."
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><CheckCircle className="w-5 h-5"/></div>
                        <div>
                           <div className="font-bold">Lulusan Terbaik UI</div>
                           <div className="text-xs text-white/70">Fakultas Kedokteran, Spesialis Kulit & Kelamin</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><CheckCircle className="w-5 h-5"/></div>
                        <div>
                           <div className="font-bold">International Fellow</div>
                           <div className="text-xs text-white/70">American Academy of Dermatology (AAD)</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-24 px-6 bg-white border-b border-stone-100">
         <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-[#D48F8F] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-stone-800 mb-4">Your Safety is Our Priority</h2>
            <p className="text-stone-500 mb-12">Protokol kebersihan kami melebihi standar klinik biasa.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div className="p-6 bg-stone-50 rounded-2xl">
                  <div className="font-bold text-stone-800 mb-2">Single Use Kit</div>
                  <p className="text-xs text-stone-500">Spons, jarum, dan alas bed selalu baru untuk setiap pasien.</p>
               </div>
               <div className="p-6 bg-stone-50 rounded-2xl">
                  <div className="font-bold text-stone-800 mb-2">HEPA Filter</div>
                  <p className="text-xs text-stone-500">Udara di ruang tindakan disaring terus menerus.</p>
               </div>
               <div className="p-6 bg-stone-50 rounded-2xl">
                  <div className="font-bold text-stone-800 mb-2">UV Sterilization</div>
                  <p className="text-xs text-stone-500">Ruangan disterilkan dengan sinar UV-C setiap malam.</p>
               </div>
               <div className="p-6 bg-stone-50 rounded-2xl">
                  <div className="font-bold text-stone-800 mb-2">Routine Swab</div>
                  <p className="text-xs text-stone-500">Staff rutin melakukan pemeriksaan kesehatan berkala.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#FFF0F5] text-center">
         <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-serif text-stone-800 mb-8">Start Your Skin Journey</h2>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-[#FDEAEA] flex flex-col gap-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-[#D48F8F]"></div>
               <div className="flex items-center gap-4 text-stone-600 text-left border-b border-stone-100 pb-4">
                  <div className="bg-[#FFF0F5] p-3 rounded-full text-[#D48F8F]"><MapPin className="w-5 h-5" /></div>
                  <div>
                     <div className="font-bold text-stone-800">Ruko Maxwell</div>
                     <div className="text-xs">Jl. Boulevard Gading Serpong, Tangerang</div>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-stone-600 text-left border-b border-stone-100 pb-4">
                  <div className="bg-[#FFF0F5] p-3 rounded-full text-[#D48F8F]"><Clock className="w-5 h-5" /></div>
                  <div>
                     <div className="font-bold text-stone-800">Opening Hours</div>
                     <div className="text-xs">Senin - Minggu (10.00 - 20.00)</div>
                  </div>
               </div>
               <button className="w-full bg-[#D48F8F] text-white py-4 rounded-xl font-bold mt-2 hover:bg-[#c27d7d] transition flex items-center justify-center gap-2">
                  <User className="w-5 h-5" /> Book via WhatsApp
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 text-center text-stone-400 text-sm">
         <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-[#D48F8F] transition">Instagram</a>
            <a href="#" className="hover:text-[#D48F8F] transition">TikTok</a>
            <a href="#" className="hover:text-[#D48F8F] transition">YouTube</a>
         </div>
         <p>&copy; 2024 Maxwell Clinic. Registered Medical Facility.</p>
      </footer>
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
   )
}
