import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  HelpCircle, 
  ChevronDown, 
  Compass, 
  GraduationCap, 
  Lightbulb
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const Tutoring: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const gradeLevels = [
    {
      grade: '5. Sınıf Matematik',
      levelNumber: '05',
      badge: '5. SINIF',
      title: 'Matematiksel Temel Oluşturma',
      description: 'İlkokuldan ortaokula geçiş sürecinde dört işlem yetkinliği, sayı duyusu ve matematiğe karşı pozitif tutum inşası.',
      points: [
        'Dört işlem akıcılığı ve işlem önceliği',
        'Doğal sayılar ve temel problem kurguları',
        'Matematiğe karşı özgüven ve merak geliştirme',
      ],
    },
    {
      grade: '6. Sınıf Matematik',
      levelNumber: '06',
      badge: '6. SINIF',
      title: 'Kavramsal Derinlik ve Kavrama',
      description: 'Kesirler, ondalık gösterimler, açılar ve oran gibi temel konuların sağlam temellere oturtulması ve çok adımlı problemlere geçiş.',
      points: [
        'Kesirler ve ondalık sayılarda mantıksal kavrayış',
        'Geometrik sezgi ve alan-açı bağıntıları',
        'Çok adımlı problemleri analiz edebilme',
      ],
    },
    {
      grade: '7. Sınıf Matematik',
      levelNumber: '07',
      badge: '7. SINIF',
      title: 'Cebirsel Düşünme ve Hazırlık',
      description: 'Rasyonel sayılar, cebirsel ifadeler, denklemler ve yüzdeler; 8. sınıf ve LGS öncesi kritik kavramsal zemin inşası.',
      points: [
        'Cebirsel düşünme ve denklem kurma becerisi',
        'Rasyonel sayılar ve yüzdeler ile orantı kurma',
        'Erken dönem beceri temelli soru alıştırmaları',
      ],
    },
    {
      grade: '8. Sınıf Matematik',
      levelNumber: '08',
      badge: '8. SINIF',
      title: 'Kazanım Odaklı Çalışma & LGS',
      description: 'Müfredat kazanımlarının pekiştirilmesi, yeni nesil soru kalıplarının çözümlenmesi ve sınava yönelik hedefli çalışma programı.',
      points: [
        'Çarpanlar, kareköklü ifadeler ve veri analizi',
        'Doğrusal denklemler, eşitsizlikler ve geometri',
        'Beceri temelli yeni nesil soru çözüm stratejileri',
      ],
    },
  ];

  const lgsFeatures = [
    {
      title: 'Yeni Nesil Matematik Soruları',
      desc: 'MEB ve LGS formatındaki metin, tablo ve görsel kurgulu soruları parçalama ve matematiksel dile dönüştürme.',
      icon: Target,
    },
    {
      title: 'Problem Çözme Becerileri',
      desc: 'Tek boyutlu ezber yerine çok adımlı düşünebilme, çıkarım yapma ve modelleme kabiliyetini geliştirme.',
      icon: BookOpen,
    },
    {
      title: 'Matematiksel Akıl Yürütme',
      desc: 'İpuçlarını mantıksal bir sırayla birleştirerek bağıntı kurma ve tümdengelim yollarıyla doğru çözüme ulaşma.',
      icon: Lightbulb,
    },
    {
      title: 'Soru Çözüm Stratejileri',
      desc: 'Zaman yönetimi, soru kökünü doğru analiz etme ve sınav kaygısını azaltıcı yöntemler geliştirme.',
      icon: Compass,
    },
    {
      title: 'Öğrencinin İhtiyaçlarına Uygun Plan',
      desc: 'Her öğrencinin eksik olduğu kazanımlara odaklanan kişiselleştirilmiş ders ve soru çözüm takvimi.',
      icon: TrendingUp,
    },
  ];

  const approachPillars = [
    {
      title: 'Bireyselleştirilmiş Öğrenme',
      desc: 'Her öğrencinin kavrayış hızı ve öğrenme biçimi farklıdır; ders akışı öğrencinin hazırbulunuşluk düzeyine göre şekillenir.',
      icon: Compass,
    },
    {
      title: 'Kavramsal Anlama',
      desc: 'Ezberci kurallar yerine kuralların arkasındaki mantık ve geometrik modelleme üzerinde durulur.',
      icon: BookOpen,
    },
    {
      title: 'Problem Çözme',
      desc: 'Matematiksel düşünme yetisini geliştiren, günlük hayat durumlarıyla ilişkili problemleri analiz etme odağı.',
      icon: Target,
    },
    {
      title: 'Düzenli Gelişim Takibi',
      desc: 'Konu eksiklerinin periyodik tespiti, planlı ödevlendirme ve veliye düzenli gelişim bilgilendirmesi.',
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      q: 'Hangi sınıf düzeylerine yönelik ders veriliyor?',
      a: '5, 6, 7 ve 8. sınıf düzeyindeki öğrencilere yönelik ilköğretim matematik eğitimi ve 8. sınıf LGS matematik hazırlığı çalışmaları yürütülmektedir.',
    },
    {
      q: 'LGS hazırlık çalışmaları yapılıyor mu?',
      a: 'Evet; 8. sınıf öğrencileri için MEB müfredatına tam uyumlu beceri temelli (yeni nesil) soru çözümleri, konu kavrama testleri ve sınav stratejilerini içeren kapsamlı LGS hazırlığı yapılmaktadır.',
    },
    {
      q: 'Ders programı nasıl belirleniyor?',
      a: 'Öğrencinin mevcut matematiksel hazırbulunuşluğu, okul müfredatındaki ilerlemesi ve bireysel hedefleri değerlendirilerek kişiye özel bir çalışma takvimi oluşturulur.',
    },
    {
      q: 'Ders ücretleri ve ders biçimi hakkında nasıl bilgi alabilirim?',
      a: 'Ders süreci, biçimi ve detaylı bilgilendirme için İletişim sayfası üzerinden mesaj gönderebilir veya doğrudan iletişime geçebilirsiniz.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="Kübra Yeşilbudak Yılmaz – Özel Ders" 
        description="5, 6, 7 ve 8. sınıf öğrencilerine yönelik ilköğretim matematik eğitimi ve LGS hazırlık çalışmaları." 
      />
      {/* 1. GİRİŞ (HERO / INTRO) */}
      <section className="relative overflow-hidden border-b border-sageGreen/25 bg-gradient-to-b from-cream-100 via-cream-50 to-cream py-14 sm:py-18 lg:py-20">
        {/* Subtle Geometric SVG Pattern Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" stroke="#263B35">
            <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 4" />
            <polygon points="100,20 180,160 20,160" strokeWidth="1" />
            <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sageGreen/20 border border-sageGreen/35 text-darkGreen text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>İlköğretim Matematik & LGS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-darkGreen leading-tight tracking-tight">
            Matematiği Birlikte Keşfedelim
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-darkGreen/80 font-sans max-w-2xl mx-auto leading-relaxed">
            5, 6, 7 ve 8. sınıf öğrencilerine yönelik matematik eğitimi ve LGS hazırlık çalışmaları.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              to="/iletisim"
              className="px-6 py-3 rounded-lg bg-darkGreen hover:bg-darkGreen-light text-cream font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
            >
              <span>Ders Hakkında Bilgi Al</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>

            <Link
              to="/hakkimda"
              className="px-6 py-3 rounded-lg bg-cream-100 hover:bg-sageGreen/15 text-darkGreen border border-darkGreen/25 hover:border-darkGreen/50 font-medium text-xs sm:text-sm transition-all duration-200"
            >
              <span>Eğitim Yaklaşımım</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* 2. SINIF DÜZEYLERİ */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sageGreen/15 text-darkGreen text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-sageGreen-dark" />
              <span>Kademeli Gelişim</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-darkGreen">
              Sınıf Düzeyleri ve Kazanımlar
            </h2>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Her kademenin gereksinim duyduğu matematiksel olgunluk ve kazanım hedefleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradeLevels.map((lvl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-cream-100 rounded-2xl p-6 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-sageGreen/20 text-darkGreen font-sans">
                      {lvl.badge}
                    </span>
                    <span className="font-serif text-2xl font-bold text-gold">
                      {lvl.levelNumber}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen mb-2">
                    {lvl.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed mb-4">
                    {lvl.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3.5 border-t border-sageGreen/15 text-xs text-darkGreen/75">
                  {lvl.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sageGreen-dark shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. LGS HAZIRLIK (Görsel Olarak Ayrılan Zarif Alan) */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-darkGreen text-cream p-8 sm:p-12 border border-gold/40 shadow-xl"
        >
          {/* Subtle Geometric Background Watermark */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 opacity-[0.07] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="#F8F6F1">
              <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="50,5 95,90 5,90" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/35 text-gold-light text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-gold-light" />
                <span>Hedefli Sınav Maratonu</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-cream">
                LGS Matematik Hazırlığı
              </h2>

              <p className="text-xs sm:text-sm text-cream-200/85 font-sans leading-relaxed max-w-2xl">
                8. sınıf öğrencilerine yönelik; ezberci soru çözümü yerine matematiksel düşünmeyi, akıl yürütmeyi ve yeni nesil soru kalıplarını analiz etmeyi amaçlayan kapsamlı LGS hazırlık yaklaşımı.
              </p>
            </div>

            {/* 5 LGS Maddesi / Kartı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lgsFeatures.map((feat, fIdx) => {
                const Icon = feat.icon;
                return (
                  <div 
                    key={fIdx} 
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold-light mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-cream mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-cream-200/80 font-sans leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15">
              <span className="text-xs text-gold-light/90 italic font-serif">
                "Yeni nesil matematik soruları korkulacak bir engel değil; doğru stratejiyle çözülen zihinsel bulmacalardır."
              </span>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light hover:text-cream transition-colors"
              >
                <span>LGS Süreci Hakkında Bilgi Al</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 4. EĞİTİM YAKLAŞIMI (4 Minimal Kart) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sageGreen/15 text-darkGreen text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-sageGreen-dark" />
              <span>Pedagojik Temeller</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-darkGreen">
              Eğitim Yaklaşımı
            </h2>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Derslerin işleyişinde temel alınan ilkeler ve metodolojik çerçeve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPillars.map((ap, aIdx) => {
              const Icon = ap.icon;
              return (
                <motion.div
                  key={aIdx}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: aIdx * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="bg-cream-100 rounded-2xl p-6 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0 text-darkGreen">
                    <Icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen">
                      {ap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed">
                      {ap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. SIK SORULAN SORULAR (Accordion) */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sageGreen/15 text-darkGreen text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-sageGreen-dark" />
              <span>Merak Edilenler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-darkGreen">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Özel ders süreci ve genel işleyiş hakkında sıkça yöneltilen sorular.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-sageGreen/30 bg-cream-100 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-serif font-semibold text-darkGreen hover:text-gold-dark transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-darkGreen/60 shrink-0 ml-3 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gold-dark' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed border-t border-sageGreen/15">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. İLETİŞİME YÖNLENDİRME (CALLOUT) */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-sageGreen/30 text-center space-y-5"
        >
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-darkGreen">
              Matematik yolculuğuna birlikte başlayalım.
            </h3>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans leading-relaxed">
              Özel ders talepleri, seviye değerlendirmesi ve detaylı bilgi için iletişim sayfası üzerinden mesaj gönderebilirsiniz.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-darkGreen hover:bg-darkGreen-light text-cream font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>İletişime Geç</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
