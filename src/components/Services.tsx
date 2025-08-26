import React from 'react';
import { Sparkles, Scissors, Zap, Smile, Shield, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'تنظيف الأسنان',
      description: 'تنظيف شامل للأسنان واللثة بأحدث التقنيات لإزالة الجير والبلاك',
      features: ['تنظيف عميق', 'إزالة الجير', 'تلميع الأسنان', 'فحص شامل'],
      price: 'ابتداءً من 200 ريال',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Smile,
      title: 'تبييض الأسنان',
      description: 'احصل على ابتسامة ناصعة البياض بتقنيات التبييض الآمنة والفعالة',
      features: ['تبييض آمن', 'نتائج فورية', 'بدون ألم', 'ضمان لمدة سنة'],
      price: 'ابتداءً من 800 ريال',
      image: 'https://images.pexels.com/photos/3845455/pexels-photo-3845455.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Scissors,
      title: 'تقويم الأسنان',
      description: 'تقويم الأسنان بأنواعه المختلفة لتحقيق أفضل توازن ومظهر للأسنان',
      features: ['تقويم شفاف', 'تقويم معدني', 'متابعة دورية', 'نتائج مضمونة'],
      price: 'ابتداءً من 3000 ريال',
      image: 'https://images.pexels.com/photos/6627522/pexels-photo-6627522.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Zap,
      title: 'زراعة الأسنان',
      description: 'زراعة الأسنان المفقودة بأحدث التقنيات العالمية وأجود الخامات',
      features: ['زراعة فورية', 'مواد عالمية', 'ضمان مدى الحياة', 'نتائج طبيعية'],
      price: 'ابتداءً من 2500 ريال',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'علاج اللثة',
      description: 'علاج أمراض اللثة والتهاباتها بطرق حديثة وغير مؤلمة',
      features: ['علاج التهابات', 'تنظيف عميق', 'جلسات علاجية', 'وقاية شاملة'],
      price: 'ابتداءً من 300 ريال',
      image: 'https://images.pexels.com/photos/6627548/pexels-photo-6627548.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Heart,
      title: 'طب أسنان الأطفال',
      description: 'رعاية خاصة لأسنان الأطفال في بيئة مريحة وودودة',
      features: ['بيئة صديقة للأطفال', 'أطباء متخصصون', 'علاج بدون ألم', 'برامج وقائية'],
      price: 'ابتداءً من 150 ريال',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            خدماتنا المتميزة
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات طب الأسنان بأحدث التقنيات وأعلى معايير الجودة العالمية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-sky-600" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-sky-600 font-bold">{service.price}</div>
                    <button 
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                      احجز الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-sky-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج لاستشارة مجانية؟</h3>
            <p className="text-sky-100 mb-6">
              احصل على استشارة مجانية من أطبائنا المختصين لتحديد أفضل خطة علاج مناسبة لك
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              احصل على استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;