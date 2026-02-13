import React from 'react';
import { ChefHat, Clock, MapPin, Star, Utensils, CheckCircle, Phone, ArrowRight, Leaf, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-stone-900">Dapur<span className="text-emerald-600">Serpong</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#menu" className="hover:text-emerald-600 transition">Menu Minggu Ini</a>
              <a href="#features" className="hover:text-emerald-600 transition">Keunggulan</a>
              <a href="#testimonials" className="hover:text-emerald-600 transition">Testimoni</a>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              Pesan Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 text-xs font-semibold tracking-wider uppercase mb-6 border border-emerald-700">
            Premium Catering Service
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Makan Siang Kantor & Rumah<br />
            <span className="text-emerald-400">Rasa Hotel Bintang 5</span>
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
            Solusi catering harian bersih, halal, dan tepat waktu. Gratis ongkir khusus area Gading Serpong, BSD, dan Alam Sutera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2">
              Lihat Menu Minggu Ini <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition backdrop-blur-sm flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5" /> Garansi Higienis
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              Covering BSD & Gading Serpong
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-green-400" />
              No MSG Added
            </div>
          </div>
        </div>
      </div>

      {/* Features / Trust Signals */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Mengapa Memilih Dapur Serpong?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Kami mengerti standar Anda. Makanan bukan sekadar kenyang, tapi juga harus bersih, sehat, dan datang tepat waktu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Utensils className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Chef Eks Bintang 5</h3>
              <p className="text-stone-600">
                Menu diracik oleh Chef yang berpengalaman 10 tahun di hotel bintang 5. Rasa premium, bukan masakan 'asal jadi'.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Clock className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Garansi Tepat Waktu</h3>
              <p className="text-stone-600">
                Makan siang sampai sebelum jam 11:30 WIB. Jika telat lebih dari 30 menit, makanan hari itu GRATIS.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Kitchen Steril & Halal</h3>
              <p className="text-stone-600">
                Dapur kami terbuka untuk divisit. Semua bahan tersertifikasi Halal, proses masak higienis dengan masker & gloves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu Preview */}
      <section id="menu" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Taste of The Week</span>
              <h2 className="text-3xl font-bold text-stone-900 mt-2">Menu Minggu Ini (12 - 17 Feb)</h2>
            </div>
            <button className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2">
              Download Katalog Full <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { day: 'Senin', main: 'Ayam Bakar Taliwang', side: 'Plecing Kangkung + Tahu', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
              { day: 'Selasa', main: 'Beef Blackpepper', side: 'Capcay Seafood + Egg Roll', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80' },
              { day: 'Rabu', main: 'Ikan Dori Salted Egg', side: 'Buncis Garlic + Corn Soup', img: 'https://images.unsplash.com/photo-1544025162-d76690b6d012?auto=format&fit=crop&w=800&q=80' },
              { day: 'Kamis', main: 'Soto Betawi Premium', side: 'Perkedel + Emping', img: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80' },
              { day: 'Jumat', main: 'Nasi Kebuli Kambing', side: 'Acar Nanas + Samosa', img: 'https://images.unsplash.com/photo-1633321769407-217134da9c91?auto=format&fit=crop&w=800&q=80' },
            ].map((menu, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {menu.day}
                  </div>
                  <img src={menu.img} alt={menu.main} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-stone-900 mb-1">{menu.main}</h4>
                  <p className="text-xs text-stone-500">{menu.side}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Langganan Sekarang</h2>
          <p className="text-emerald-100 mb-12 text-lg">Cobain dulu paket trial 3 hari. Kalau nggak cocok, nggak usah lanjut.</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:bg-white/15 transition relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Personal
              </div>
              <h3 className="text-2xl font-bold mb-2">Daily Box</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold">Rp 35rb</span>
                <span className="text-emerald-200 text-sm">/ pax</span>
              </div>
              <ul className="text-left space-y-3 mb-8 text-emerald-100 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> 1 Main Course + 2 Sides</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Free Kerupuk & Sambal</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Box Ramah Lingkungan</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Free Ongkir GS/BSD</li>
              </ul>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 rounded-lg font-bold transition">
                Pilih Paket Ini
              </button>
            </div>
            
            <div className="bg-white text-emerald-900 rounded-2xl p-8 shadow-xl relative transform md:scale-105 border-4 border-emerald-400/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Family / Office
              </div>
              <h3 className="text-2xl font-bold mb-2">Rantang Hemat</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold">Rp 120rb</span>
                <span className="text-stone-500 text-sm">/ 4 porsi</span>
              </div>
              <ul className="text-left space-y-3 mb-8 text-stone-600 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-600" /> 3 Lauk Pauk (Porsi Besar)</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-600" /> Cocok untuk Keluarga/Tim</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-600" /> Wadah Food Grade Reusable</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-emerald-600" /> Menu Anak Friendly</li>
              </ul>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition shadow-lg shadow-orange-500/30">
                Pilih Paket Ini
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-emerald-500">
              <ChefHat className="h-6 w-6" />
              <span className="text-lg font-bold">DapurSerpong</span>
            </div>
            <p className="text-sm leading-relaxed">
              Catering harian premium dengan standar kebersihan hotel bintang 5. Melayani area Gading Serpong, BSD, dan Alam Sutera.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Area Pengiriman</h4>
            <ul className="space-y-2 text-sm">
              <li>Gading Serpong (All Clusters)</li>
              <li>BSD City (Foresta, Icon, The Green)</li>
              <li>Alam Sutera (Sutera Sitara)</li>
              <li>Karawaci (Lippo Central)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0812-3456-7890</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Ruko Goldfinch, Gading Serpong</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legalitas</h4>
            <div className="flex gap-2">
              <div className="bg-stone-800 px-3 py-1 rounded text-xs font-semibold text-emerald-500 border border-stone-700">HALAL MUI</div>
              <div className="bg-stone-800 px-3 py-1 rounded text-xs font-semibold text-blue-500 border border-stone-700">SLHS LAIK SEHAT</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
