import React from 'react';
import { ArrowLeft, Star, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="teeth-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#teeth-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                ابتسامتك
                <span className="block text-sky-600">هي أولويتنا</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                في عيادة الابتسامة، نقدم أفضل خدمات طب الأسنان بأحدث التقنيات وأعلى معايير الجودة. 
                فريقنا من أمهر الأطباء مستعد لتحقيق الابتسامة المثالية التي تحلم بها.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-800">+5000</div>
                <div className="text-gray-600 text-sm">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600 text-sm">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-800">4.9</div>
                <div className="text-gray-600 text-sm">تقييم العملاء</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                احجز موعدك الآن
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                تعرف على خدماتنا
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عيادة أسنان حديثة"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">99%</div>
                  <div className="text-gray-600 text-sm">نسبة رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;