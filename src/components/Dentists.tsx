import React from 'react';
import { Star, Award, Calendar, Users } from 'lucide-react';

const Dentists = () => {
  const dentists = [
    {
      name: 'د. أحمد المحمد',
      title: 'استشاري طب الأسنان',
      specialization: 'زراعة الأسنان والتجميل',
      experience: '15 سنة خبرة',
      education: 'دكتوراه في طب الأسنان - جامعة الملك سعود',
      achievements: ['أفضل طبيب أسنان 2023', 'شهادة البورد الأمريكي', 'عضو الجمعية السعودية لطب الأسنان'],
      rating: 4.9,
      patients: '+2000',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: 'السبت - الأربعاء'
    },
    {
      name: 'د. فاطمة الزهراني',
      title: 'استشارية تقويم الأسنان',
      specialization: 'تقويم الأسنان والفكين',
      experience: '12 سنة خبرة',
      education: 'ماجستير تقويم الأسنان - جامعة الملك عبدالعزيز',
      achievements: ['خبيرة التقويم الشفاف', 'شهادة من الأكاديمية الأمريكية', 'متخصصة في تقويم البالغين'],
      rating: 4.8,
      patients: '+1500',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: 'الأحد - الخميس'
    },
    {
      name: 'د. خالد العتيبي',
      title: 'استشاري جراحة الفم والأسنان',
      specialization: 'جراحة الفم وزراعة الأسنان',
      experience: '18 سنة خبرة',
      education: 'زمالة جراحة الفم والوجه والفكين - كندا',
      achievements: ['خبير الزراعة الفورية', 'رائد تقنيات الليزر', 'محاضر دولي معتمد'],
      rating: 5.0,
      patients: '+2500',
      image: 'https://images.pexels.com/photos/6627522/pexels-photo-6627522.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: 'السبت - الثلاثاء'
    },
    {
      name: 'د. نورا القحطاني',
      title: 'استشارية طب أسنان الأطفال',
      specialization: 'طب وجراحة أسنان الأطفال',
      experience: '10 سنوات خبرة',
      education: 'دبلوم طب أسنان الأطفال - جامعة الملك فيصل',
      achievements: ['خبيرة طب الأطفال', 'متخصصة في العلاج النفسي', 'برامج الوقاية للأطفال'],
      rating: 4.9,
      patients: '+1200',
      image: 'https://images.pexels.com/photos/6627548/pexels-photo-6627548.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: 'الأحد - الأربعاء'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dentists" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            فريق الأطباء المتميز
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            يضم فريقنا نخبة من أمهر أطباء الأسنان المتخصصين الحاصلين على أعلى الشهادات العلمية والخبرات العملية
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {dentists.map((doctor, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="relative">
                      <img 
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-sky-600 text-white rounded-full p-2">
                        <Award className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1 text-center lg:text-right space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-sky-600 font-semibold">{doctor.title}</p>
                      <p className="text-gray-600">{doctor.specialization}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-sky-600" />
                        <span>{doctor.patients} مريض</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="bg-sky-50 rounded-lg p-4 text-sm">
                      <p className="text-gray-700 leading-relaxed">{doctor.education}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {doctor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center justify-center lg:justify-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Availability and CTA */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold">متاح: </span>
                          {doctor.available}
                        </div>
                        <button 
                          onClick={scrollToContact}
                          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                        >
                          احجز موعد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-sky-600 rounded-2xl text-white p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sky-100">طبيب متخصص</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sky-100">سنة خبرة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7000+</div>
              <div className="text-sky-100">عملية ناجحة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-sky-100">نسبة رضا</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dentists;