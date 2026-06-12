import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter) => {
              const targetStr = (counter as HTMLElement).dataset.target;
              const target = targetStr ? +targetStr : 0;
              const speed = 200;
              const inc = target / speed;

              const updateCount = () => {
                const curText = (counter as HTMLElement).innerText.replace('+', '') || '0';
                const cur = +curText;
                if (cur < target) {
                  (counter as HTMLElement).innerText = String(Math.ceil(cur + inc));
                  setTimeout(updateCount, 10);
                } else {
                  (counter as HTMLElement).innerText = target + '+';
                }
              };
              updateCount();
            });
            counterObserver.unobserve(entry.target);
          }
        });
      }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      counterObserver.observe(statsSection);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="bg-surface grainy-bg text-on-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/Images-Videos/hero-img.png"
            alt="Cargo container ship on ocean"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <div className="max-w-3xl">
            <h1 className="font-display-xl text-display-xl mb-6 text-shadow-sm leading-tight">
              Exporting Premium Indian Agricultural Products <span className="text-gold-accent">Worldwide</span>
            </h1>
            <p className="font-body-rt text-lg mb-10 opacity-90 max-w-xl leading-relaxed">
              Bridging the gap between Indian farmers and global markets with enterprise-level logistics and uncompromised quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold-accent text-primary px-8 py-4 font-button-text rounded shadow-xl hover:bg-white transition-all transform hover:-translate-y-1">
                Request Quote
              </button>
              <Link to="/products" className="border border-white/50 backdrop-blur-md text-white px-8 py-4 font-button-text rounded hover:bg-white/10 transition-all">
                Explore Products
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Company Overview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-accent"></div>
            <img
              className="w-full h-[500px] object-cover rounded shadow-2xl"
              src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.08 PM (1).jpeg"
              alt="Indian spices arrangement"
            />
          </div>
          <div className="md:pl-12">
            <span className="text-gold-accent font-label-sm uppercase tracking-widest block mb-4">Our Heritage</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Redefining the Standard of Quality</h2>
            <p className="text-on-surface-variant font-body-rt leading-relaxed mb-8">
              Since our inception, OM EXPORTS has been at the forefront of the agricultural export industry. We combine decades of traditional sourcing expertise with modern supply chain technology to ensure that the essence of Indian soil reaches dinner tables around the world.
            </p>
            <div className="flex items-center gap-4 text-primary font-subheading-md">
              <div className="h-[1px] w-12 bg-gold-accent"></div>
              <span>Global Reliability, Artisanal Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="stats-section bg-primary py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display-xl text-4xl text-secondary-fixed mb-2 counter" data-target="50">0</div>
            <div className="text-on-primary-container font-label-sm uppercase">Countries Served</div>
          </div>
          <div>
            <div className="font-display-xl text-4xl text-secondary-fixed mb-2 counter" data-target="15">0</div>
            <div className="text-on-primary-container font-label-sm uppercase">Products Exported</div>
          </div>
          <div>
            <div className="font-display-xl text-4xl text-secondary-fixed mb-2 counter" data-target="25">0</div>
            <div className="text-on-primary-container font-label-sm uppercase">Years Experience</div>
          </div>
          <div>
            <div className="font-display-xl text-4xl text-secondary-fixed mb-2 counter" data-target="500">0</div>
            <div className="text-on-primary-container font-label-sm uppercase">Global Clients</div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Premium Product Showcase</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-gutter reveal">
          {/* Product 1 */}
          <div className="group relative bg-white border border-outline-variant/30 rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.46 PM.jpeg"
                alt="Dry Red Chilli"
              />
            </div>
            <div className="p-6">
              <h3 className="font-subheading-md text-primary mb-2">Dry Red Chilli</h3>
              <p className="text-on-surface-variant text-sm mb-4">Guntur Variety, High Pungency</p>
              <button className="text-gold-accent font-button-text flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative bg-white border border-outline-variant/30 rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.06 PM.jpeg"
                alt="Fresh Onion"
              />
            </div>
            <div className="p-6">
              <h3 className="font-subheading-md text-primary mb-2">Fresh Onion</h3>
              <p className="text-on-surface-variant text-sm mb-4">Nashik Pink & Red Onions</p>
              <button className="text-gold-accent font-button-text flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative bg-white border border-outline-variant/30 rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/Images-Videos/Groundnut,_seeds.jpg"
                alt="Ground Nuts"
              />
            </div>
            <div className="p-6">
              <h3 className="font-subheading-md text-primary mb-2">Ground Nuts</h3>
              <p className="text-on-surface-variant text-sm mb-4">Hand Picked Selection (HPS)</p>
              <button className="text-gold-accent font-button-text flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group relative bg-white border border-outline-variant/30 rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/Images-Videos/sugar.png"
                alt="Sugar"
              />
            </div>
            <div className="p-6">
              <h3 className="font-subheading-md text-primary mb-2">Sugar</h3>
              <p className="text-on-surface-variant text-sm mb-4">S30 & M30 Grade Refined</p>
              <button className="text-gold-accent font-button-text flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-primary-container py-section-gap relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 grid lg:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="text-gold-accent font-label-sm uppercase tracking-widest block mb-4">Our Reach</span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Connecting India to the World</h2>
            <p className="text-on-primary-container font-body-rt leading-relaxed mb-8">
              Our logistics network operates with surgical precision, ensuring timely delivery to key international hubs. From the spice markets of India to the retail shelves of Vietnam and South Africa, we manage the entire journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-gold-accent">location_on</span>
                <span>Mumbai Port Hub</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-gold-accent">location_on</span>
                <span>Chennai Integrated Logistics</span>
              </div>
            </div>
          </div>

          <div className="map-container relative h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <span className="material-symbols-outlined text-[200px] text-on-primary-container">public</span>
            </div>
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 800 400">
              <path className="shipping-line" d="M200 150 Q 300 100 450 180" stroke="#D9A441" strokeLinecap="round" strokeWidth="2"></path>
              <path className="shipping-line" d="M200 150 Q 150 250 100 300" stroke="#D9A441" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: '1s' }}></path>
              <path className="shipping-line" d="M200 150 Q 400 300 550 350" stroke="#D9A441" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: '2s' }}></path>
              <circle cx="200" cy="150" fill="#D9A441" r="5"></circle>
              <circle cx="450" cy="180" fill="white" r="3"></circle>
              <circle cx="100" cy="300" fill="white" r="3"></circle>
              <circle cx="550" cy="350" fill="white" r="3"></circle>
            </svg>
          </div>
        </div>

        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-fixed/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Commitment to Excellence</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-y-12 gap-x-gutter">
          {[
            { icon: 'verified', title: 'Quality Assurance', desc: 'Multi-stage testing and international certifications for every batch.' },
            { icon: 'local_shipping', title: 'Global Logistics', desc: 'Seamless door-to-port delivery using our trusted logistics partners.' },
            { icon: 'payments', title: 'Competitive Pricing', desc: 'Direct sourcing allows us to offer the best rates in the industry.' },
            { icon: 'inventory_2', title: 'Reliable Supply', desc: 'Stable inventory levels to support high-volume recurring orders.' },
            { icon: 'package_2', title: 'Custom Packaging', desc: 'Tailored packaging solutions to meet specific market regulations.' },
            { icon: 'schedule', title: 'Timely Delivery', desc: 'Optimized routes ensure your goods arrive exactly when needed.' },
          ].map((feature, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="w-14 h-14 shrink-0 rounded bg-surface-container flex items-center justify-center text-primary group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="font-subheading-md text-primary mb-2">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Process */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg text-primary text-center">Our Export Process</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block -translate-y-1/2"></div>

            {[
              { num: 1, title: 'Ethical Sourcing', desc: 'Procured directly from audited farms across India.' },
              { num: 2, title: 'Quality Check', desc: 'Rigorous laboratory testing and cleaning processes.' },
              { num: 3, title: 'Premium Packing', desc: 'Secure, moisture-resistant industrial packaging.' },
              { num: 4, title: 'Global Shipping', desc: 'Fast transit with real-time tracking updates.' },
            ].map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                <div className={`w-16 h-16 rounded-full ${step.num === 1 || step.num === 4 ? 'bg-primary text-white' : 'bg-white border-2 border-primary text-primary'} flex items-center justify-center font-bold mb-4 shadow-lg`}>
                  {step.num}
                </div>
                <h4 className="font-subheading-md text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div className="reveal">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">What Our Partners Say</h2>
            <div className="relative p-12 bg-white rounded-xl shadow-2xl border border-outline-variant/20">
              <span className="material-symbols-outlined text-6xl text-gold-accent/20 absolute top-4 left-4">format_quote</span>
              <p className="font-body-rt text-xl italic text-on-surface-variant leading-relaxed mb-8 relative z-10">
                "OM EXPORTS has been our primary supplier for over 5 years. Their consistency in quality and logistical transparency is unmatched in the Indian market."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnRfeJWne6G8U3NaLTYNX6aTCq0Vs-woJK-v5TMAmHJ7jZZz_Ptdwx2clpPQugCavQy-9O8bV5qR9fCp86-qMrKA8pVIn3pFIyPF0zcpelNHCgk34wprJpRPnhM8smk27BusYsBAm1bfJUorldgugP7ZL_EyceSS3zFhDmRzwp1TZaMdH3IdxK4jWBycq3SKVBKCfU1zU4ApVNseASxxhXhvJUeerfdDo07uB0yT05m-ipDHFXTlm3naeRVtA0ubGX4FUqA6zP7g"
                  alt="James Anderson"
                />
                <div>
                  <div className="font-subheading-md text-primary">James Anderson</div>
                  <div className="text-sm text-on-surface-variant">Director, Global Food Hub (UK)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 reveal" style={{ transitionDelay: '200ms' }}>
            {['ECO-GRAIN', 'V-TRADE', 'AGRO-LINK', 'SOLARIS'].map((name, index) => (
              <div key={index} className="h-32 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer bg-surface-container rounded-lg">
                <span className="font-bold text-xl tracking-widest">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Inquiry Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.09 PM.jpeg"
            alt="Shipping container terminal"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-xl text-4xl md:text-5xl text-white mb-8">Ready to Scale Your Sourcing?</h2>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto mb-12">
            Connect with our trade experts today to discuss custom requirements, bulk pricing, and international logistics solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-gold-accent text-primary px-10 py-5 font-button-text rounded-lg hover:scale-105 transition-all shadow-2xl">
              Get a Custom Quote
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 font-button-text rounded-lg hover:bg-white/20 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
