import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, TEACHER_DATA } from '../../constants/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGreen text-cream-100 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Academic Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-darkGreen-light">
                <Compass className="w-5 h-5 text-gold-light" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-cream block">
                  {TEACHER_DATA.name}
                </span>
                <span className="text-xs text-sageGreen font-sans tracking-wide">
                  İlköğretim Matematik Öğretmeni
                </span>
              </div>
            </div>
            <p className="text-sm text-cream-200/80 leading-relaxed font-sans max-w-sm">
              5, 6, 7 ve 8. sınıf öğrencilerine yönelik analitik düşünme, yeni nesil soru stratejileri ve LGS başarısını destekleyen pedagojik ilköğretim matematik eğitimi.
            </p>
            <div className="pt-2 text-xs text-gold-light/90 italic font-serif">
              "Matematik, zihni terbiye eden en zarif düşünce biçimidir."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-light tracking-wider uppercase text-xs">
              Sayfalar
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs text-cream-200/80 hover:text-gold-light transition-colors py-1 flex items-center group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Verified Contact Details (Only Ankara, Türkiye and official contact email) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-light tracking-wider uppercase text-xs">
              Konum & İletişim
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-light shrink-0" />
                <span>{TEACHER_DATA.location}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-light shrink-0" />
                <span>{TEACHER_DATA.email}</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                to="/ozel-ders"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-cream bg-gold/30 hover:bg-gold/40 border border-gold/40 px-3 py-1.5 rounded-md transition-colors"
              >
                <span>5-8. Sınıf Özel Ders Bilgi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center text-xs text-cream-200/50">
          <p>© {new Date().getFullYear()} {TEACHER_DATA.name}. Tüm hakları saklıdır.</p>
          <p className="mt-2 sm:mt-0 font-sans">Ankara • Modern İlköğretim Matematik Portföyü</p>
        </div>
      </div>
    </footer>
  );
};
