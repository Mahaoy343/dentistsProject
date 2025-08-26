import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    'تنظيف الأسنان',
    'تبييض الأسنان',
    'تقويم الأسنان',
    'زراعة الأسنان',
    'علاج اللثة',
    'طب أسنان الأطفال',
    'استشارة عامة'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'أرقام الهواتف',
      details: ['+966 50 123 4567', '+966 11 234 5678'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@smile-clinic.sa', 'appointments@smile-clinic.sa'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['طريق الملك فهد، حي العليا', 'الرياض، المملكة العربية السعودية'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 9:00 ص - 9:00 م', 'الجمعة: مغلق'],
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتك والإجابة على جميع استفساراتك. احجز موعدك الآن أو تواصل معنا للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">احجز موعدك الآن</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-600 mb-2">تم إرسال طلبك بنجاح!</h4>
                <p className="text-gray-600">سنتواصل معك قريباً لتأكيد موعدك</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="اكتب اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف *</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الخدمة المطلوبة *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    >
                      <option value="">اختر الخدمة</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الوقت المفضل</label>
                    <select 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    >
                      <option value="">اختر الوقت المفضل</option>
                      <option value="morning">الصباح (9:00 - 12:00)</option>
                      <option value="afternoon">بعد الظهر (12:00 - 3:00)</option>
                      <option value="evening">المساء (3:00 - 6:00)</option>
                      <option value="night">الليل (6:00 - 9:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">رسالة إضافية</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-vertical"
                    placeholder="أخبرنا عن أي تفاصيل إضافية أو استفسارات خاصة..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  إرسال الطلب
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`${info.color} mb-4`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">{info.title}</h4>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">خريطة الموقع</p>
                <p className="text-sm">طريق الملك فهد، حي العليا، الرياض</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                حالات الطوارئ
              </h4>
              <p className="text-red-600 text-sm mb-2">
                للحالات الطارئة خارج ساعات العمل:
              </p>
              <p className="font-bold text-red-800">+966 50 999 8888</p>
              <p className="text-red-600 text-xs mt-1">متاح 24 ساعة</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">الأسئلة الشائعة</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">كيف يمكنني حجز موعد؟</h4>
                <p className="text-gray-600 text-sm">يمكنك حجز موعد من خلال الهاتف، البريد الإلكتروني، أو عبر النموذج أعلاه.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">هل تقدمون استشارات مجانية؟</h4>
                <p className="text-gray-600 text-sm">نعم، نقدم استشارة أولية مجانية لتقييم حالتك وتحديد خطة العلاج المناسبة.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">ما هي وسائل الدفع المقبولة؟</h4>
                <p className="text-gray-600 text-sm">نقبل الدفع النقدي، البطاقات الائتمانية، والتحويل البنكي. كما نقبل معظم شركات التأمين.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">هل يمكن إلغاء أو تعديل الموعد؟</h4>
                <p className="text-gray-600 text-sm">يمكن إلغاء أو تعديل الموعد قبل 24 ساعة على الأقل من الموعد المحدد.</p>
              </div>
              <div>
                <h4 className="font-semibent text-gray-800 mb-2">كم تستغرق الجلسة العادية؟</h4>
                <p className="text-gray-600 text-sm">تتراوح مدة الجلسة من 30 دقيقة إلى ساعتين حسب نوع العلاج المطلوب.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">هل تقدمون خدمات للأطفال؟</h4>
                <p className="text-gray-600 text-sm">نعم، لدينا قسم متخصص لطب أسنان الأطفال مع أطباء مدربين على التعامل مع الأطفال.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;