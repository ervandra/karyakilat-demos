import Image from "next/image";
import { Star, Calendar, Sparkles, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF0F5] text-stone-800 font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#EFAFAF] text-white text-center text-sm py-2 font-medium tracking-wide">
        Opening Promo: Diskon 50% All Treatments (Until 31 Oct)
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-2xl font-serif text-[#D48F8F]">Maxwell<span className="text-stone-400">Clinic</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-[#D48F8F]">Treatments</a>
            <a href="#" className="hover:text-[#D48F8F]">Doctors</a>
            <a href="#" className="hover:text-[#D48F8F]">Testimonials</a>
          </div>
          <button className="bg-[#D48F8F] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c27d7d] transition">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="relative z-10">
             <div className="flex items-center gap-2 text-[#D48F8F] font-bold uppercase tracking-wider text-sm mb-4">
               <Sparkles className="w-4 h-4" /> Aesthetic & Wellness
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-800 mb-6 leading-tight">
               Wujudkan Kulit <span className="text-[#D48F8F] italic">Impian</span>
             </h1>
             <p className="text-lg text-stone-500 mb-8 max-w-md leading-relaxed">
               Teknologi laser terbaru dan dokter spesialis berpengalaman di Ruko Maxwell, Gading Serpong.
             </p>
             <div className="flex gap-4">
                <button className="bg-[#D48F8F] text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:-translate-y-1 transition">
                  Konsultasi Gratis
                </button>
                <button className="flex items-center gap-2 text-stone-600 px-8 py-4 font-medium hover:text-[#D48F8F] transition">
                  Lihat Pricelist
                </button>
             </div>
           </div>
           <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-t-[100px] rounded-b-[40px] shadow-2xl overflow-hidden relative border-8 border-white">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#D48F8F]/20 to-transparent"></div>
                 {/* Placeholder Image */}
                 <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                    Model Photo
                 </div>
              </div>
              {/* Floating Review */}
              <div className="absolute top-1/2 -right-6 bg-white p-4 rounded-2xl shadow-xl max-w-[200px]">
                 <div className="flex text-yellow-400 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                 </div>
                 <p className="text-xs text-stone-600 italic">"Kulit jadi glowing banget setelah 1x treatment!"</p>
              </div>
           </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-white px-6">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif text-stone-800 mb-4">Popular Treatments</h2>
               <p className="text-stone-500">Solusi untuk setiap permasalahan kulit wajah Anda.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Laser Glowing", price: "499k", desc: "Mencerahkan wajah kusam secara instan tanpa downtime." },
                 { title: "Acne Clear", price: "350k", desc: "Tuntaskan jerawat meradang dan bekasnya." },
                 { title: "V-Shape Hifu", price: "1.2jt", desc: "Pengencangan wajah tanpa operasi, hasil langsung terlihat." }
               ].map((item, i) => (
                 <div key={i} className="bg-[#FFF0F5] p-8 rounded-3xl hover:bg-[#ffe6ee] transition cursor-pointer group">
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-2xl font-serif text-stone-800">{item.title}</h3>
                       <span className="bg-white text-[#D48F8F] px-3 py-1 rounded-full text-xs font-bold">Start {item.price}</span>
                    </div>
                    <p className="text-stone-600 mb-8">{item.desc}</p>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D48F8F] group-hover:scale-110 transition">
                       <ArrowRightIcon />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Doctor */}
      <section className="py-24 px-6 bg-[#D48F8F] text-white overflow-hidden">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <div className="aspect-square bg-white/20 rounded-full p-4">
                  <div className="w-full h-full bg-white/90 rounded-full overflow-hidden">
                     {/* Placeholder Doctor */}
                     <div className="w-full h-full flex items-center justify-center text-[#D48F8F]">Doctor Photo</div>
                  </div>
               </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
               <h2 className="text-4xl font-serif mb-6">Meet Dr. Sarah, Sp.KK</h2>
               <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  "Kecantikan bukan hanya tentang penampilan, tapi tentang kesehatan kulit yang terpancar dari dalam. Kami menggunakan protokol medis terstandar untuk keamanan Anda."
               </p>
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                     <div className="text-3xl font-bold">10+</div>
                     <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div>
                     <div className="text-3xl font-bold">2k+</div>
                     <div className="text-sm opacity-80">Happy Patients</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
         <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-serif text-stone-800 mb-8">Siap Tampil Percaya Diri?</h2>
            <div className="bg-[#FFF0F5] p-8 rounded-3xl flex flex-col gap-4">
               <div className="flex items-center gap-4 text-stone-600">
                  <MapPin className="text-[#D48F8F]" />
                  <span>Ruko Maxwell, Gading Serpong, Tangerang</span>
               </div>
               <div className="flex items-center gap-4 text-stone-600">
                  <Calendar className="text-[#D48F8F]" />
                  <span>Senin - Minggu (10.00 - 20.00)</span>
               </div>
               <button className="w-full bg-[#D48F8F] text-white py-4 rounded-xl font-bold mt-4 hover:bg-[#c27d7d] transition">
                  WhatsApp Booking Now
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

function ArrowRightIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
   )
}
