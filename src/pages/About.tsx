import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Compass, 
  Brain, 
  ArrowRight, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Calendar, 
  MapPin,
  Sparkles,
  Layers
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/common/PageHeader';
import { TEACHER_DATA } from '../constants/navigation';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      title: 'Matematiksel Düşünme',
      description: 'Ezberci kurallar yerine bağıntıların mantığını keşfettiren, öğrencilerin analitik ve sorgulayıcı düşünme reflekslerini güçlendiren eğitim temeli.',
      icon: Compass,
      color: 'gold',
    },
    {
      title: 'Problem Çözme Becerisi',
      description: 'LGS ve yeni nesil sorularda belirleyici olan okuduğunu anlama, problemi matematiksel modele dönüştürme ve çok adımlı çözüm stratejileri üretme yetisi.',
      icon: Target,
      color: 'sageGreen',
    },
    {
      title: 'Kavramsal Öğrenme',
      description: 'Matematiğin sarmal yapısına uygun olarak konuları soyuttan somuta taşıyan, eksik temelleri sağlamlaştırarak kalıcı kavrayış oluşturan metodoloji.',
      icon: BookOpen,
      color: 'darkGreen',
    },
    {
      title: 'Bireysel Öğrenci Gelişimi',
      description: 'Her öğrencinin öğrenme hızı ve bilişsel profilinin özgün olduğu bilinciyle kişiselleştirilmiş eksik tamamlama, motivasyon ve periyodik veli bilgilendirmesi.',
      icon: TrendingUp,
      color: 'gold',
    },
  ];

  const quickFacts = [
    {
      label: 'Mevcut Görev',
      value: 'BİL Koleji, Ankara',
      sub: 'Matematik Öğretmeni (2026–Günümüz)',
      icon: Building2,
    },
    {
      label: 'Özel Ders Deneyimi',
      value: '2020 – Günümüz',
      sub: '5, 6, 7 ve 8. Sınıf & LGS Hazırlık',
      icon: Calendar,
    },
    {
      label: 'Lisansüstü Eğitim',
      value: 'Afyon Kocatepe Üniversitesi',
      sub: 'Matematik Eğitimi Yüksek Lisans (Devam Ediyor)',
      icon: GraduationCap,
    },
    {
      label: 'Lisans Eğitimi',
      value: 'Recep Tayyip Erdoğan Üniversitesi',
      sub: 'İlköğretim Matematik Öğretmenliği (2020–2024)',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
    <SEO title="Kübra Yeşilbudak Yılmaz – Hakkımda" description="Kübra Yeşilbudak Yılmaz'ın öğretmenlik, akademik eğitim ve pedagojik yaklaşımı hakkında ayrıntılı bilgi." />
      {/* 1. Üst Bölüm: Başlık ve Kısa Tanıtım */}
      <PageHeader
        badge="Özgeçmiş & Eğitim Yaklaşımı"
        title="Hakkımda"
        subtitle="İlköğretim Matematik Öğretmeni Kübra Yeşilbudak Yılmaz'ın akademik eğitimi, mesleki deneyimleri ve öğrenci odaklı pedagojik yaklaşımı."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-12 sm:space-y-16">
        
        {/* 2 & 3 & 4 & 5. Mesleki ve Akademik Tanıtım Metni (Web Sitesi Tanıtım Dili) */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-cream-100 rounded-3xl p-7 sm:p-10 lg:p-12 border border-sageGreen/30 shadow-xs space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sageGreen/20 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sageGreen-dark">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>İlköğretim Matematik Eğitimi</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-darkGreen/70 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-dark" />
              <span>{TEACHER_DATA.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-darkGreen leading-snug">
              Akademik Temellere Dayanan, Öğrenci Odaklı Eğitim
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-darkGreen/85 font-sans leading-relaxed">
              <p>
                <strong>Kübra Yeşilbudak Yılmaz</strong>, ilköğretim kademesindeki öğrencilerin matematiksel algısını, mantıksal kavrayışını ve sınav başarısını güçlendirmeye odaklanan bir <strong>İlköğretim Matematik Öğretmenidir</strong>.
              </p>
              <p>
                Akademik temelini <strong>Recep Tayyip Erdoğan Üniversitesi İlköğretim Matematik Öğretmenliği</strong> lisans programından (2020–2024) alan Yılmaz; ortaokul matematik öğretim yöntemleri, pedagojik formasyon ve gelişim psikolojisi alanlarında yetkinleşmiştir. Akademik birikimini ileri düzeye taşımak amacıyla <strong>Afyon Kocatepe Üniversitesi Matematik Eğitimi Yüksek Lisans</strong> programında lisansüstü çalışmalarına devam etmektedir.
              </p>
              <p>
                Kurumsal kariyerini 2026 yılından bu yana <strong>BİL Koleji, Ankara</strong> bünyesinde Matematik Öğretmeni olarak sürdürmektedir. Aynı zamanda <strong>2020 yılından günümüze</strong> aralıksız olarak 5, 6, 7 ve 8. sınıf öğrencilerine yönelik bireysel matematik özel dersleri ve kapsamlı LGS hazırlık danışmanlığı yürütmektedir.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Özet Gösterge Kartları */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {quickFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="bg-cream-100 rounded-2xl p-5 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-darkGreen mb-3">
                    <Icon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sageGreen-dark block mb-1">
                    {fact.label}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-darkGreen mb-1">
                    {fact.value}
                  </h3>
                </div>
                <p className="text-xs text-darkGreen/70 pt-2 border-t border-sageGreen/15 mt-2">
                  {fact.sub}
                </p>
              </motion.div>
            );
          })}
        </section>

        {/* 6. Eğitim Yaklaşımı Temaları (Web Sitesi Tanıtım Dili) */}
        <section className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sageGreen/15 text-darkGreen text-[11px] font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-sageGreen-dark" />
              <span>Pedagojik İlkeler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-darkGreen">
              Eğitim Yaklaşımının 4 Temel Teması
            </h2>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Matematiğin teorik derinliğini öğrencinin günlük kavrayışıyla buluşturan pedagojik çerçeve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="bg-cream-100 rounded-2xl p-6 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0 text-darkGreen">
                    <Icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 7. Akıl ve Zekâ Oyunları Eğitmenliği Deneyimi */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-darkGreen text-cream p-7 sm:p-10 border border-gold/35 shadow-md"
        >
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/35 text-gold-light text-xs font-semibold uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5 text-gold-light" />
              <span>Bilişsel Destek</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream">
              Akıl ve Zekâ Oyunları Eğitmenliği Deneyimi
            </h3>

            <p className="text-xs sm:text-sm text-cream-200/85 font-sans leading-relaxed">
              Kübra Yeşilbudak Yılmaz, <strong>Gençlik ve Spor Bakanlığı</strong> bünyesinde (2022–2024) yürüttüğü Akıl ve Zekâ Oyunları Eğitmenliği tecrübesiyle; çocukların uzamsal zekâ, odaklanma, strateji kurma ve mantıksal çıkarım kabiliyetlerini matematik öğretimine entegre etmektedir. Bu yaklaşım, özellikle yeni nesil LGS matematik sorularının gerektirdiği çok yönlü zihinsel becerileri desteklemektedir.
            </p>
          </div>
        </motion.section>

        {/* 8. Akademik Kariyer Sayfasına Zarif Bağlantı */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream-100 rounded-2xl p-6 sm:p-8 border border-sageGreen/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="space-y-1 max-w-xl">
            <h4 className="font-serif text-lg font-bold text-darkGreen">
              Detaylı Kariyer ve Deneyim Zaman Çizelgesi
            </h4>
            <p className="text-xs sm:text-sm text-darkGreen/75 font-sans">
              Eğitim kurumları, görev tarihleri ve akademik geçmişin ayrıntılarını inceleyebilirsiniz.
            </p>
          </div>

          <Link
            to="/akademik-kariyer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-darkGreen hover:bg-darkGreen-light text-cream font-medium text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow shrink-0"
          >
            <span>Akademik Kariyeri İncele</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </motion.section>

      </div>
    </div>
  );
};
