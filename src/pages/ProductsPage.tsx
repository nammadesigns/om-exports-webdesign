import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';



const products = [
  {
    id: 1,
    name: 'Dry Red Chilli',
    category: 'Spices',
    grade: 'Grade A',
    image: '/Images-Videos/guntur-chilli.jpg',
    description: 'Available in Guntur & Byadgi types. Hand-picked and sun-dried to perfection.',
    specs: [
      { label: 'Moisture', value: 'Max 12%' },
      { label: 'ASTA Color', value: '40 - 160' },
    ],
  },
  {
    id: 2,
    name: 'Fresh Onion',
    category: 'Vegetables',
    grade: null,
    image: '/Images-Videos/red0onin.jpg',
    description: 'Premium Nasik Red variety. Optimized for long-distance transit and shelf life.',
    specs: [
      { label: 'Size', value: '45mm - 60mm+' },
      { label: 'Origin', value: 'Maharashtra' },
    ],
  },
  {
    id: 3,
    name: 'Ground Nuts',
    category: 'Oilseeds',
    grade: null,
    image: '/Images-Videos/java-peanut.webp',
    description: 'HPS Bold and Java varieties. High oil content and consistent size calibration.',
    specs: [
      { label: 'Count/Oz', value: '40/50, 50/60' },
      { label: 'Aflatoxin', value: '< 4 PPB' },
    ],
  },
  {
    id: 4,
    name: 'Sugar',
    category: 'Grains',
    grade: null,
    image: '/Images-Videos/sugar.png',
    description: 'Indian Cane Sugar S30/M30. International standard ICUMSA 45-150.',
    specs: [
      { label: 'ICUMSA', value: 'Under 100' },
      { label: 'Purity', value: '99.8% Min' },
    ],
  },
  {
    id: 5,
    name: 'Yellow Maize',
    category: 'Grains',
    grade: null,
    image: '/Images-Videos/Yellow-Maize-01.webp',
    description: 'High-energy animal feed grade. Mechanically cleaned and low moisture content.',
    specs: [
      { label: 'Moisture', value: 'Max 14%' },
      { label: 'Protein', value: '8% - 9%' },
    ],
  },
  {
    id: 6,
    name: 'Coconut Fiber',
    category: 'Fibers',
    grade: null,
    image: '/Images-Videos/Coconut-Fibre.webp',
    description: 'Bale-packaged long fiber. Ideal for upholstery and erosion control applications.',
    specs: [
      { label: 'Length', value: '5cm - 15cm' },
      { label: 'Impurity', value: '< 3%' },
    ],
  },
  {
    id: 7,
    name: 'Rice',
    category: 'Rice',
    grade: 'Premium',
    image: '/Images-Videos/rice.jpg',
    description: 'Premium Basmati & Non-Basmati varieties. Long-grain, aromatic, and aged for superior cooking quality.',
    specs: [
      { label: 'Moisture', value: 'Max 14%' },
      { label: 'Broken', value: '< 5%' },
    ],
  },

];

const categories = [
  { name: 'All Products', count: 7 },
  { name: 'Spices', count: 2 },
  { name: 'Grains', count: 1 },
  { name: 'Oilseeds', count: 1 },
  { name: 'Fibers', count: 1 },
  { name: 'Rice', count: 1 },
  { name: 'Vegetables', count: 2 },
];


