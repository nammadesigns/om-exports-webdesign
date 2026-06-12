import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  useEffect(() => {
    // Scroll reveal and other effects could be added here
    return () => {};
  }, []);

  return (
    <div className="bg-surface grainy-bg text-on-surface font-body-rt">
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <nav className="flex gap-2 mb-8 items-center font-label-sm text-label-sm text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-primary-container">Company</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="font-display-xl text-display-xl md:text-display-xl text-primary mb-6">
              Redefining Agricultural Exports
            </h1>
            <p className="font-subheading-md text-subheading-md text-on-surface-variant max-w-2xl">
              Bridging traditional Indian heritage with world-class logistics precision to deliver the finest agricultural produce to every corner of the globe.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-gutter items-center mb-24">
            <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.39 PM.jpeg"
                alt="Chilli fields in Karnataka"
              />
              <div className="absolute bottom-0 right-0 p-8 bg-surface-bright/90 backdrop-blur-sm max-w-xs">
                <p className="font-label-sm text-label-sm text-secondary mb-2">SINCE 1998</p>
                <p className="font-body-rt text-body-rt font-semibold">Our journey began in the fertile lands of Byadgi, Karnataka.</p>
              </div>
            </div>
            <div className="md:pl-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">From Roots to Global Horizons</h2>
              <div className="space-y-6 text-on-surface-variant font-body-rt">
                <p>OM EXPORTS started with a singular vision: to bring the authentic flavors and high-quality staples of Indian agriculture to international markets without compromise.</p>
                <p>What began as a localized sourcing unit in Karnataka has evolved into a powerhouse of international logistics, quality assurance, and ethical supply chain management. We don't just export products; we export the integrity of the Indian farmer.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="premium-border p-8 ambient-shadow bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">visibility</span>
                  <h3 className="font-subheading-md text-subheading-md mb-2">Our Vision</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">
                    To be the most trusted global bridge for sustainable agricultural trade.
                  </p>
                </div>
                <div className="premium-border p-8 ambient-shadow bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">flag</span>
                  <h3 className="font-subheading-md text-subheading-md mb-2">Our Mission</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">
                    Delivering premium quality, ensuring farmer prosperity, and maintaining logistics excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <section className="bg-primary-container py-section-gap text-on-primary">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 mb-12 md:mb-0">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  className="w-full h-full object-cover"
                  src="/Images-Videos/WhatsApp Image 2026-06-07 at 1.01.24 PM.jpeg"
                  alt="Omkar Nath Sharma"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-8">format_quote</span>
              <blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight italic text-primary-fixed">
                "At OM EXPORTS, we believe that quality is not a standard to be met, but a promise to be kept. Every shipment carries our reputation and the legacy of Indian agriculture."
              </blockquote>
              <div className="mt-8">
                <p className="font-subheading-md text-subheading-md text-on-primary">Omkar Nath Sharma</p>
                <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-widest mb-4">
                  Founder & Managing Director
                </p>
                <div className="w-48 h-12 flex items-center">
                  <svg className="w-full h-full text-secondary-fixed fill-current opacity-80" viewBox="0 0 200 60">
                    <path d="M10,40 Q30,10 50,40 T90,40 Q110,10 130,40 T170,40 Q190,10 200,40" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    <path d="M40,30 Q60,50 80,30" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Facilities</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Precision Infrastructure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Warehouse */}
            <div className="md:col-span-2 row-span-2 relative group overflow-hidden">
              <img
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.09 PM.jpeg"
                alt="Smart Warehousing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-2">Smart Warehousing</h4>
                <p className="font-label-sm text-primary-fixed">Climate-controlled 50,000 sq. ft. facility with real-time inventory tracking.</p>
              </div>
            </div>

            {/* Testing Lab */}
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                alt="Testing Lab"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-1">Testing Lab</h4>
                <p className="font-label-sm text-primary-fixed">Certified quality analysis for moisture and purity.</p>
              </div>
            </div>

            {/* Export Packaging */}
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
                alt="Export Packaging"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-1">Export Packaging</h4>
                <p className="font-label-sm text-primary-fixed">Automated nitrogen-flushed packaging units.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="py-section-gap bg-surface-container-low overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Network</span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Integrated Supply Ecosystem</h2>
                <div className="space-y-12">
                  {[
                    { icon: 'agriculture', title: 'Direct Farmer Sourcing', desc: 'We partner with over 5,000 farmers across Karnataka and Maharashtra, ensuring fair trade and heirloom quality.' },
                    { icon: 'verified', title: 'Multi-Stage QC', desc: 'Rigorous testing at farm-gate, warehouse arrival, and pre-loading stages to guarantee 100% purity.' },
                    { icon: 'local_shipping', title: 'Global Transit', desc: 'Strategic alliances with top-tier ocean and air freight carriers for seamless door-to-door delivery.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary-fixed">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-subheading-md mb-2">{item.title}</h4>
                        <p className="text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white ambient-shadow rounded-full flex items-center justify-center p-12">
                  <div className="w-full h-full border-2 border-dashed border-outline-variant rounded-full relative animate-[spin_60s_linear_infinite]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[16px]">public</span>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[16px]">inventory</span>
                    </div>
                  </div>
                  <div className="absolute inset-20 border-2 border-dashed border-outline-variant rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                  <div className="absolute z-10 text-center px-8">
                    <span className="font-display-xl text-subheading-md text-primary font-bold">100% TRACEABLE</span>
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mt-2">Seed to Shelf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Evolution</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">The Growth Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full timeline-line opacity-20 hidden md:block"></div>
            <div className="space-y-24">
              {[
                { year: '1998', title: 'Founding Roots', desc: 'OM EXPORTS established as a domestic trading house for Byadgi chillies in Karnataka.', side: 'left' },
                { year: '2005', title: 'First International Venture', desc: 'Expansion into UAE and Middle Eastern markets with premium spice blends.', side: 'right' },
                { year: '2014', title: 'Infrastructure Leap', desc: 'Inauguration of our flagship 50,000 sq. ft. automated warehouse and testing facility.', side: 'left' },
                { year: '2024', title: 'Global Leadership', desc: 'Recognized as one of India\'s leading exporters to 40+ countries across EU, Americas, and SE Asia.', side: 'right' },
              ].map((event, idx) => (
                <div key={idx} className={`relative flex md:justify-${event.side === 'left' ? 'start' : 'end'} items-center group`}>
                  {event.side === 'left' ? (
                    <>
                      <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
                        <span className="font-display-xl text-headline-lg text-outline-variant group-hover:text-secondary transition-colors duration-500">{event.year}</span>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary z-10 hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-16">
                        <div className="md:hidden font-display-xl text-headline-lg text-secondary mb-2">{event.year}</div>
                        <h4 className="font-subheading-md text-subheading-md mb-2">{event.title}</h4>
                        <p className="text-on-surface-variant">{event.desc}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-16 md:text-right">
                        <div className="md:hidden font-display-xl text-headline-lg text-secondary mb-2">{event.year}</div>
                        <h4 className="font-subheading-md text-subheading-md mb-2">{event.title}</h4>
                        <p className="text-on-surface-variant">{event.desc}</p>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary z-10 hidden md:block"></div>
                      <div className="md:w-1/2 md:pl-16 hidden md:block">
                        <span className="font-display-xl text-headline-lg text-outline-variant group-hover:text-secondary transition-colors duration-500">{event.year}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/20">
          <h2 className="font-display-xl text-headline-lg mb-8">Ready to Partner for Premium Quality?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary text-on-primary px-12 py-5 font-button-text text-button-text hover:shadow-xl transition-all duration-300">
              Get in Touch
            </button>
            <button className="border border-primary text-primary px-12 py-5 font-button-text text-button-text hover:bg-primary hover:text-white transition-all duration-300">
              Download Corporate Brochure
            </button>
          </div>
        </section>
      </main>


    </div>
  );
}
