# Kübra Yeşilbudak Yılmaz - İlköğretim Matematik Öğretmeni Web Sitesi & Portföyü

Modern, zarif, akademik ve profesyonel ilköğretim matematik öğretmeni portföyü, 5-8. sınıf & LGS hazırlık özel ders web sitesi.

## 🎨 Tasarım & Renk Paleti
- **Krem:** `#F8F6F1` (Arka plan ve yumuşak yüzeyler)
- **Koyu Yeşil:** `#263B35` (Başlıklar, butonlar, kurumsal ton)
- **Adaçayı Yeşili:** `#8A9B83` (Vurgular, etiketler, ikonlar)
- **Zarif Altın:** `#B79B70` (Çerçeveler, detaylar, vurgu öğeleri)
- **Tipografi:** Playfair Display (Serif başlıklar) & Inter (Gövde metinleri)

## 🛠️ Teknoloji Yığını
- **React 18** & **TypeScript**
- **Vite** (Hızlı derleme ve geliştirme ortamı)
- **Tailwind CSS** (Özel renk ve tipografi konfigürasyonu)
- **Framer Motion** (Yumuşak scroll animasyonları, hareketli geometrik matematik şekilleri)
- **Lucide React** (Minimalist ikon seti)
- **React Router (HashRouter)** (GitHub Pages ile %100 uyumlu statik yönlendirme)

## 📂 Klasör Yapısı
```
src/
├── assets/             # Statik medya ve görseller
├── components/
│   ├── common/         # MathShapes, PhotoPlaceholder, PageHeader, ScrollToTop
│   └── layout/         # Navbar, Footer
├── constants/          # Menü ve öğretmen bilgileri
├── pages/              # Sayfalar
│   ├── Home.tsx        # Ana Sayfa
│   ├── About.tsx       # Hakkımda
│   ├── Academic.tsx    # Akademik Kariyer
│   ├── Certificates.tsx# Sertifikalar
│   ├── Projects.tsx    # Projeler ve Gönüllülük
│   ├── Tutoring.tsx    # Özel Ders
│   └── Contact.tsx     # İletişim
├── types/              # TypeScript tipleri
├── App.tsx             # Ana router & düzen
├── index.css           # Tailwind ve özel scrollbar stilleri
└── main.tsx            # React başlangıç noktası
```

## 🚀 Kurulum ve Çalıştırma
```bash
npm install
npm run dev
```

## 🌐 GitHub Pages Canlı Yayınlama
```bash
npm run build
```
Proje statik mimaride yapılandırılmıştır (`base: './'` ve `HashRouter`).
