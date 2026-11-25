import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Compass, 
  Brain, 
  Building2
} from 'lucide-react';
import { MathShapes } from '../components/common/MathShapes';
import { SEO } from '../components/common/SEO';
import { PhotoPlaceholder } from '../components/common/PhotoPlaceholder';
import { TEACHER_DATA } from '../constants/navigation';

export const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-cream overflow-hidden">
    <SEO title="Kübra Yeşilbudak Yılmaz – Ana Sayfa" description="Kübra Yeşilbudak Yılmaz'ın kişisel web sitesinde matematik öğretimi, LGS hazırlığı ve akademik kariyer hakkında bilgi." />
      {/* Background Animated Geometric Math Elements */}
      <MathShapes />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text / Info Content */}
          <motion.div 
            className="lg:col-span-7 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sageGreen/15 border border-sageGreen/35 text-darkGreen text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-sageGreen-dark" />
              <span>İlköğretim Matematik Öğretmeni • {TEACHER_DATA.location}</span>
            </div>

            {/* Main Headline & Slogan - Size Preserved & Elegant */}
            <div className="space-y-2 sm:space-y-2.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.4rem] font-serif font-semibold text-darkGreen leading-tight tracking-tight">
                {TEACHER_DATA.name}
              </h1>
              <p className="text-xs sm:text-sm font-serif italic text-sageGreen-dark font-normal leading-snug">
                "Matematiğin mantığını, problem çözme sanatını ve düşünme zarafetini keşfeden eğitim anlayışı."
              </p>
            </div>

            {/* Main Description - Updated as instructed */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-darkGreen/80 font-sans leading-relaxed max-w-xl">
              Matematiği keşfetmeye, anlamaya ve sevmeye odaklanan; her öğrencinin öğrenme yolculuğunu önemseyen bir eğitim yaklaşımı.
            </p>

            {/* Current Affiliation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cream-100 border border-gold/40 text-xs text-darkGreen/80 font-medium">
              <Building2 className="w-3.5 h-3.5 text-gold-dark" />
              <span>BİL Koleji, Ankara — Matematik Öğretmeni</span>
            </div>

            {/* Minimal & Consistent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/ozel-ders"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-darkGreen hover:bg-darkGreen-light text-cream font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
              >
                <span>5-8. Sınıf & LGS Programları</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>
              <Link
                to="/akademik-kariyer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-transparent hover:bg-sageGreen/10 text-darkGreen border border-darkGreen/25 hover:border-darkGreen/50 font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>Akademik Kariyeri İncele</span>
              </Link>
            </div>

            {/* 3 Expertise Badges - Elegant, Compact & Horizontal Layout */}
            <div className="pt-4 sm:pt-5 border-t border-sageGreen/20 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-100 border border-sageGreen/30 text-darkGreen shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-sageGreen-dark shrink-0" />
                <span className="text-xs font-medium font-sans">5–8. Sınıf & LGS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-100 border border-gold/40 text-darkGreen shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <span className="text-xs font-medium font-sans">Yeni Nesil Sorular</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-100 border border-sageGreen/30 text-darkGreen shadow-2xs">
                <Brain className="w-3.5 h-3.5 text-sageGreen-dark shrink-0" />
                <span className="text-xs font-medium font-sans">Akıl ve Zekâ Oyunları</span>
              </div>
            </div>

          </motion.div>

          {/* Right Portrait & Visual Section - Elegant Geometric Composition */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="w-full max-w-xs">
              <PhotoPlaceholder />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Overview Teasers - Smooth Scroll Reveal */}
      <motion.section 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 bg-cream-100 border-t border-b border-sageGreen/20 py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-darkGreen">
              Öne Çıkan Eğitim & Mesleki Yaklaşım
            </h2>
            <p className="text-sm text-darkGreen/70">
              Ayrıntılı bilgi için ilgili bölümleri ziyaret edebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: 5-8. Sınıf & LGS Özel Ders */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-cream border border-sageGreen/30 shadow-sm hover:border-gold hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold font-serif text-3xl font-bold">01.</span>
                  <BookOpen className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkGreen mb-2">
                  5, 6, 7 ve 8. Sınıf & LGS Matematik
                </h3>
                <p className="text-xs sm:text-sm text-darkGreen/75 font-sans leading-relaxed mb-4">
                  Temel kazanımların kavranması, eksiklerin kapatılması ve LGS formatındaki beceri temelli yeni nesil soruların çözümü için bireysel çalışma.
                </p>
              </div>
              <div className="pt-4 border-t border-sageGreen/20">
                <Link
                  to="/ozel-ders"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-darkGreen hover:text-gold-dark transition-colors"
                >
                  <span>Özel Ders Detayları</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Akademik Kariyer & Deneyimler */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-cream border border-sageGreen/30 shadow-sm hover:border-gold hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sageGreen-dark font-serif text-3xl font-bold">02.</span>
                  <GraduationCap className="w-5 h-5 text-sageGreen-dark" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkGreen mb-2">
                  Akademik Eğitim & İş Deneyimleri
                </h3>
                <p className="text-xs sm:text-sm text-darkGreen/75 font-sans leading-relaxed mb-4">
                  Afyon Kocatepe Üniversitesi Yüksek Lisans, RTEÜ Lisans mezuniyeti, BİL Koleji ve Özel Afyon İsabet Okulları öğretmenlik deneyimi.
                </p>
              </div>
              <div className="pt-4 border-t border-sageGreen/20">
                <Link
                  to="/akademik-kariyer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-darkGreen hover:text-sageGreen-dark transition-colors"
                >
                  <span>Kariyer Zaman Çizelgesi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Akıl ve Zekâ Oyunları */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-cream border border-sageGreen/30 shadow-sm hover:border-gold hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-darkGreen font-serif text-3xl font-bold">03.</span>
                  <Brain className="w-5 h-5 text-darkGreen" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkGreen mb-2">
                  Akıl ve Zekâ Oyunları Eğitmenliği
                </h3>
                <p className="text-xs sm:text-sm text-darkGreen/75 font-sans leading-relaxed mb-4">
                  Gençlik ve Spor Bakanlığı eğitmenlik deneyimi; analitik zekâ, stratejik düşünme ve dikkat odaklanma egzersizleri.
                </p>
              </div>
              <div className="pt-4 border-t border-sageGreen/20">
                <Link
                  to="/projeler-ve-gonulluluk"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-darkGreen hover:text-gold-dark transition-colors"
                >
                  <span>Projeler ve Gönüllülük</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </div>
  );
};
