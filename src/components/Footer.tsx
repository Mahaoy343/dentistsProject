import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الصفحة الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'فريق الأطباء', href: '#dentists' },
    { name: 'المدونة', href: '#blog' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const services = [
    'تنظيف الأسنان',
    'تبييض الأسنان',
    'تقويم الأسنان',
    'زراعة الأسنان',
    'علاج اللثة',
    'طب أسنان الأطفال'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600' },
    { icon: Twitter, href: '#', color: 'text-sky-500' },
    { icon: Instagram, href: '#', color: 'text-pink-600' },
    { icon: Youtube, href: '#', color: 'text-red-600' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-sky-500 text-white p-3 rounded-full ml-3">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">عيادة الابتسامة</h3>
                <p className="text-gray-400 text-sm">للأسنان والتجميل</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن نلتزم بتقديم أفضل خدمات طب الأسنان بأحدث التقنيات وأعلى معايير الجودة. 
              ابتسامتك هي أولويتنا وسعادتك هي هدفنا.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:scale-110 transition-transform p-2 bg-gray-800 rounded-full hover:bg-gray-700`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>طريق الملك فهد، حي العليا</p>
                  <p>الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <div className="text-gray-300 text-sm">
                  <p>+966 50 123 4567</p>
                  <p>+966 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <div className="text-gray-300 text-sm">
                  <p>info@smile-clinic.sa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>السبت - الخميس: 9:00 ص - 9:00 م</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="mt-6 p-4 bg-red-900/30 rounded-lg border border-red-500/30">
              <h5 className="text-red-400 font-semibold mb-1 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                حالات الطوارئ
              </h5>
              <p className="text-red-300 text-sm">+966 50 999 8888</p>
              <p className="text-red-400 text-xs">متاح 24 ساعة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 عيادة الابتسامة. جميع الحقوق محفوظة.</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-white transition-colors">اتفاقية الاستخدام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;