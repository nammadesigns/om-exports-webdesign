import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';



const products = [
  // Spices
  {
    id: 1,
    name: 'Turmeric Fingers',
    category: 'Spices',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/turmeric-finger.jpg',
    description: 'High curcumin content, carefully sorted and polished turmeric fingers.',
    specs: [{ label: 'Curcumin', value: '3% - 5%' }, { label: 'Moisture', value: 'Max 10%' }],
  },
  {
    id: 2,
    name: 'Turmeric Powder',
    category: 'Spices',
    grade: 'Premium Grade',
    image: '/Images-Videos/turmeric-powder.webp',
    description: 'Finely ground, vibrant yellow turmeric powder with rich aroma.',
    specs: [{ label: 'Curcumin', value: '3% - 5%' }, { label: 'Mesh', value: '60 - 80' }],
  },
  {
    id: 3,
    name: 'Red Chilli',
    category: 'Spices',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/red-chilli.jpg',
    description: 'Available in Guntur & Byadgi types. Hand-picked and sun-dried to perfection.',
    specs: [{ label: 'Moisture', value: 'Max 12%' }, { label: 'ASTA Color', value: '40 - 160' }],
  },
  {
    id: 4,
    name: 'Cumin Seeds',
    category: 'Spices',
    grade: 'Premium Grade',
    image: '/Images-Videos/cumin-seeds.jpeg',
    description: 'Aromatic, clean, and sortexed cumin seeds with high volatile oil.',
    specs: [{ label: 'Purity', value: '99%' }, { label: 'Moisture', value: 'Max 9%' }],
  },
  {
    id: 5,
    name: 'Coriander Seeds',
    category: 'Spices',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/corionder-seeds.jpeg',
    description: 'Greenish-brown, split and whole coriander seeds with citrusy flavor.',
    specs: [{ label: 'Purity', value: '99%' }, { label: 'Split', value: 'Max 5%' }],
  },
  {
    id: 6,
    name: 'Black Pepper',
    category: 'Spices',
    grade: 'Premium Grade',
    image: '/Images-Videos/black-peper.jpeg',
    description: 'Bold, dark, and pungent black pepper corns (500-550 GL).',
    specs: [{ label: 'Density', value: '500-550 GL' }, { label: 'Moisture', value: 'Max 11%' }],
  },
  {
    id: 7,
    name: 'Green Cardamom',
    category: 'Spices',
    grade: 'Premium Grade',
    image: '/Images-Videos/green-cardamon.jpeg',
    description: 'Aromatic and flavorful green pods, carefully hand-picked.',
    specs: [{ label: 'Size', value: '6mm - 8mm' }, { label: 'Color', value: 'Deep Green' }],
  },
  {
    id: 8,
    name: 'Cloves',
    category: 'Spices',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/cloves.jpeg',
    description: 'Rich in essential oils, fully formed cloves with distinct aroma.',
    specs: [{ label: 'Moisture', value: 'Max 12%' }, { label: 'Headless', value: 'Max 2%' }],
  },
  {
    id: 9,
    name: 'Cinnamon',
    category: 'Spices',
    grade: 'Premium Grade',
    image: '/Images-Videos/cinnamon.jpeg',
    description: 'Cassia and true Ceylon cinnamon sticks, naturally dried.',
    specs: [{ label: 'Length', value: 'Custom' }, { label: 'Moisture', value: 'Max 14%' }],
  },
  {
    id: 10,
    name: 'Fennel Seeds',
    category: 'Spices',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/fennal-seeds.webp',
    description: 'Sweet, greenish fennel seeds extensively used for flavoring.',
    specs: [{ label: 'Purity', value: '99%' }, { label: 'Moisture', value: 'Max 10%' }],
  },

  // Herbs
  {
    id: 11,
    name: 'Mint Leaves',
    category: 'Herbs',
    grade: 'Organic Certified',
    image: '/Images-Videos/mint-leaves.jpeg',
    description: 'Freshly dried mint leaves with strong menthol aroma.',
    specs: [{ label: 'Type', value: 'Dried' }, { label: 'Moisture', value: 'Max 8%' }],
  },
  {
    id: 12,
    name: 'Basil Leaves',
    category: 'Herbs',
    grade: 'Organic Certified',
    image: '/Images-Videos/basil-leaves.jpg',
    description: 'Aromatic, shade-dried holy basil (Tulsi) and sweet basil leaves.',
    specs: [{ label: 'Type', value: 'Dried' }, { label: 'Purity', value: '99%' }],
  },
  {
    id: 13,
    name: 'Curry Leaves',
    category: 'Herbs',
    grade: 'Premium Grade',
    image: '/Images-Videos/curry-leaves.jpeg',
    description: 'Authentic Indian curry leaves, dehydrated retaining natural green color.',
    specs: [{ label: 'Form', value: 'Whole Leaves' }, { label: 'Color', value: 'Natural Green' }],
  },
  {
    id: 14,
    name: 'Moringa Leaves',
    category: 'Herbs',
    grade: 'Organic Certified',
    image: '/Images-Videos/moringa-leaes.jpeg',
    description: 'Nutrient-rich dried moringa leaves, ideal for superfood blends.',
    specs: [{ label: 'Type', value: 'Dried / Powder' }, { label: 'Moisture', value: 'Max 8%' }],
  },
  {
    id: 15,
    name: 'Lemongrass',
    category: 'Herbs',
    grade: 'Premium Grade',
    image: '/Images-Videos/lemongrass-leaves.webp',
    description: 'Citrus-flavored dried lemongrass stalks, perfect for teas.',
    specs: [{ label: 'Cut Size', value: 'Tea-bag cut / TBC' }, { label: 'Moisture', value: 'Max 10%' }],
  },
  {
    id: 16,
    name: 'Coriander Leaves',
    category: 'Herbs',
    grade: 'Premium Grade',
    image: '/Images-Videos/coriander-leaves.jpeg',
    description: 'Dehydrated coriander (cilantro) leaves retaining fresh flavor.',
    specs: [{ label: 'Form', value: 'Flakes' }, { label: 'Color', value: 'Bright Green' }],
  },
  {
    id: 17,
    name: 'Neem Leaves',
    category: 'Herbs',
    grade: 'Organic Certified',
    image: '/Images-Videos/neem-leaves.jpg',
    description: 'Sun-dried neem leaves known for their therapeutic properties.',
    specs: [{ label: 'Purity', value: '99%' }, { label: 'Moisture', value: 'Max 10%' }],
  },
  {
    id: 18,
    name: 'Ashwagandha Root',
    category: 'Herbs',
    grade: 'Organic Certified',
    image: '/Images-Videos/ashwaganda-roots.jpg',
    description: 'Potent, carefully harvested Indian ginseng roots.',
    specs: [{ label: 'Form', value: 'Whole / Powder' }, { label: 'Active', value: 'High Withanolides' }],
  },

  // Agricultural Products
  {
    id: 19,
    name: 'Basmati Rice',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/basmathi-rice.jpeg',
    description: 'Extra long-grain, aromatic, and aged for superior cooking quality.',
    specs: [{ label: 'Moisture', value: 'Max 14%' }, { label: 'Broken', value: '< 2%' }],
  },
  {
    id: 20,
    name: 'Non-Basmati Rice',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/non-bsmati-rice.jpg',
    description: 'High-quality Indian white and parboiled non-basmati rice.',
    specs: [{ label: 'Moisture', value: 'Max 14%' }, { label: 'Broken', value: '< 5%' }],
  },
  {
    id: 21,
    name: 'Sesame Seeds',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/sesame-seeds.jpg',
    description: 'Hulled and natural white/black sesame seeds, mechanically cleaned.',
    specs: [{ label: 'Purity', value: '99.9%' }, { label: 'Oil Content', value: 'Min 48%' }],
  },
  {
    id: 22,
    name: 'Groundnuts',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/Groundnut,_seeds.jpg',
    description: 'HPS Bold and Java varieties. High oil content and consistent size.',
    specs: [{ label: 'Count/Oz', value: '40/50, 50/60' }, { label: 'Aflatoxin', value: '< 4 PPB' }],
  },
  {
    id: 23,
    name: 'Maize Corn',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/Yellow-Maize.jpg',
    description: 'High-energy yellow maize. Mechanically cleaned and low moisture content.',
    specs: [{ label: 'Moisture', value: 'Max 14%' }, { label: 'Protein', value: '8% - 9%' }],
  },
  {
    id: 24,
    name: 'Wheat',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/wheat.jpeg',
    description: 'Milling grade Indian wheat kernels, sorted for optimum quality.',
    specs: [{ label: 'Protein', value: 'Min 11%' }, { label: 'Moisture', value: 'Max 12%' }],
  },
  {
    id: 25,
    name: 'Red Onion',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/red0onin.jpg',
    description: 'Premium Nasik Red variety. Optimized for long-distance transit.',
    specs: [{ label: 'Size', value: '45mm - 60mm+' }, { label: 'Origin', value: 'Maharashtra' }],
  },
  {
    id: 26,
    name: 'Garlic',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/garlic.jpg',
    description: 'Fresh Indian garlic bulbs with strong flavor and aroma.',
    specs: [{ label: 'Size', value: '40mm+' }, { label: 'Color', value: 'White / Purple' }],
  },
  {
    id: 27,
    name: 'Tea Leaves',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/tea-leaves.jpg',
    description: 'Premium Assam and Darjeeling black and green tea leaves.',
    specs: [{ label: 'Type', value: 'CTC / Orthodox' }, { label: 'Grade', value: 'BOP / TGFOP' }],
  },
  {
    id: 28,
    name: 'Coffee Beans',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/cofee-beans.jpeg',
    description: 'High-quality Indian Arabica and Robusta green coffee beans.',
    specs: [{ label: 'Grade', value: 'AA / AB' }, { label: 'Moisture', value: 'Max 11%' }],
  },
  {
    id: 29,
    name: 'Sugar',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/sugar.png',
    description: 'Indian Cane Sugar S30/M30. International standard ICUMSA 45-150.',
    specs: [{ label: 'ICUMSA', value: 'Under 100' }, { label: 'Purity', value: '99.8% Min' }],
  },
  {
    id: 30,
    name: 'Coconut Fiber',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/Coconut-Fibre.webp',
    description: 'Bale-packaged long fiber. Ideal for upholstery and erosion control applications.',
    specs: [{ label: 'Length', value: '5cm - 15cm' }, { label: 'Impurity', value: '< 3%' }],
  },
  {
    id: 31,
    name: 'Yellow Maize / Rice',
    category: 'Agricultural Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/Yellow-Maize-01.webp',
    description: 'High-quality yellow maize and rice blend, optimized for export and feed applications.',
    specs: [{ label: 'Moisture', value: 'Max 14%' }, { label: 'Purity', value: '99%' }],
  },
  {
    id: 32,
    name: 'Coir Fibre',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-fiber.jpg',
    images: ['/Images-Videos/coir-fiber.jpg'],
    description: 'Bale-packaged long natural coir fibre extracted from coconut husks.',
    specs: [{ label: 'Length', value: '5cm - 15cm' }, { label: 'Impurity', value: '< 3%' }],
  },
  {
    id: 33,
    name: 'Coconut',
    category: 'Agricultural Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coconut.jpg',
    description: 'Fresh, semi-husked mature coconuts with thick meat and sweet water.',
    specs: [{ label: 'Weight', value: '500g - 600g+' }, { label: 'Type', value: 'Semi-husked' }],
  },
  // Coir products
  {
    id: 34,
    name: 'Coco Peat',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coco-peat.jpeg',
    description: '100% natural, eco-friendly coco peat for excellent water retention and aeration.',
    specs: [{ label: 'EC', value: '< 0.5 mS/cm' }, { label: 'pH', value: '5.5 - 6.8' }],
  },
  {
    id: 35,
    name: 'Coir Rope',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-rope.webp',
    description: 'Durable and strong natural coir rope, ideal for tying and agriculture.',
    specs: [{ label: 'Thickness', value: 'Various' }, { label: 'Material', value: '100% Coir' }],
  },
  {
    id: 36,
    name: 'Coir Twine',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-twine.webp',
    description: 'Spun coir twine used in hop cultivation and general tying purposes.',
    specs: [{ label: 'Load Capacity', value: 'High' }, { label: 'Biodegradable', value: 'Yes' }],
  },
  {
    id: 37,
    name: 'Coir Mats',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-mats.jpg',
    description: 'Natural coir mats for effectively trapping dirt and moisture.',
    specs: [{ label: 'Size', value: 'Customizable' }, { label: 'Backing', value: 'PVC / Natural' }],
  },
  {
    id: 38,
    name: 'Coir Doormats',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-mat.jpeg',
    description: 'Welcome doormats made from tough coir bristles.',
    specs: [{ label: 'Design', value: 'Printed / Plain' }, { label: 'Durability', value: 'High' }],
  },
  {
    id: 39,
    name: 'Coir Rugs',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-rugs.jpg',
    description: 'Aesthetically pleasing and rugged coir rugs for indoor and outdoor use.',
    specs: [{ label: 'Weave', value: 'Boucle / Herringbone' }, { label: 'Eco-friendly', value: 'Yes' }],
  },
  {
    id: 40,
    name: 'Coir Geotextiles',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-geotextiles.webp',
    description: 'Coir netting used for soil erosion control and landscaping.',
    specs: [{ label: 'Weight', value: '400 - 900 GSM' }, { label: 'Mesh', value: 'Various' }],
  },
  {
    id: 41,
    name: 'Coir Nets',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-nets.jpeg',
    description: 'Woven coir nets for slope stabilization and vegetation support.',
    specs: [{ label: 'Life Span', value: '3-5 Years' }, { label: 'Tensile Strength', value: 'High' }],
  },
  {
    id: 42,
    name: 'Coir Grow Bags',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-grow-bags.jpeg',
    description: 'UV-treated grow bags filled with coco peat for greenhouse farming.',
    specs: [{ label: 'Blend', value: 'Peat / Chips Mix' }, { label: 'Size', value: 'Custom' }],
  },
  {
    id: 43,
    name: 'Coir Pots',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-pots.jpg',
    description: 'Biodegradable pots that allow roots to grow through the walls.',
    specs: [{ label: 'Sizes', value: '5cm - 30cm' }, { label: 'Benefit', value: 'No Transplant Shock' }],
  },
  {
    id: 44,
    name: 'Coir Planter Baskets',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-planter-baskets.jpeg',
    description: 'Wire baskets lined with moulded coir for hanging plants.',
    specs: [{ label: 'Shape', value: 'Round / Trough' }, { label: 'Drainage', value: 'Excellent' }],
  },
  {
    id: 45,
    name: 'Coir Discs',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-discs.jpeg',
    description: 'Compressed coco peat discs that expand when watered.',
    specs: [{ label: 'Diameter', value: '30mm - 100mm' }, { label: 'Expansion', value: 'Quick' }],
  },
  {
    id: 46,
    name: 'Coir Briquettes',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-briquette.webp',
    description: 'Compact 650g briquettes of coco peat for retail and home gardening.',
    specs: [{ label: 'Weight', value: '650g' }, { label: 'Yield', value: '8-9 Liters' }],
  },
  {
    id: 47,
    name: 'Coir Blocks',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coco-peat.jpeg',
    description: '5kg compressed coco peat blocks for commercial growers.',
    specs: [{ label: 'Weight', value: '5kg' }, { label: 'Yield', value: '70-75 Liters' }],
  },
  {
    id: 48,
    name: 'Husk Chips',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/husk-chips.jpeg',
    description: 'Cut coconut husks providing excellent aeration for orchids and anthuriums.',
    specs: [{ label: 'Size', value: 'Small / Medium / Large' }, { label: 'EC', value: 'Low' }],
  },
  {
    id: 49,
    name: 'Coir Brooms',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-brooms.jpg',
    description: 'Sturdy brooms made from stiff coir bristle fiber.',
    specs: [{ label: 'Use', value: 'Outdoor / Rough Surfaces' }, { label: 'Durability', value: 'High' }],
  },
  {
    id: 50,
    name: 'Coir Brushes',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-brushes.jpeg',
    description: 'Cleaning brushes with natural coir bristles.',
    specs: [{ label: 'Type', value: 'Scrub / Toilet' }, { label: 'Eco-friendly', value: '100%' }],
  },
  {
    id: 51,
    name: 'Rubberized Coir Mattress',
    category: 'Coir Products',
    grade: 'Premium Grade',
    image: '/Images-Videos/coir-mattress.webp',
    description: 'Mattresses made of coir fiber infused with natural latex.',
    specs: [{ label: 'Firmness', value: 'High' }, { label: 'Breathability', value: 'Excellent' }],
  },
  {
    id: 52,
    name: 'Coconut Fiber Bales',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.37 PM.jpeg',
    description: 'Baled coconut fiber for mattress and upholstery industries.',
    specs: [{ label: 'Weight', value: '100kg - 150kg' }, { label: 'Moisture', value: 'Max 15%' }],
  },
  {
    id: 53,
    name: 'Coir Pith Block',
    category: 'Coir Products',
    grade: 'Export Quality (A)',
    image: '/Images-Videos/coir-pitch.jpg',
    description: 'Washed and compressed coir pith blocks for agriculture.',
    specs: [{ label: 'Weight', value: '5kg' }, { label: 'Expansion Volume', value: '75 L' }],
  }
];

const categoryCounts = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const categories = [
  { name: 'All Products', count: products.length },
  ...Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
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
                    {/* @ts-ignore */}
                    {product.images && product.images.length > 1 ? (
                      <div 
                        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory transition-transform duration-500 group-hover:scale-105"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {/* @ts-ignore */}
                        {product.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${product.name} ${i + 1}`}
                            className="w-full h-full object-cover flex-shrink-0 snap-center"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={product.image}
                      />
                    )}
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
