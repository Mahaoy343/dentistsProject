import React from 'react';
import { Heart, Shield, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'الرعاية المخصصة',
      description: 'نهتم بكل عميل كحالة فريدة ونقدم العلاج المناسب لاحتياجاته'
    },
    {
      icon: Shield,
      title: 'الأمان والثقة',
      description: 'نطبق أعلى معايير السلامة والتعقيم لضمان راحتك وأمانك'
    },
    {
      icon: Award,
      title: 'الخبرة والكفاءة',
      description: 'فريق من أمهر أطباء الأسنان مع سنوات من الخبرة والتخصص'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'فريق مدرب لتقديم أفضل تجربة للمرضى من الاستقبال حتى المتابعة'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                من نحن؟
              </h2>
              <div className="h-1 w-20 bg-sky-600 rounded"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                عيادة الابتسامة هي وجهتك الأولى للحصول على أفضل خدمات طب الأسنان في المنطقة. 
                منذ تأسيسنا قبل أكثر من 15 عاماً، نلتزم بتقديم رعاية طبية متميزة بأحدث التقنيات 
                والمعدات الطبية المتطورة.
              </p>
              <p>
                رؤيتنا هي أن نكون الرائدين في مجال طب الأسنان والتجميل، ونسعى لتحقيق أعلى 
                معايير الجودة والتميز في الخدمة. رسالتنا هي توفير بيئة آمنة ومريحة لجميع المرضى 
                مع ضمان حصولهم على أفضل النتائج.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-sky-50 transition-colors">
                  <div className="bg-sky-100 p-3 rounded-full flex-shrink-0">
                    <value.icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="عيادة حديثة"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="طبيب أسنان"
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>

            {/* Achievement Badge */}
            <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">سنة من التميز</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;