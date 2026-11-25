import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Target, 
  Send, 
  AlertCircle, 
  Info, 
  ShieldCheck, 
  Sparkles,
  Compass
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/common/PageHeader';
import { TEACHER_DATA } from '../constants/navigation';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Matematik Özel Ders',
    message: '',
  });

  // Validation State
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  // Real-time Field Validation
  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    if (name === 'name') {
      if (!value.trim()) {
        errorMsg = 'Lütfen adınızı ve soyadınızı giriniz.';
      } else if (value.trim().length < 3) {
        errorMsg = 'Ad Soyad en az 3 karakter olmalıdır.';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = 'Lütfen e-posta adresinizi giriniz.';
      } else if (!emailRegex.test(value.trim())) {
        errorMsg = 'Lütfen geçerli bir e-posta adresi giriniz (örnek: isim@soyad.com).';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        errorMsg = 'Lütfen mesajınızı veya öğrenciyle ilgili detayları yazınız.';
      } else if (value.trim().length < 10) {
        errorMsg = 'Mesajınız en az 10 karakter içermelidir.';
      }
    }
    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const messageErr = validateField('message', formData.message);

    setTouched({ name: true, email: true, message: true });
    setErrors({ name: nameErr, email: emailErr, message: messageErr });

    // Since sending service is not active yet on static host, do not submit or pretend it was sent.
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. SAYFA GİRİŞİ */}
      <PageHeader
        badge="İletişim & Danışma"
        title="İletişime Geçelim"
        subtitle="Matematik eğitimi, 5–8. sınıf özel ders çalışmaları ve LGS hazırlığı hakkında bilgi almak için iletişime geçebilirsiniz."
      />
      <SEO title="Kübra Yeşilbudak Yılmaz – İletişim" description="İletişim bilgileri ve formu ile öğretmenle iletişime geçin." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-12 sm:space-y-16">
        
        {/* Güvenlik & Gizlilik Bildirisi */}
        <div className="bg-cream-100 rounded-2xl p-5 border border-sageGreen/30 flex items-start gap-3.5 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-darkGreen/80 leading-relaxed font-sans">
            <strong>Gizlilik ve Doğruluk:</strong> Paylaşılan tüm veriler yalnızca ders süreçlerinin planlanması ve veli bilgilendirmesi amacıyla korunmaktadır. Doğrulanmamış telefon veya üçüncü şahıs bağlantılarına yer verilmemektedir.
          </div>
        </div>

        {/* 2 SÜTUNLU DÜZEN: Sol (Bilgiler) & Sağ (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* 2. İLETİŞİM BİLGİLERİ (Sol Kolon) */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 bg-darkGreen text-cream rounded-3xl p-7 sm:p-9 border border-gold/40 shadow-xl space-y-7"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-light" />
                <span>Eğitim & Danışmanlık</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                {TEACHER_DATA.name}
              </h2>
              <p className="text-xs sm:text-sm text-cream-200/80 font-sans mt-1">
                İlköğretim Matematik Öğretmeni
              </p>
            </div>

            <div className="space-y-4 pt-1">
              
              {/* Konum */}
              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 text-gold-light">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-cream-200/60 uppercase tracking-wider font-sans">Konum</div>
                  <div className="font-semibold text-cream text-sm">Ankara, Türkiye</div>
                </div>
              </div>

              {/* Uzmanlık */}
              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-sageGreen/25 flex items-center justify-center shrink-0 text-gold-light">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-cream-200/60 uppercase tracking-wider font-sans">Uzmanlık Alanı</div>
                  <div className="font-semibold text-cream text-sm">İlköğretim Matematik Eğitimi</div>
                </div>
              </div>

              {/* Ders Düzeyleri */}
              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 text-gold-light">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-cream-200/60 uppercase tracking-wider font-sans">Ders Düzeyleri</div>
                  <div className="font-semibold text-cream text-sm">5, 6, 7 ve 8. Sınıflar</div>
                </div>
              </div>

              {/* LGS Hazırlık */}
              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-sageGreen/25 flex items-center justify-center shrink-0 text-gold-light">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-cream-200/60 uppercase tracking-wider font-sans">Sınav Çalışmaları</div>
                  <div className="font-semibold text-cream text-sm">LGS Matematik Hazırlığı</div>
                </div>
              </div>

            </div>

            {/* Doğrulanmamış Bilgi Uyarısı */}
            <div className="pt-3 border-t border-cream/15 text-xs text-cream-200/70 leading-relaxed font-sans">
              <span className="block text-gold-light font-medium mb-1">Şeffaf Bilgilendirme</span>
              Resmi doğrudan iletişim kanalları kurumsal doğrulama tamamlandıkça bu alanda yayınlanacaktır. Bilgi talepleriniz için formu kullanabilirsiniz.
            </div>
          </motion.div>

          {/* 3. İLETİŞİM FORMU (Sağ Kolon) */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-cream-100 rounded-3xl p-7 sm:p-9 border border-sageGreen/30 shadow-2xs space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sageGreen/15 text-darkGreen text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 text-sageGreen-dark" />
                <span>Ön Talep & Bilgi Formu</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkGreen">
                Mesaj Gönderin
              </h3>
              <p className="text-xs sm:text-sm text-darkGreen/75 font-sans mt-1">
                Aşağıdaki alanları doldurarak özel ders ve eğitim süreçleri hakkında iletişime geçebilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              
              {/* Ad Soyad */}
              <div>
                <label 
                  htmlFor="contact-name" 
                  className="block text-xs font-semibold uppercase tracking-wider text-darkGreen mb-1.5"
                >
                  Ad Soyad <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Adınız ve Soyadınız"
                  className={`w-full px-4 py-3 rounded-xl border bg-cream text-darkGreen text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.name && touched.name 
                      ? 'border-red-400 focus:ring-red-300' 
                      : 'border-sageGreen/40 focus:border-gold focus:ring-gold/30'
                  }`}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* E-posta Adresi */}
              <div>
                <label 
                  htmlFor="contact-email" 
                  className="block text-xs font-semibold uppercase tracking-wider text-darkGreen mb-1.5"
                >
                  E-Posta Adresi <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="ornek@email.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-cream text-darkGreen text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.email && touched.email 
                      ? 'border-red-400 focus:ring-red-300' 
                      : 'border-sageGreen/40 focus:border-gold focus:ring-gold/30'
                  }`}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Konu Seçim Alanı */}
              <div>
                <label 
                  htmlFor="contact-subject" 
                  className="block text-xs font-semibold uppercase tracking-wider text-darkGreen mb-1.5"
                >
                  Konu
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-sageGreen/40 bg-cream text-darkGreen text-sm transition-all focus:outline-none focus:ring-2 focus:border-gold focus:ring-gold/30"
                >
                  <option value="Matematik Özel Ders">Matematik Özel Ders</option>
                  <option value="LGS Hazırlık">LGS Hazırlık</option>
                  <option value="Eğitim Hakkında Bilgi">Eğitim Hakkında Bilgi</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              {/* Mesaj */}
              <div>
                <label 
                  htmlFor="contact-message" 
                  className="block text-xs font-semibold uppercase tracking-wider text-darkGreen mb-1.5"
                >
                  Mesajınız <span className="text-gold-dark">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Ders talebiniz, öğrencinin sınıf seviyesi ve hedefleriniz hakkında bilgi verebilirsiniz..."
                  className={`w-full px-4 py-3 rounded-xl border bg-cream text-darkGreen text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.message && touched.message 
                      ? 'border-red-400 focus:ring-red-300' 
                      : 'border-sageGreen/40 focus:border-gold focus:ring-gold/30'
                  }`}
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Teknik Kural: Gönderim Durumu & Bilgilendirme */}
              <div className="pt-2 space-y-3">
                <div className="p-3.5 rounded-xl bg-gold/15 border border-gold/35 text-xs text-darkGreen/85 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <span>
                    <strong>İletişim formu yakında aktif olacaktır.</strong> Statik altyapıya güvenli mesaj iletim servisi entegre edilmektedir.
                  </span>
                </div>

                {/* Devre Dışı Bırakılmış Buton (Sahte gönderim yapılmaz) */}
                <button
                  type="submit"
                  disabled
                  aria-disabled="true"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-darkGreen/50 text-cream/70 font-medium text-sm cursor-not-allowed border border-darkGreen/20 shadow-none transition-colors"
                >
                  <Send className="w-4 h-4 text-gold-light/60" />
                  <span>Mesaj Gönder (Yakında Aktif)</span>
                </button>
              </div>

            </form>
          </motion.div>

        </div>

        {/* 4. ALT BÖLÜM: KAPANIŞ MESAJI */}
        <motion.section 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-sageGreen/30 text-center space-y-3"
        >
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto text-darkGreen mb-2">
            <Compass className="w-5 h-5 text-gold-dark" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-darkGreen">
            Matematik Yolculuğuna Birlikte Başlayalım
          </h3>

          <p className="text-xs sm:text-sm text-darkGreen/75 font-sans leading-relaxed max-w-xl mx-auto">
            Öğrencinin matematikle kurduğu bağı güçlendirmek, eksikleri güvenle tamamlamak ve hedeflenen başarıya adım adım ilerlemek için buradayız.
          </p>
        </motion.section>

      </div>
    </div>
  );
};