export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const navigate = useNavigate();

  useScrollReveal('[data-reveal]');



  useEffect(() => {
    const articleCards = document.querySelectorAll('article');
    articleCards.forEach((card) => {
      const el = card as HTMLElement;
      card.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-4px)';
      });
      card.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
      });
    });

    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add('shadow-md');
        } else {
          nav.classList.remove('shadow-md');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredProducts = products.filter(p => {
    const categoryMatch = activeCategory === 'All Products' || p.category === activeCategory;
    
    if (selectedGrades.length === 0) return categoryMatch;

    let hasMatch = false;
    if (selectedGrades.includes('Export Quality (A)') && p.grade === 'Grade A') hasMatch = true;
    if (selectedGrades.includes('Premium Grade') && p.grade === 'Premium') hasMatch = true;
    if (selectedGrades.includes('Organic Certified') && p.grade === 'Organic') hasMatch = true;

    return categoryMatch && hasMatch;
  });


  return (
    <div className="bg-surface font-body-rt text-on-surface grainy-bg min-h-screen">
      {/* Hero Section */}
      <header className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/30 pb-12">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block animate-fade-in">
              International Trade Excellence
            </span>
            <h1 className="font-display-xl text-display-xl text-primary leading-tight animate-slide-up">
              Premium Agricultural <br />Catalog
            </h1>
          </div>
          <div className="max-w-sm text-on-surface-variant font-body-rt animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <p>
              Curating the finest harvests from the heart of India. We bridge domestic tradition with global logistics precision to deliver certified excellence.
            </p>
          </div>
        </div>
      </header>


      {/* Main Content Layout */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow border border-outline-variant/20">
              <h3 className="font-subheading-md text-subheading-md text-primary mb-6">Categories</h3>
              <nav className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center justify-between group py-2 ${
                      activeCategory === cat.name
                        ? 'text-secondary font-bold'
                        : 'text-on-surface-variant hover:text-secondary transition-colors'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs ${activeCategory === cat.name ? 'bg-secondary/10' : 'bg-surface-container-high'} px-2 py-1 rounded-full`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="mt-10 pt-10 border-t border-outline-variant/20">
                <h3 className="font-subheading-md text-subheading-md text-primary mb-6">Quality Grade</h3>
                <div className="space-y-3">
                  {['Export Quality (A)', 'Premium Grade', 'Organic Certified'].map((grade) => (
                    <label key={grade} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        className="rounded border-outline-variant text-secondary focus:ring-secondary" 
                        type="checkbox" 
                        checked={selectedGrades.includes(grade)}
                        onChange={() => {
                          setSelectedGrades(prev => 
                            prev.includes(grade) 
                              ? prev.filter(g => g !== grade) 
                              : [...prev, grade]
                          );
                        }}
                      />
                      <span className="text-body-rt text-on-surface-variant group-hover:text-on-surface">{grade}</span>
                    </label>
                  ))}
                </div>

              </div>
            </div>

            <div className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-subheading-md text-white mb-2">Need a custom quote?</h4>
                <p className="text-on-primary-container text-sm mb-6">
                  Our trade desk is available for volume-based negotiations.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-secondary-fixed text-on-secondary-fixed py-3 rounded-lg font-button-text hover:bg-white transition-colors"
                >
                  Contact Expert
                </button>

              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">public</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter" data-stagger>
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow border border-outline-variant/10 hover:border-secondary transition-all flex flex-col"
                  data-reveal="fade-up"
                >

                  <div className="h-64 overflow-hidden relative">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={product.image}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                        {product.category}
                      </span>
                      {product.grade && (
                        <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                          {product.grade}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-subheading-md text-primary">{product.name}</h3>
                      <button title="Download Spec Sheet">
                        <span className="material-symbols-outlined text-outline hover:text-secondary transition-colors">
                          description
                        </span>
                      </button>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-4">{product.description}</p>
                    <div className="space-y-2 mb-6 text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between border-b border-outline-variant/10 pb-1">
                          <span>{spec.label}</span>
                          <span className="text-primary font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full mt-auto bg-primary text-white py-3 rounded-lg font-button-text hover:bg-secondary transition-all flex items-center justify-center gap-2"
                    >
                      Enquire Now
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Trust Bar */}
      <section className="bg-surface-container-low py-16 border-y border-outline-variant/20 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-label-sm text-label-sm text-center text-outline-variant tracking-[0.2em] uppercase mb-12">
            Globally Certified Quality Standards
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              { icon: 'verified_user', label: 'FSSAI' },
              { icon: 'fact_check', label: 'APEDA' },
              { icon: 'security', label: 'ISO 22000' },
              { icon: 'eco', label: 'ORGANIC' },
              { icon: 'public', label: 'GLOBAL G.A.P' },
            ].map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-primary">{cert.icon}</span>
                <span className="font-label-sm text-[10px] text-primary">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
