import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  BookOpen, 
  HeartHandshake, 
  Calendar, 
  CheckCircle2, 
  Compass, 
  Code, 
  Users, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  Scale
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/common/PageHeader';

type ProjectCategory = 'all' | 'projects' | 'volunteering' | 'activities';

interface ProjectItem {
  id: string;
  title: string;
  category: 'projects' | 'volunteering' | 'activities';
  categoryLabel: string;
  period?: string;
  organization?: string;
  description: string;
  icon: React.ElementType;
  details?: string[];
}

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const items: ProjectItem[] = [
    // 1. EĞİTİM PROJELERİ
    {
      id: 'olasilik-algisi-2024',
      title: 'İlköğretim Matematik Öğretmenliğinde Öğrenim Gören Öğrencilerin Olasılık ve Olasılık Öğretimine Yönelik Algılarının İncelenmesi',
      category: 'projects',
      categoryLabel: 'Eğitim Projesi',
      period: '2022 – 2024',
      description: 'İlköğretim matematik öğretmenliği lisans sürecinde olasılık kavramlarının kavranışı ve olasılık öğretimine yönelik öğretmen adaylarının algılarını inceleyen araştırma çalışması.',
      icon: BookOpen,
      details: [
        'Doğrulanmış akademik araştırma projesi',
        'Olasılık öğretimi ve pedagojik yaklaşım analizi',
      ],
    },
    {
      id: 'web2-olcme-degerlendirme',
      title: 'Web 2.0 Araçları ile Ölçme ve Değerlendirme Etkinlikleri',
      category: 'projects',
      categoryLabel: 'Eğitim Projesi',
      description: 'Matematik eğitiminde biçimlendirici ölçme-değerlendirme süreçlerinin Web 2.0 etkileşimli dijital araçlarıyla zenginleştirilmesi çalışması.',
      icon: Compass,
      details: [
        'Eğitim teknolojileri ve dijital etkinlik tasarımı',
        'Öğrenci katılımını artıran ölçme metotları',
      ],
    },
    {
      id: 'minik-eller-kod-yaziyor-2024',
      title: 'Minik Eller Kod Yazıyor',
      category: 'projects',
      categoryLabel: 'Eğitim Projesi',
      period: 'Aralık 2024',
      description: 'Küçük yaş gruplarındaki öğrencilere algoritmik düşünme, blok tabanlı kodlama mantığı ve problem çözme becerisi kazandıran eğitim projesi.',
      icon: Code,
      details: [
        'Algoritmik ve bilişimsel düşünme temeli',
        'Erken yaş problem çözme pratikleri',
      ],
    },

    // 2. GÖNÜLLÜLÜK DENEYİMLERİ
    {
      id: 't3-vakfi-mentorluk',
      title: 'T3 Vakfı — Eğitmen Mentor Bursiyeri',
      category: 'volunteering',
      categoryLabel: 'Gönüllülük Deneyimi',
      period: 'Mart 2024 – Ocak 2025',
      organization: 'Türkiye Teknoloji Takımı (T3) Vakfı',
      description: 'T3 Vakfı bünyesinde öğrencilere yönelik eğitmenlik desteği ve teknoloji atölyelerinde mentorluk görevi.',
      icon: HeartHandshake,
      details: [
        'Öğrenci mentörlüğü ve eğitim desteği',
        'Atölye rehberliği ve takım çalışması',
      ],
    },
    {
      id: 'merkezim-her-yerde',
      title: 'Merkezim Her Yerde',
      category: 'volunteering',
      categoryLabel: 'Gönüllülük Deneyimi',
      description: 'Gençlik merkezlerinin eğitsel, sosyal ve kültürel faaliyetlerini dezavantajlı veya kırsal bölgelerdeki çocuk ve gençlerle buluşturan gönüllülük hareketi.',
      icon: Users,
      details: [
        'Eğitimde fırsat eşitliğini destekleyen saha çalışmaları',
        'Çocuklara yönelik eğitsel ve sosyal aktiviteler',
      ],
    },
    {
      id: 'damla-gonulluluk-hareketi',
      title: 'Damla Gönüllülük Hareketi',
      category: 'volunteering',
      categoryLabel: 'Gönüllülük Deneyimi',
      description: 'Toplumsal duyarlılık, okul ziyaretleri, çevre koruma ve dezavantajlı bireylere yönelik dayanışma faaliyetlerini kapsayan gönüllülük programı.',
      icon: HeartHandshake,
      details: [
        'Toplumsal dayanışma ve gönüllü eğitim desteği',
        'Kültürel etkileşim ve sosyal sorumluluk',
      ],
    },
    {
      id: 'genc-gonullu-lider',
      title: 'Genç Gönüllü Lider',
      category: 'volunteering',
      categoryLabel: 'Gönüllülük Deneyimi',
      description: 'Gençlik etkinliklerinde ve toplumsal projelerde akran rehberliği, grup yönlendirmesi ve gönüllü liderlik çalışmaları.',
      icon: Users,
      details: [
        'Akran rehberliği ve grup koordinasyonu',
        'Gönüllü çalışma organizasyonları',
      ],
    },
    {
      id: 'kamp-lideri',
      title: 'Kamp Lideri',
      category: 'volunteering',
      categoryLabel: 'Gönüllülük Deneyimi',
      description: 'Gençlik kamplarında katılımcı öğrencilerin eğitsel atölyelere, spor ve sosyal aktivitelere yönlendirilmesinde liderlik ve rehberlik görevi.',
      icon: Compass,
      details: [
        'Eğitsel kamp liderliği ve takım yönetimi',
        'Gençlerle sosyal ve sportif etkinlik rehberliği',
      ],
    },

    // 3. DİĞER MESLEKİ FAALİYETLER
    {
      id: 'ugdd-savunusculuk',
      title: 'UGDD Ulusal Savunuşçuluk Eğitimi',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'Ulusal Gençlik Dayanışma Derneği (UGDD) bünyesinde gençlik hakları ve savunuşçuluk alanında mesleki gelişim eğitimi katılımı.',
      icon: ShieldCheck,
      details: [
        'Ulusal savunuşçuluk ve gençlik hakları ilkeleri',
        'Mesleki farkındalık ve sivil toplum çalışmaları',
      ],
    },
    {
      id: 'tgsp-genc-turkiye-forumu',
      title: 'TGSP Genç Türkiye Forumu Karadeniz Bölgesi Gençlerin Yükseköğretim Algısı Çalıştayı',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'TGSP koordinasyonunda düzenlenen Karadeniz Bölgesi yükseköğretim algısı, gençliğin beklentileri ve eğitim niteliği çalıştayı katılımı.',
      icon: Activity,
      details: [
        'Bölgesel yükseköğretim değerlendirme çalıştayı',
        'Eğitim politikaları ve gençlik algısı müzakereleri',
      ],
    },
    {
      id: 'epdad-ogrenci-degerlendirici-calistayi',
      title: 'EPDAD Öğrenci Değerlendirici Çalıştayı',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'Öğretmenlik Eğitim Programları Değerlendirme ve Akreditasyon Derneği (EPDAD) bünyesinde eğitim fakülteleri kalite standartları ve değerlendirici eğitimi.',
      icon: Scale,
      details: [
        'Eğitim fakülteleri program akreditasyonu',
        'Kalite standartları ve değerlendirme ilkeleri',
      ],
    },
    {
      id: 'rize-matematik-egitimi-toplulugu',
      title: 'Rize Matematik Eğitimi Topluluğu',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'Üniversite bünyesinde matematik eğitimi seminerleri, çalıştaylar, materyal sergileri ve öğrenci etkinlikleri düzenleyen topluluk çalışmaları.',
      icon: BookOpen,
      details: [
        'Matematik eğitimi topluluk faaliyetleri',
        'Seminer ve akademik atölye organizasyonları',
      ],
    },
    {
      id: 'hakemlik-faaliyeti',
      title: 'Hakemlik',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'İlgili turnuva, yarışma veya eğitsel platformlarda adil ölçme ve değerlendirme kriterlerine uygun olarak yürütülen hakemlik görevi.',
      icon: Scale,
      details: [
        'Kural ve kriter değerlendirme sorumluluğu',
        'Etkinlik içi ölçme ve puanlama süreçleri',
      ],
    },
    {
      id: 'ogrenci-degerlendirici',
      title: 'Öğrenci Değerlendirici',
      category: 'activities',
      categoryLabel: 'Mesleki Faaliyet',
      description: 'Öğretmenlik eğitim programlarının değerlendirilmesi ve akreditasyon çalışmalarında öğrenci temsilcisi değerlendirici rolü.',
      icon: CheckCircle2,
      details: [
        'Öğretim programı değerlendirme ve geri bildirim',
        'Öğrenci bakış açısıyla kalite güvencesi',
      ],
    },
  ];

  // Filtering logic
  const filteredItems = items.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'Tümü', count: items.length },
    { id: 'projects', label: 'Eğitim Projeleri', count: items.filter(i => i.category === 'projects').length },
    { id: 'volunteering', label: 'Gönüllülük Deneyimleri', count: items.filter(i => i.category === 'volunteering').length },
    { id: 'activities', label: 'Diğer Mesleki Faaliyetler', count: items.filter(i => i.category === 'activities').length },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Üst Bölüm: Başlık ve Kısa Tanıtım */}
      <PageHeader
        badge="Toplumsal Katkı & Çalışmalar"
        title="Projeler ve Gönüllülük"
        subtitle="Kübra Yeşilbudak Yılmaz'ın doğrulanmış eğitim araştırmaları, gençlik gönüllülük deneyimleri ve mesleki çalıştay katılımları."
      />
      <SEO title="Kübra Yeşilbudak Yılmaz – Projeler ve Gönüllülük" description="Kübra’nın eğitim projeleri, gönüllülük deneyimleri ve mesleki faaliyetleri hakkında bilgi." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-10 sm:space-y-12">
        
        {/* Şeffaflık & Doğruluk Bilgilendirmesi */}
        <div className="bg-cream-100 rounded-2xl p-5 border border-sageGreen/30 flex items-start gap-3.5 shadow-2xs">
          <Sparkles className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-darkGreen/80 leading-relaxed font-sans">
            <strong>Doğrulanmış Faaliyetler:</strong> Bu sayfadaki tüm kayıtlar Kübra Yeşilbudak Yılmaz'ın resmi eğitim projeleri, sivil toplum gönüllülükleri ve çalıştay katılımlarını içermektedir. Doğrulanmamış başarı oranları, sahte etkinlik fotoğrafları veya abartılı yetki iddiaları yer almamaktadır.
          </div>
        </div>

        {/* Filtreleme Menüsü */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-sageGreen/25 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-darkGreen text-cream shadow-xs font-semibold'
                  : 'bg-cream-100 text-darkGreen/75 hover:text-darkGreen hover:bg-sageGreen/15 border border-sageGreen/25'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Kartlar Grid Yapısı */}
        <motion.div 
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="bg-cream-100 rounded-2xl p-6 border border-sageGreen/30 shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-200 flex flex-col justify-between relative overflow-hidden group break-words"
                >
                  {/* Subtle Geometric Math Accent Lines (Pure SVG, no photos) */}
                  <div className="absolute top-0 right-0 w-28 h-28 opacity-[0.05] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                    <svg viewBox="0 0 100 100" fill="none" stroke="#263B35">
                      <polygon points="50,10 90,80 10,80" strokeWidth="1.5" />
                      <circle cx="50" cy="50" r="35" strokeDasharray="3 3" strokeWidth="1" />
                    </svg>
                  </div>

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

                    {/* Başlık */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-darkGreen mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Kurum / Organizasyon */}
                    {item.organization && (
                      <div className="text-xs font-semibold text-sageGreen-dark mb-2">
                        {item.organization}
                      </div>
                    )}

                    {/* Tarih / Dönem Bilgisi (Yalnızca doğrulanmışsa gösterilir) */}
                    {item.period && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-darkGreen/70 mb-3 px-2 py-0.5 rounded bg-cream border border-sageGreen/20 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                        <span>{item.period}</span>
                      </div>
                    )}

                    {/* Açıklama */}
                    <p className="text-xs sm:text-sm text-darkGreen/80 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Vurgu Detayları */}
                  {item.details && item.details.length > 0 && (
                    <div className="pt-3.5 border-t border-sageGreen/15 space-y-1.5">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-darkGreen/75">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sageGreen-dark shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};
