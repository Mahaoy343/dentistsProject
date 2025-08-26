import React from 'react';
import { Calendar, Clock, ArrowLeft, Eye } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'أهمية تنظيف الأسنان اليومي: خطوات بسيطة لابتسامة صحية',
      excerpt: 'تعرف على الطريقة الصحيحة لتنظيف الأسنان والعادات اليومية التي تحافظ على صحة فمك وأسنانك.',
      date: '15 ديسمبر 2024',
      readTime: '5 دقائق',
      views: '2.1k',
      category: 'نصائح يومية',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'متى يحتاج طفلك لزيارة طبيب الأسنان؟',
      excerpt: 'دليل شامل للآباء حول العناية بأسنان الأطفال والعلامات التي تدل على ضرورة زيارة الطبيب.',
      date: '12 ديسمبر 2024',
      readTime: '7 دقائق',
      views: '1.8k',
      category: 'طب أسنان الأطفال',
      image: 'https://images.pexels.com/photos/6627548/pexels-photo-6627548.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'تبييض الأسنان: الحقائق والخرافات',
      excerpt: 'كل ما تحتاج لمعرفته عن تبييض الأسنان، الطرق الآمنة، والنتائج المتوقعة.',
      date: '10 ديسمبر 2024',
      readTime: '6 دقائق',
      views: '3.2k',
      category: 'تجميل الأسنان',
      image: 'https://images.pexels.com/photos/3845455/pexels-photo-3845455.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'زراعة الأسنان: تقنيات حديثة ونتائج طبيعية',
      excerpt: 'اكتشف أحدث تقنيات زراعة الأسنان وكيف يمكن أن تعيد لك الثقة في ابتسامتك.',
      date: '8 ديسمبر 2024',
      readTime: '8 دقائق',
      views: '1.5k',
      category: 'زراعة الأسنان',
      image: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'الأطعمة التي تضر بصحة أسنانك',
      excerpt: 'تعرف على الأطعمة والمشروبات التي قد تضر بأسنانك وكيف يمكن تجنب أضرارها.',
      date: '5 ديسمبر 2024',
      readTime: '4 دقائق',
      views: '2.7k',
      category: 'التغذية والأسنان',
      image: 'https://images.pexels.com/photos/6627522/pexels-photo-6627522.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'تقويم الأسنان الشفاف: البديل العصري',
      excerpt: 'كل ما تود معرفته عن تقويم الأسنان الشفاف ومميزاته مقارنة بالتقويم التقليدي.',
      date: '2 ديسمبر 2024',
      readTime: '6 دقائق',
      views: '1.9k',
      category: 'تقويم الأسنان',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    'الكل',
    'نصائح يومية',
    'طب أسنان الأطفال',
    'تجميل الأسنان',
    'زراعة الأسنان',
    'تقويم الأسنان'
  ];

  const [activeCategory, setActiveCategory] = React.useState('الكل');

  const filteredArticles = activeCategory === 'الكل' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            المدونة الطبية
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف أحدث النصائح والمعلومات الطبية من خبرائنا للعناية بصحة فمك وأسنانك
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-sky-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && filteredArticles[0].featured && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    مقال مميز
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full">{filteredArticles[0].category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{filteredArticles[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredArticles[0].readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                      {filteredArticles[0].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Eye className="h-4 w-4" />
                        <span>{filteredArticles[0].views} مشاهدة</span>
                      </div>
                      <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
                        اقرأ المزيد
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-sky-600">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-lg font-bold text-gray-800 leading-tight hover:text-sky-600 cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm transition-colors pt-2">
                  اقرأ المزيد
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-sky-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا الطبية</h3>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            احصل على أحدث النصائح الطبية والمقالات المفيدة لصحة أسنانك مباشرة في بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button className="bg-white text-sky-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;