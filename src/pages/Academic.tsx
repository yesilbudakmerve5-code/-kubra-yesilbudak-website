import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';


export const Academic: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const experienceList = [
    {
      institution: 'BİL Koleji, Ankara',
      role: 'Matematik Öğretmeni',
      period: '2026 – Günümüz',
      location: 'Ankara',
      status: 'Mevcut Görev',
      isCurrent: true,
      description: 'Ortaokul kademesinde matematik derslerinin yürütülmesi, 5, 6, 7 ve 8. sınıf düzeylerinde kazanım takibi ve LGS hazırlık süreçleri.',
      highlights: [
        'Ortaokul müfredatına uygun konu anlatımı ve yeni nesil soru çözümleri',
        'LGS matematik hazırlığı ve düzenli deneme sınavı analizleri',
        'Bireysel öğrenci gelişimi ve veli bilgilendirme süreçleri',
      ],
    },
    {
      institution: 'Özel Afyon İsabet Okulları',
      role: 'İlköğretim Matematik Öğretmeni',
      period: '2025 – 2026',
      location: 'Afyonkarahisar',
      status: 'Tamamlandı',
      isCurrent: false,
      description: 'İlköğretim matematik dersleri, temel matematik becerilerinin güçlendirilmesi ve okul içi akademik takip programları.',
      highlights: [
        '5, 6, 7 ve 8. sınıf matematik kazanımlarının pekiştirilmesi',
        'Öğrencilerin kavram yanılgılarını gidermeye yönelik etütler',
        'Yeni nesil soru çözüm teknikleri ve beceri temelli yaklaşımlar',
      ],
    },
    {
      institution: 'Gençlik ve Spor Bakanlığı',
      role: 'Akıl ve Zekâ Oyunları Eğitmeni',
      period: '2022 – 2024',
      location: 'Türkiye',
      status: 'Tamamlandı',
      isCurrent: false,
      description: 'Öğrencilerin stratejik düşünme, odaklanma, uzamsal algı ve mantık yürütme yetilerini geliştiren akıl ve zekâ oyunları atölyeleri.',
      highlights: [
        'Strateji, mantık ve mekanik zekâ oyunları eğitmenliği',
        'Matematiksel düşünmeyi destekleyen zihinsel antrenmanlar',
        'Çocukların analitik kavrayış ve problem çözme becerilerine katkı',
      ],
    },
    {
      institution: 'Matematik Özel Ders Öğretmeni',
      role: 'Bireysel Eğitim & Danışmanlık',
      period: '2020 – Günümüz',
      location: 'Ankara, Türkiye',
      status: 'Devam Ediyor',
      isCurrent: true,
      description: '5, 6, 7 ve 8. sınıf öğrencilerine yönelik birebir özel dersler; LGS hazırlığı, konu eksiklerini giderme ve düzenli öğrenci takibi.',
      highlights: [
        'Öğrencinin seviyesine özel kişiselleştirilmiş ders planı',
        'Beceri temelli yeni nesil soru analizleri ve sınav stratejileri',
        'Süreklilik arz eden ödev takibi ve haftalık veli bilgilendirmesi',
      ],
    },
  ];

  const educationList = [
    {
      institution: 'Afyon Kocatepe Üniversitesi',
      degree: 'Matematik Eğitimi — Yüksek Lisans',
      period: '2025 – Devam Ediyor',
      status: 'Lisansüstü / Aktif',
      description: 'İlköğretim matematik eğitimi alanında lisansüstü akademik çalışmalar, ileri öğretim metotları ve pedagojik araştırmalar.',
      location: 'Afyonkarahisar / Ankara',
      tags: ['Yüksek Lisans', 'Matematik Eğitimi', 'Akademik Araştırma'],
    },
    {
      institution: 'Recep Tayyip Erdoğan Üniversitesi',
      degree: 'İlköğretim Matematik Öğretmenliği — Lisans',
      period: '2020 – 2024',
      status: 'Lisans Mezunu',
      description: 'Eğitim Fakültesi bünyesinde ortaokul matematik öğretim programı, pedagojik formasyon, gelişim psikolojisi ve materyal tasarımı eğitimi.',
      location: 'Rize',
      tags: ['Lisans Derecesi', 'Pedagojik Formasyon', 'İlköğretim Matematik'],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Üst Bölüm: Başlık ve Kısa Tanıtım */}
      <PageHeader
          badge="Özgeçmiş & Deneyim"
          title="Akademik Kariyer"
          subtitle="Kübra Yeşilbudak Yılmaz'ın mesleki çalışma geçmişi, kurum deneyimleri ve akademik eğitim basamakları."
        />

      <SEO title="Kübra Yeşilbudak Yılmaz – Akademik Kariyer" description="Akademik kariyer, mesleki deneyimler ve yüksek lisans çalışmaları hakkında bilgi." />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-16 sm:space-y-20">
        
        {/* 2. BİRİNCİ BÖLÜM: MESLEKİ DENEYİM ZAMAN ÇİZELGESİ */}
        <section className="space-y-8">
          <div className="flex items-center space-x-3 border-b border-sageGreen/25 pb-4">
            <div className="w-9 h-9 rounded-xl bg-sageGreen/20 flex items-center justify-center text-darkGreen shrink-0">
              <Briefcase className="w-5 h-5 text-sageGreen-dark" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-darkGreen">
                Mesleki Deneyimler
              </h2>
              <p className="text-xs sm:text-sm text-darkGreen/70">
                Kurumsal okullar, bakanlık görevleri ve özel ders geçmişi
              </p>
            </div>
          </div>

          {/* Dikey Animasyonlu Zaman Çizelgesi */}
          <div className="relative border-l-2 border-sageGreen/35 ml-3 sm:ml-5 pl-6 sm:pl-8 space-y-7 sm:space-y-8">
            {experienceList.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Zaman Çizelgesi Düğüm Noktası (Node Dot) */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cream border-2 ${
                    exp.isCurrent ? 'border-gold scale-110' : 'border-sageGreen-dark'
                  } group-hover:scale-125 transition-transform duration-200`}
                />

                <div className="bg-cream-100 rounded-2xl p-5 sm:p-7 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200">
                  {/* Başlık Satırı & Küçük Tarih Etiketi */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gold-dark shrink-0" />
                      <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen">
                        {exp.institution}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sageGreen/20 text-darkGreen border border-sageGreen/30">
                          Günümüz
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/15 text-darkGreen text-[11px] font-medium font-sans">
                      <Calendar className="w-3 h-3 text-gold-dark" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Rol & Lokasyon */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-sageGreen-dark mb-3">
                    <span>{exp.role}</span>
                    <span className="text-darkGreen/30">•</span>
                    <span className="font-normal text-darkGreen/65 flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3 text-gold-dark" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Açıklama */}
                  <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed mb-3.5">
                    {exp.description}
                  </p>

                  {/* Vurgular / Maddeler */}
                  <div className="space-y-1.5 pt-3 border-t border-sageGreen/15 text-xs text-darkGreen/75">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sageGreen-dark shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. İKİNCİ BÖLÜM: AKADEMİK EĞİTİM KARTLARI */}
        <section className="space-y-8">
          <div className="flex items-center space-x-3 border-b border-sageGreen/25 pb-4">
            <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center text-darkGreen shrink-0">
              <GraduationCap className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-darkGreen">
                Akademik Eğitim
              </h2>
              <p className="text-xs sm:text-sm text-darkGreen/70">
                Lisans ve lisansüstü matematik eğitimi geçmişi
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.15 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="bg-cream-100 rounded-2xl p-6 sm:p-7 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gold/20 text-darkGreen border border-gold/30">
                      {edu.status}
                    </span>
                    <span className="text-xs text-darkGreen/70 font-sans flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen mb-1">
                    {edu.institution}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-sageGreen-dark mb-3">
                    {edu.degree}
                  </div>

                  <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-sageGreen/15 flex flex-wrap gap-1.5">
                  {edu.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-cream border border-sageGreen/20 text-darkGreen/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. ÜÇÜNCÜ BÖLÜM: SERTİFİKALAR SAYFASINA YÖNLENDİREN ZARİF BAĞLANTI */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream-100 rounded-2xl p-6 sm:p-8 border border-sageGreen/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="space-y-1 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sageGreen-dark mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Yetkinlikler & Belgeler</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-darkGreen">
              Sertifikalar ve Doğrulanmış Belgeler
            </h4>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Akıl ve zekâ oyunları eğitmenliği ve üniversite onaylı pedagojik yeterlilik belgelerini inceleyebilirsiniz.
            </p>
          </div>

          <Link
            to="/sertifikalar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-darkGreen hover:bg-darkGreen-light text-cream font-medium text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow shrink-0"
          >
            <span>Sertifikalar Sayfasını İncele</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </motion.section>

      </div>
    </div>
  );
};
