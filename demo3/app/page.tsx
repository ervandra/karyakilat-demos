import Image from "next/image";
import { FileText, Check, Clock, ChevronDown, Phone, Shield, Calculator, AlertTriangle, PieChart, TrendingDown } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-teal-700 text-white p-2 rounded-lg shadow-md group-hover:bg-teal-800 transition">
               <FileText className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition">TaxPro<span className="text-teal-600">Indonesia</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-teal-700 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 after:transition-all hover:after:w-full">Layanan</a>
            <a href="#calculator" className="hover:text-teal-700 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 after:transition-all hover:after:w-full">Kalkulator</a>
            <a href="#audit" className="hover:text-teal-700 transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 after:transition-all hover:after:w-full">Audit Defense</a>
          </div>
          <a href="https://wa.me/" className="bg-teal-700 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-teal-800 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200">
            Konsultasi Gratis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20 -z-10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
             <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 border border-teal-100">
               <Shield className="w-4 h-4" /> Mitra Resmi KPP
             </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Bayar Pajak <span className="text-teal-600 underline decoration-wavy decoration-teal-300">Tepat</span>, <br/>
              Bisnis Jadi <span className="text-teal-600 underline decoration-wavy decoration-teal-300">Hebat</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Kami membantu UMKM & Profesional menghemat pajak secara legal, menghindari denda, dan menghadapi pemeriksaan tanpa rasa takut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition shadow-lg hover:shadow-teal-700/30">
                 <Phone className="w-5 h-5" /> Hubungi Konsultan
               </button>
               <button className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-teal-600 hover:text-teal-700 transition">
                 Cek Potensi Hemat
               </button>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-8">
               <div className="text-center">
                 <div className="text-2xl font-bold text-slate-900">200+</div>
                 <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Klien Aktif</div>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-slate-900">Rp 15M+</div>
                 <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Pajak Dihemat</div>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-slate-900">100%</div>
                 <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Tingkat Kepatuhan</div>
               </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{animationDelay: "0.2s"}}>
             <div className="aspect-square bg-slate-100 rounded-[2rem] shadow-inner border border-slate-200 relative overflow-hidden group">
                {/* Illustration Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-50 to-white">
                   <PieChart className="w-32 h-32 text-teal-100 group-hover:scale-110 transition duration-500" />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-48 animate-bounce-slow">
                   <div className="text-xs text-slate-500 mb-1 font-bold uppercase">Status SPT</div>
                   <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-2 py-1 rounded w-fit">
                      <CheckCircleIcon className="w-4 h-4" /> Lapor Tepat Waktu
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-56 animate-bounce-slow" style={{animationDelay: "1s"}}>
                   <div className="flex items-center gap-3 mb-2">
                      <div className="bg-red-100 p-2 rounded-full text-red-600"><AlertTriangle className="w-4 h-4"/></div>
                      <div>
                         <div className="text-xs font-bold text-slate-900">Potensi Denda</div>
                         <div className="text-[10px] text-slate-500">Jika telat lapor</div>
                      </div>
                   </div>
                   <div className="text-lg font-bold text-slate-900 line-through decoration-red-500 decoration-2">Rp 10.000.000</div>
                   <div className="text-xs text-green-600 font-bold mt-1">Dicegah oleh TaxPro</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Audit Risk Matrix */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Seberapa Aman Bisnis Anda?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kenali risiko pemeriksaan pajak berdasarkan kondisi pembukuan Anda saat ini. Kami menggunakan <strong>Audit Risk Matrix™</strong> untuk menilai kesehatan pajak klien.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-bold text-slate-900">Zona Hijau</h3>
                 <Shield className="w-6 h-6 text-green-500" />
              </div>
              <ul className="space-y-3 mb-6">
                <ListItem text="Lapor SPT Tepat Waktu" status="safe" />
                <ListItem text="Omzet vs PPN Sinkron" status="safe" />
                <ListItem text="Biaya Memiliki Bukti Potong" status="safe" />
              </ul>
              <div className="bg-green-50 text-green-800 text-xs font-bold px-3 py-2 rounded text-center">
                Risiko Audit: RENDAH (< 5%)
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition group transform md:-translate-y-4">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-bold text-slate-900">Zona Kuning</h3>
                 <AlertTriangle className="w-6 h-6 text-yellow-500" />
              </div>
              <ul className="space-y-3 mb-6">
                <ListItem text="Telat Lapor Beberapa Bulan" status="warning" />
                <ListItem text="Profit Margin Fluktuatif" status="warning" />
                <ListItem text="Aset Meningkat Drastis" status="warning" />
              </ul>
              <div className="bg-yellow-50 text-yellow-800 text-xs font-bold px-3 py-2 rounded text-center">
                Risiko Audit: SEDANG (20-40%)
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-500 hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-bold text-slate-900">Zona Merah</h3>
                 <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <ul className="space-y-3 mb-6">
                <ListItem text="Tidak Lapor > 2 Tahun" status="danger" />
                <ListItem text="Transaksi Rekening > Laporan" status="danger" />
                <ListItem text="Lawan Transaksi Fiktif" status="danger" />
              </ul>
              <div className="bg-red-50 text-red-800 text-xs font-bold px-3 py-2 rounded text-center">
                Risiko Audit: TINGGI (> 75%)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Savings Calculator (Static UI) */}
      <section id="calculator" className="py-24 px-6 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
           <div>
              <h2 className="text-4xl font-bold mb-6">Simulasi Penghematan Pajak</h2>
              <p className="text-teal-100 mb-8 text-lg leading-relaxed">
                Banyak pengusaha UMKM membayar pajak lebih besar dari seharusnya karena salah memilih metode perhitungan (PP 23 vs Norma vs Pembukuan). Lihat berapa yang bisa Anda hemat.
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center font-bold border border-teal-600">1</div>
                    <div className="text-sm">Pilih Jenis Usaha</div>
                 </div>
                 <div className="w-12 h-px bg-teal-700 my-auto"></div>
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center font-bold border border-teal-600">2</div>
                    <div className="text-sm">Input Omzet</div>
                 </div>
              </div>
           </div>
           
           <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="mb-6 border-b border-slate-100 pb-4 flex justify-between items-center">
                 <h3 className="font-bold text-lg flex items-center gap-2"><Calculator className="w-5 h-5 text-teal-600"/> Kalkulator PPh Badan</h3>
                 <span className="bg-slate-100 text-xs px-2 py-1 rounded font-mono">Ver 2.0</span>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">Estimasi Omzet Tahunan</label>
                    <div className="relative">
                       <span className="absolute left-4 top-3.5 text-slate-400 font-bold">Rp</span>
                       <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="4.800.000.000" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border-2 border-slate-200 opacity-50">
                       <div className="text-xs text-slate-500 mb-1 font-bold uppercase">Tanpa Perencanaan</div>
                       <div className="text-xl font-bold text-slate-900">Rp 500jt</div>
                       <div className="text-xs text-red-500 mt-1 font-medium">Beban Pajak Penuh</div>
                    </div>
                    <div className="p-4 rounded-xl border-2 border-teal-500 bg-teal-50 relative overflow-hidden">
                       <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] px-2 py-0.5 font-bold rounded-bl">RECOMMENDED</div>
                       <div className="text-xs text-teal-700 mb-1 font-bold uppercase">Dengan TaxPro</div>
                       <div className="text-xl font-bold text-teal-700">Rp 250jt</div>
                       <div className="text-xs text-green-600 mt-1 font-bold flex items-center gap-1"><TrendingDown className="w-3 h-3" /> Hemat 50%</div>
                    </div>
                 </div>
                 
                 <button className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg hover:shadow-teal-500/20">
                    Dapatkan Analisa Lengkap via WhatsApp
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 3-Step Audit Defense */}
      <section id="audit" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
              <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-2 block">Layanan Unggulan</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our 3-Step Audit Defense™</h2>
              <p className="text-slate-600">Jangan hadapi petugas pajak sendirian. Kami menjadi perisai Anda.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
              
              <div className="bg-white p-8 pt-0 relative">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-slate-50 shadow-sm">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-2xl">1</div>
                 </div>
                 <h3 className="text-xl font-bold text-center mb-4">Pre-Audit Review</h3>
                 <p className="text-slate-600 text-center text-sm leading-relaxed">
                   Kami menyisir laporan keuangan Anda <strong>sebelum</strong> diserahkan. Mencari celah yang mungkin memicu pertanyaan pemeriksa.
                 </p>
              </div>

              <div className="bg-white p-8 pt-0 relative">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-slate-50 shadow-sm">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-2xl">2</div>
                 </div>
                 <h3 className="text-xl font-bold text-center mb-4">Pendampingan Penuh</h3>
                 <p className="text-slate-600 text-center text-sm leading-relaxed">
                   Saat surat panggilan datang, kami yang maju menghadap. Menjawab pertanyaan teknis dengan bahasa hukum perpajakan yang tepat.
                 </p>
              </div>

              <div className="bg-white p-8 pt-0 relative">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-slate-50 shadow-sm">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-2xl">3</div>
                 </div>
                 <h3 className="text-xl font-bold text-center mb-4">Negosiasi & Sanggahan</h3>
                 <p className="text-slate-600 text-center text-sm leading-relaxed">
                   Jika ada koreksi yang tidak wajar, kami menyusun surat tanggapan dan bernegosiasi untuk meminimalkan denda akhir.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
           <div className="p-10 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Sudah Siap Lapor SPT?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Unduh checklist gratis kami untuk memastikan dokumen Anda lengkap sebelum deadline Maret/April.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-5 h-5 bg-teal-100 rounded text-teal-600 flex items-center justify-center text-xs">✓</div> Daftar Bukti Potong</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-5 h-5 bg-teal-100 rounded text-teal-600 flex items-center justify-center text-xs">✓</div> Rekapitulasi Peredaran Bruto</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-5 h-5 bg-teal-100 rounded text-teal-600 flex items-center justify-center text-xs">✓</div> Daftar Harta & Utang Akhir Tahun</li>
              </ul>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">Download Checklist PDF</button>
           </div>
           <div className="bg-teal-600 md:w-1/2 p-10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
              <FileText className="w-40 h-40 text-white/20 absolute -right-10 -bottom-10 rotate-12" />
              <div className="text-center relative z-10 text-white">
                 <div className="text-6xl font-bold mb-2">30</div>
                 <div className="text-xl font-medium opacity-90">Hari Menuju Deadline</div>
                 <div className="mt-8 text-sm opacity-75 border border-white/30 rounded-lg p-4">
                    "Jangan menunda. Server DJP sering down di minggu terakhir."
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-200">
         <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                 <FileText className="w-6 h-6 text-teal-700" />
                 <span className="text-xl font-bold text-slate-900">TaxPro<span className="text-teal-700">Indonesia</span></span>
               </div>
               <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
                 Konsultan pajak terdaftar dengan izin praktik resmi. Membantu bisnis tumbuh dengan kepatuhan pajak yang efisien.
               </p>
               <div className="flex gap-4">
                  {/* Social Icons Placeholder */}
                  <div className="w-10 h-10 bg-slate-100 rounded-full hover:bg-teal-100 hover:text-teal-700 transition cursor-pointer"></div>
                  <div className="w-10 h-10 bg-slate-100 rounded-full hover:bg-teal-100 hover:text-teal-700 transition cursor-pointer"></div>
                  <div className="w-10 h-10 bg-slate-100 rounded-full hover:bg-teal-100 hover:text-teal-700 transition cursor-pointer"></div>
               </div>
            </div>
            <div>
               <h4 className="font-bold text-slate-900 mb-6">Layanan</h4>
               <ul className="space-y-4 text-slate-600 text-sm">
                  <li className="hover:text-teal-700 cursor-pointer">Konsultasi Pajak Tahunan</li>
                  <li className="hover:text-teal-700 cursor-pointer">Pendampingan Pemeriksaan</li>
                  <li className="hover:text-teal-700 cursor-pointer">Restitusi Pajak</li>
                  <li className="hover:text-teal-700 cursor-pointer">Tax Planning</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-slate-900 mb-6">Kantor</h4>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Grand Slipi Tower Lt. 9<br/>
                  Jl. Letjen S. Parman Kav. 22-24<br/>
                  Jakarta Barat 11480
               </p>
               <div className="text-teal-700 font-bold text-sm">021 - 555 1234</div>
            </div>
         </div>
         <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
            &copy; 2024 TaxPro Indonesia. All rights reserved.
         </div>
      </footer>
    </div>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
   return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
}

function ListItem({ text, status }: { text: string, status: "safe" | "warning" | "danger" }) {
   let iconColor = "";
   if (status === "safe") iconColor = "text-green-500";
   if (status === "warning") iconColor = "text-yellow-500";
   if (status === "danger") iconColor = "text-red-500";

   return (
      <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
         <div className={`w-1.5 h-1.5 rounded-full ${status === "safe" ? "bg-green-500" : status === "warning" ? "bg-yellow-500" : "bg-red-500"}`}></div>
         {text}
      </li>
   )
}
