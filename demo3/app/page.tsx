import Image from "next/image";
import { FileText, Check, Clock, ChevronDown, Phone } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-700 text-white p-1 rounded">
               <FileText className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">TaxPro<span className="text-teal-700">Indonesia</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-teal-700">Layanan</a>
            <a href="#" className="hover:text-teal-700">Tentang</a>
            <a href="#" className="hover:text-teal-700">Artikel</a>
          </div>
          <a href="#" className="bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-800 transition shadow-md hover:shadow-lg">
            Konsultasi Gratis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
             <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">
               Mitra Pajak Resmi
             </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Urus Pajak Tanpa <span className="text-teal-700">Was-was</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kami membantu UMKM dan Profesional mengelola pelaporan pajak dengan tepat, hemat, dan patuh hukum. Hindari denda yang tidak perlu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition">
                 <Phone className="w-5 h-5" /> Hubungi Konsultan
               </button>
               <button className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition">
                 Pelajari Layanan
               </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>)}
               </div>
               <p>Dipercaya 200+ Klien Aktif</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                {/* Illustration Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl">
                   Ilustrasi
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600"><Check className="w-5 h-5"/></div>
                   <div>
                      <div className="font-bold text-slate-900">SPT Tahunan</div>
                      <div className="text-xs text-slate-500">Selesai Tepat Waktu</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Masalah Pajak yang Sering Dihadapi</h2>
          <p className="text-slate-600">Jangan biarkan ketidaktahuan membuat bisnis Anda merugi.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
           {[
             { title: "Takut Diaudit", desc: "Dokumen tidak rapi membuat resiko pemeriksaan meningkat." },
             { title: "Denda Keterlambatan", desc: "Lupa lapor atau bayar mengakibatkan denda yang membengkak." },
             { title: "Salah Hitung", desc: "Membayar lebih dari yang seharusnya atau kurang bayar yang fatal." }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-700 font-bold text-xl mb-6">
                   {i+1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-teal-900 text-white">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">3 Langkah Mudah</h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
               <div>
                  <div className="w-16 h-16 bg-teal-800 rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold mb-2">Konsultasi</h3>
                  <p className="text-teal-100">Diskusi kondisi keuangan dan masalah perpajakan Anda.</p>
               </div>
               <div>
                  <div className="w-16 h-16 bg-teal-800 rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold mb-2">Analisa & Audit</h3>
                  <p className="text-teal-100">Kami merapikan laporan dan menghitung kewajiban yang tepat.</p>
               </div>
               <div>
                  <div className="w-16 h-16 bg-teal-800 rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold mb-2">Pelaporan</h3>
                  <p className="text-teal-100">Pengajuan SPT tepat waktu dan arsip dokumen yang rapi.</p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
           <div className="space-y-4">
              {[
                "Apakah data keuangan saya aman?",
                "Berapa biaya jasa konsultan?",
                "Apakah bisa membantu sengketa pajak lama?",
                "Dokumen apa saja yang perlu disiapkan?"
              ].map((q, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 flex justify-between items-center cursor-pointer hover:bg-slate-50">
                   <span className="font-semibold text-slate-800">{q}</span>
                   <ChevronDown className="w-5 h-5 text-slate-400" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-slate-50 py-16 px-4 text-center border-t border-slate-200">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Mulai Hemat Pajak Hari Ini</h2>
         <p className="text-slate-600 mb-8">Konsultasi awal gratis 15 menit untuk memahami kebutuhan Anda.</p>
         <button className="bg-teal-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-800 transition shadow-lg">
           Jadwalkan Zoom Meeting
         </button>
         <p className="mt-12 text-sm text-slate-400">© 2024 TaxPro Indonesia. All rights reserved.</p>
      </footer>
    </div>
  );
}
