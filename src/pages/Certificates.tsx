import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Brain, 
  Leaf, 
  Users, 
  HelpCircle, 
  Calendar, 
  MapPin, 
  FileCheck2, 
  Info, 
  X, 
  CheckCircle2, 
  Compass,
  FileText
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/common/PageHeader';

type CategoryType = 'all' | 'trainings' | 'conferences' | 'certificates';

interface ProfessionalRecord {
  id: string;
  title: string;
  institution: string;
  year: string;
  location?: string;
  category: 'trainings' | 'conferences' | 'certificates';
  categoryLabel: string;
  description: string;
  icon: React.ElementType;
  documentStatus: 'verified_pending_upload' | 'participation_record';
  skills: string[];
}

export const Certificates: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedRecord, setSelectedRecord] = useState<ProfessionalRecord | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedRecord(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const records: ProfessionalRecord[] = [
    // MESLEKİ EĞİTİMLER
    {
      id: 'tazof-2022',
      title: 'Akıl ve Zekâ Oyunları Eğitmen Eğitimi',
      institution: 'TAZOF (Tüm Akıl ve Zekâ Oyunları Federasyonu)',
      year: '2022',
      location: 'Ankara',
      category: 'trainings',
      categoryLabel: 'Mesleki Eğitim',
      description: 'Zekâ ve akıl oyunları öğretim metodolojisi, strateji ve mekanik mantık oyunlarının pedagojik kullanımı, turnuva kuralları ve atölye yönetimi.',
      icon: Brain,
      documentStatus: 'verified_pending_upload',
      skills: ['Strateji Oyunları', 'Mekansal Zekâ', 'Mantık Yürütme', 'Atölye Yönetimi'],
    },
    {
      id: 'gsb-ekoloji-2022',
      title: 'Ekolojik Okuryazarlık Eğitmen Eğitimi',
      institution: 'Gençlik ve Spor Bakanlığı',
      year: '2022',
      location: 'Elazığ',
      category: 'trainings',
      categoryLabel: 'Mesleki Eğitim',
      description: 'Sürdürülebilirlik, çevre etiği, doğa temelli pedagoji ve gençlik eğitimlerinde ekolojik okuryazarlık farkındalığı oluşturma eğitici eğitimi.',
      icon: Leaf,
      documentStatus: 'verified_pending_upload',
      skills: ['Ekolojik Okuryazarlık', 'Sürdürülebilirlik', 'Eğitici Eğitimi'],
    },

    // KONFERANSLAR VE SEMİNERLER
    {
      id: 'ogretmenlerle-bulusuyoruz-2021',
      title: 'Mesleki Deneyim: Öğretmenlerimizle Buluşuyoruz',
      institution: 'Mesleki Gelişim Semineri',
      year: '2021',
      category: 'conferences',
      categoryLabel: 'Konferans & Seminer',
      description: 'Eğitim alanında deneyimli öğretmenlerle tecrübe paylaşımı, sınıf içi kriz yönetimi, etkili öğretmen-öğrenci iletişimi ve mesleki rehberlik semineri.',
      icon: Users,
      documentStatus: 'participation_record',
      skills: ['Mesleki Deneyim Paylaşımı', 'Sınıf Yönetimi', 'Öğretmen İletişimi'],
    },
    {
      id: 'fark-etme-2022',
      title: 'Öğretmen Eğitiminde Fark Etme',
      institution: 'Eğitimde Pedagojik Farkındalık Semineri',
      year: '2022',
      category: 'conferences',
      categoryLabel: 'Konferans & Seminer',
      description: 'Öğrencilerin bireysel öğrenme stillerini, kavram yanılgılarını ve duygusal hazırbulunuşluklarını fark etmeye odaklanan pedagojik seminer.',
      icon: Compass,
      documentStatus: 'participation_record',
      skills: ['Öğrenci Farkındalığı', 'Öğrenme Stilleri', 'Pedagojik Gözlem'],
    },
    {
      id: 'soru-sorma-2023',
      title: 'Matematik Öğretiminde Soru Sorma Becerisi',
      institution: 'Matematik Eğitimi Çalıştayı',
      year: '2023',
      category: 'conferences',
      categoryLabel: 'Konferans & Seminer',
      description: 'Matematik derslerinde üst düzey bilişsel düşünmeyi teşvik eden soru türleri, derinleştirici sorular sorma pedagojisi ve kavramsal sorgulama.',
      icon: HelpCircle,
      documentStatus: 'participation_record',
      skills: ['Soru Sorma Teknikleri', 'Üst Düzey Düşünme', 'Matematiksel Sorgulama'],
    },
  ];

  // Filtering logic
  const filteredRecords = records.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'trainings') return item.category === 'trainings';
    if (activeCategory === 'conferences') return item.category === 'conferences';
    if (activeCategory === 'certificates') {
      // In certificates tab, show records that carry formal certificate/accreditation credentials
      return item.documentStatus === 'verified_pending_upload';
    }
    return true;
  });

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'trainings', label: 'Mesleki Eğitimler' },
    { id: 'conferences', label: 'Konferanslar ve Seminerler' },
    { id: 'certificates', label: 'Sertifika ve Katılım Belgeleri' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Üst Bölüm: Başlık ve Kısa Tanıtım */}
      <PageHeader
        badge="Sürekli Gelişim & Belgeler"
        title="Mesleki Gelişim"
        subtitle="Kübra Yeşilbudak Yılmaz'ın katıldığı doğrulanmış mesleki eğitimler, seminerler ve eğitmenlik yeterlilikleri."
      />
      <SEO title="Kübra Yeşilbudak Yılmaz – Sertifikalar" description="Doğrulanmış mesleki eğitimler ve sertifikalar hakkında bilgi." />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-10 sm:space-y-12">
        
        {/* Şeffaflık & Belge Durumu Bilgilendirmesi */}
        <div className="bg-cream-100 rounded-2xl p-5 border border-sageGreen/30 flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-darkGreen/80 leading-relaxed font-sans">
            <strong>Doğrulanmış Kayıtlar:</strong> Bu sayfada yer alan eğitim ve seminerler gerçek mesleki gelişim geçmişine dayanmaktadır. Sahte sertifika görselleri veya uydurma belge numaraları kullanılmamakta olup, resmi belgelerin dijital kopyaları kurumsal doğrulama tamamlandıkça sisteme eklenecektir.
          </div>
        </div>

        {/* 2. Filtrelenebilir Kategori Menüsü */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-sageGreen/25 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-darkGreen text-cream shadow-xs font-semibold'
                  : 'bg-cream-100 text-darkGreen/75 hover:text-darkGreen hover:bg-sageGreen/15 border border-sageGreen/25'
              }`}
            >
              {cat.label}
              {cat.id === 'all' && ` (${records.length})`}
              {cat.id === 'trainings' && ' (2)'}
              {cat.id === 'conferences' && ' (3)'}
              {cat.id === 'certificates' && ' (2)'}
            </button>
          ))}
        </div>

        {/* 3. Sertifika ve Katılım Belgeleri Sekmesi Özel Bilgilendirme Notu */}
        {activeCategory === 'certificates' && (
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-gold/10 border border-gold/30 text-xs sm:text-sm text-darkGreen/85 flex items-start gap-3"
          >
            <FileCheck2 className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Resmi Belge Arşivi</span>
              Aşağıdaki kartlar, tamamlanan eğitimlere ait doğrulanmış resmi belgeleri temsil etmektedir. Gerçek sertifika görselleri temin edildiğinde doğrudan ilgili kartın detay alanından tam çözünürlüklü olarak görüntülenebilecektir.
            </div>
          </motion.div>
        )}

        {/* 4. Filtrelenmiş Kartlar Grid Yapısı */}
        <motion.div 
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredRecords.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="bg-cream-100 rounded-2xl p-6 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex flex-col break-words justify-between"
                >
                  <div>
                    {/* Üst İkon & Kategori Rozeti */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-darkGreen">
                        <Icon className="w-5 h-5 text-gold-dark" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sageGreen/20 text-darkGreen font-sans">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Başlık & Kurum */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen mb-1.5 leading-snug">
                      {item.title}
                    </h3>

                    <div className="text-xs font-semibold text-sageGreen-dark mb-3">
                      {item.institution}
                    </div>

                    {/* Tarih & Lokasyon */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-darkGreen/65 mb-4">
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                        {item.year}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    {/* Açıklama */}
                    <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Etiketler */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-cream border border-sageGreen/20 text-darkGreen/75"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Alt İşlem Çubuğu / Detay Görüntüleme */}
                  <div className="pt-3.5 border-t border-sageGreen/15 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-darkGreen/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sageGreen-dark shrink-0" />
                      {item.documentStatus === 'verified_pending_upload' ? 'Sertifikalı Eğitim' : 'Katılım Kaydı'}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedRecord(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-darkGreen hover:text-gold-dark transition-colors cursor-pointer"
                    >
                      <span>Detay</span>
                      <FileText className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 5. Yeniden Kullanılabilir Detay Görüntüleme Modalı */}
        <AnimatePresence>
          {selectedRecord && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRecord(null)}
                className="absolute inset-0 bg-darkGreen/60 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 15 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 w-full max-w-lg bg-cream rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b border-sageGreen/20 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sageGreen-dark block mb-1">
                      {selectedRecord.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-darkGreen">
                      {selectedRecord.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-darkGreen/80 mt-0.5">
                      {selectedRecord.institution}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedRecord(null)}
                    aria-label="Kapat"
                    className="p-1.5 rounded-lg text-darkGreen/70 hover:text-darkGreen hover:bg-sageGreen/15 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Bilgiler Tablosu */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-cream-100 p-4 rounded-xl border border-sageGreen/25">
                  <div>
                    <span className="text-darkGreen/60 block">Eğitim Yılı</span>
                    <span className="font-semibold text-darkGreen">{selectedRecord.year}</span>
                  </div>
                  {selectedRecord.location && (
                    <div>
                      <span className="text-darkGreen/60 block">Şehir / Lokasyon</span>
                      <span className="font-semibold text-darkGreen">{selectedRecord.location}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-darkGreen/60 block">Kayıt Türü</span>
                    <span className="font-semibold text-darkGreen">
                      {selectedRecord.documentStatus === 'verified_pending_upload' ? 'Eğitmenlik Sertifikası' : 'Seminer Katılımı'}
                    </span>
                  </div>
                  <div>
                    <span className="text-darkGreen/60 block">Durum</span>
                    <span className="font-semibold text-sageGreen-dark">Doğrulanmış</span>
                  </div>
                </div>

                {/* Detaylı Açıklama */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-darkGreen">Eğitim İçeriği & Detaylar</h4>
                  <p className="text-xs sm:text-sm text-darkGreen/80 leading-relaxed font-sans">
                    {selectedRecord.description}
                  </p>
                </div>

                {/* Kazanımlar */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-darkGreen">Kazanılan Beceriler</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRecord.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream-100 border border-sageGreen/30 text-darkGreen font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Belge Görüntüleme Durumu / Yeniden Kullanılabilir Alan */}
                <div className="p-4 rounded-xl bg-sageGreen/10 border border-sageGreen/25 text-xs text-darkGreen/85 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-darkGreen">
                    <FileCheck2 className="w-4 h-4 text-gold-dark" />
                    <span>Resmi Belge Durumu</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-darkGreen/75 leading-relaxed">
                    Bu eğitime ait katılım ve eğitmenlik kaydı resmidir. Gelecekte gerçek sertifika görseli yüklendiğinde bu alanda yüksek çözünürlüklü dijital belge görüntüleyicisi yer alacaktır.
                  </p>
                </div>

                {/* Kapat Butonu */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedRecord(null)}
                    className="px-5 py-2.5 rounded-xl bg-darkGreen hover:bg-darkGreen-light text-cream text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
