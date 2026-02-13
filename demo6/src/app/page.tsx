import React from 'react';
import { Monitor, Smartphone, BarChart3, Coffee, MapPin, ArrowRight, CheckCircle2, Globe, Users, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-slate-900">Serpong<span className="text-blue-600">Web</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#services" className="hover:text-blue-600 transition">Layanan</a>
              <a href="#why-us" className="hover:text-blue-600 transition">Kenapa Lokal?</a>
              <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4" />
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-multiply"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">
              Digital Agency Lokal Gading Serpong
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Website Profesional.<br />
              <span className="text-blue-400">Diskusi Tatap Muka</span> di Ruko Anda.
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Jangan beli kucing dalam karung. Kami partner digital lokal yang siap bertemu di Gading Serpong, BSD, & Alam Sutera. Support cepat, nggak pake ribet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                Jadwalkan Ketemu <Coffee className="h-5 w-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2">
                Lihat Portfolio
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                Office: Ruko Sorrento, GS
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-400" />
                50+ Happy Clients
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
              className="relative rounded-2xl shadow-2xl border border-slate-700/50 transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solusi Digital Lengkap</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dari UMKM sampai korporat, kami punya paket yang pas untuk kebutuhan bisnis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Monitor className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Company Profile</h3>
              <p className="text-slate-600 mb-6">
                Tunjukkan kredibilitas bisnis Anda dengan website elegan. SEO-friendly dan mobile responsive.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Design Premium</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Free Domain .COM</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Smartphone className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Landing Page UMKM</h3>
              <p className="text-slate-600 mb-6">
                Fokus jualan. Satu halaman panjang yang persuasif, tombol WhatsApp sticky, siap untuk iklan.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> High Conversion Copy</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Fast Loading</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <BarChart3 className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Google Ads & SEO</h3>
              <p className="text-slate-600 mb-6">
                Website jadi percuma kalau nggak ada yang lihat. Kami bantu datangkan traffic tertarget.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Keyword Research</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Monthly Report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local / CTA */}
      <section id="why-us" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Kenapa Harus Agency Lokal?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg h-fit">
                    <Coffee className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Bisa Ketemu Langsung</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Bingung jelasin via chat? Kita ketemuan aja di Starbucks Gading Serpong atau kantor Anda. Lebih clear, lebih puas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg h-fit">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Paham Market Lokal</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Kami tahu tren warga GS dan BSD. Gaya desain dan bahasa marketing kami sesuaikan dengan target market sini.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition w-full md:w-auto">
                  Hubungi Kami via WhatsApp
                </button>
              </div>
            </div>
            <div className="bg-slate-200 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Local Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-white">Serpong<span className="text-blue-500">Web</span></span>
            </div>
            <div className="text-sm">
              &copy; 2024 SerpongWeb Creative. Part of Karya Kilat Demo Expansion.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Maps</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
