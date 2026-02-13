import Image from "next/image";
import { Shield, Users, Award, Phone, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-900">Budi Santoso</span>
          <a href="https://wa.me/" className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative border-4 border-white shadow-lg">
             <div className="flex items-center justify-center h-full text-slate-400">Foto</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
            Melindungi Warisan Keluarga Anda
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Perencanaan keuangan yang matang untuk masa depan orang-orang tercinta. Percayakan perlindungan Anda pada ahli yang berpengalaman.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              Konsultasi Gratis
            </button>
            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Pelajari Layanan
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
            <div className="text-blue-100">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-500 mb-2">MDRT</div>
            <div className="text-blue-100">Member Seumur Hidup</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-blue-100">Keluarga Terlindungi</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-blue-900 mb-12">Solusi Perlindungan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition bg-white">
              <Shield className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Legacy Planning</h3>
              <p className="text-slate-600">Pastikan aset Anda terdistribusi dengan lancar kepada ahli waris tanpa sengketa.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition bg-white">
              <Award className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Critical Illness</h3>
              <p className="text-slate-600">Dana tunai cepat saat terdiagnosa penyakit kritis agar fokus pada pemulihan.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition bg-white">
              <Users className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Education Fund</h3>
              <p className="text-slate-600">Persiapkan dana pendidikan terbaik untuk masa depan buah hati Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {[1,2,3,4,5].map(i => <span key={i} className="text-amber-500 text-2xl">★</span>)}
          </div>
          <blockquote className="text-2xl font-serif text-slate-800 italic mb-6">
            "Pak Budi sangat membantu keluarga kami saat klaim cair. Tidak ada yang dipersulit, semua transparan dan cepat. Sangat merekomendasikan beliau sebagai agen terpercaya."
          </blockquote>
          <div className="font-bold text-blue-900">– Ibu Wijaya, Surabaya</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Sudah Cukup Terlindungi?</h2>
            <p className="text-blue-100 mb-8 text-lg">Jangan tunggu risiko datang. Mari diskusikan kebutuhan proteksi Anda hari ini.</p>
            <a href="https://wa.me/" className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2024 Budi Santoso Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
}
