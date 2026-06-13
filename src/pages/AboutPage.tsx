import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';


export function AboutPage() {
  useScrollReveal('[data-reveal]');

  useEffect(() => {
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
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4 animate-fade-in"> · Karnataka, India</span>
            <h1 className="font-display-xl text-display-xl md:text-display-xl text-primary mb-6 animate-slide-up">
              Redefining Agricultural Exports
            </h1>
            <p className="font-subheading-md text-subheading-md text-on-surface-variant max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Bridging traditional Indian heritage with world-class logistics precision to deliver the finest agricultural produce to every corner of the globe.
            </p>
          </div>
        </section>


        {/* Company Story */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-gutter items-center mb-24">
            <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden" data-reveal="fade-right">
              <img
                className="w-full h-full object-cover"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.39 PM.jpeg"
                alt="Chilli fields in Karnataka"
              />
              <div className="absolute bottom-0 right-0 p-8 bg-surface-bright/90 backdrop-blur-sm max-w-xs">
                <p className="font-label-sm text-label-sm text-secondary mb-2"></p>
                <p className="font-body-rt text-body-rt font-semibold">Our journey began in the fertile lands of Byadgi, Karnataka.</p>
              </div>
            </div>
            <div className="md:pl-16" data-reveal="fade-left" style={{ transitionDelay: '150ms' }}>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">From Roots to Global Horizons</h2>
              <div className="space-y-6 text-on-surface-variant font-body-rt">
                <p>OM EXPORTS started with a singular vision: to bring the authentic flavors and high-quality staples of Indian agriculture to international markets without compromise.</p>
                <p>What began as a localized sourcing unit in Karnataka has evolved into a powerhouse of international logistics, quality assurance, and ethical supply chain management. We don't just export products; we export the integrity of the Indian farmer.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12" data-stagger>
                <div className="premium-border p-8 ambient-shadow bg-surface-container-lowest" data-reveal="zoom-in">
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">visibility</span>
                  <h3 className="font-subheading-md text-subheading-md mb-2">Our Vision</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">
                    To be the most trusted global bridge for sustainable agricultural trade.
                  </p>
                </div>
                <div className="premium-border p-8 ambient-shadow bg-surface-container-lowest" data-reveal="zoom-in">
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
            <div className="md:col-span-5 mb-15 md:mb-0">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-white/10 flex items-center justify-center p-8">
                <img
                  className="w-full h-full object-contain"
                  src="/Images-Videos/Logo.png"
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
                <p className="font-subheading-md text-subheading-md text-on-primary"></p>
                <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-widest mb-4">
                  
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
          <div className="text-center mb-16" data-reveal="fade-up">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Facilities</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Precision Infrastructure</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-stagger>
            {/* Main Warehouse */}
            <div className="md:col-span-2 row-span-2 relative group overflow-hidden" data-reveal="fade-right">
              <img
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="/Images-Videos/smart-warehouse.jpeg"
                alt="Smart Warehousing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-2">Smart Warehousing</h4>
                
              </div>
            </div>

            {/* Testing Lab */}
            <div className="relative group overflow-hidden" data-reveal="fade-left">
              <img
                className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.38 PM.jpeg"
                alt="Testing Lab"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-1">Testing </h4>
                
              </div>
            </div>

            {/* Export Packaging */}
            <div className="relative group overflow-hidden" data-reveal="fade-left" style={{ transitionDelay: '150ms' }}>
              <img
                className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.08 PM (1).jpeg"
                alt="Export Packaging"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-1">Export Packaging</h4>
                
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
              <div className="relative flex items-center justify-center">
                <div className="aspect-square w-full max-w-[420px] bg-white ambient-shadow rounded-full flex items-center justify-center relative overflow-hidden">

                  {/* SVG rotating rings — guaranteed perfect circles */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 420 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer dashed ring — slow clockwise */}
                    <circle
                      cx="210" cy="210" r="185"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeDasharray="8 6"
                      style={{ animation: 'spinSvg 60s linear infinite', transformOrigin: '210px 210px' }}
                    />
                    {/* Middle dashed ring — counter-clockwise */}
                    <circle
                      cx="210" cy="210" r="135"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeDasharray="5 8"
                      style={{ animation: 'spinSvg 40s linear infinite reverse', transformOrigin: '210px 210px' }}
                    />
                    {/* Inner gold accent ring */}
                    <circle
                      cx="210" cy="210" r="85"
                      stroke="#D9A441"
                      strokeWidth="1"
                      strokeDasharray="3 10"
                      strokeOpacity="0.5"
                      style={{ animation: 'spinSvg 25s linear infinite', transformOrigin: '210px 210px' }}
                    />

                    {/* Icons riding the outer ring — they counter-rotate to stay upright */}
                    {/* Top: globe */}
                    <g style={{ animation: 'spinSvg 60s linear infinite', transformOrigin: '210px 210px' }}>
                      <circle cx="210" cy="25" r="18" fill="#7D5700" />
                      <text x="210" y="31" textAnchor="middle" fontSize="16" fill="white" fontFamily="Material Symbols Outlined"
                        style={{ animation: 'spinSvg 60s linear infinite reverse', transformOrigin: '210px 25px', fontVariationSettings: "'FILL' 1" }}>
                        public
                      </text>
                    </g>
                    {/* Bottom: inventory */}
                    <g style={{ animation: 'spinSvg 60s linear infinite', transformOrigin: '210px 210px' }}>
                      <circle cx="210" cy="395" r="18" fill="#0B1F3A" />
                      <text x="210" y="401" textAnchor="middle" fontSize="16" fill="white" fontFamily="Material Symbols Outlined"
                        style={{ animation: 'spinSvg 60s linear infinite reverse', transformOrigin: '210px 395px', fontVariationSettings: "'FILL' 1" }}>
                        inventory
                      </text>
                    </g>

                    {/* Middle ring icon — rides middle ring at rightmost point */}
                    <g style={{ animation: 'spinSvg 40s linear infinite reverse', transformOrigin: '210px 210px' }}>
                      <circle cx="345" cy="210" r="16" fill="#D9A441" />
                      <text x="345" y="216" textAnchor="middle" fontSize="14" fill="white" fontFamily="Material Symbols Outlined"
                        style={{ animation: 'spinSvg 40s linear infinite', transformOrigin: '345px 210px', fontVariationSettings: "'FILL' 1" }}>
                        agriculture
                      </text>
                    </g>
                  </svg>

                  {/* Centre label — static */}
                  <div className="relative z-10 text-center">
                    <span className="font-display-xl text-subheading-md text-primary font-bold leading-tight block">
                      100%<br />TRACEABLE
                    </span>
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mt-3">Seed to Shelf</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-24" data-reveal="fade-up">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Evolution</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">The Growth Journey</h2>
          </div>


          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full timeline-line opacity-20 hidden md:block"></div>
            <div className="space-y-24">
              {[
                { year: 'Founded', title: 'Three Decades of Excellence', desc: 'OM EXPORTS established with 30+ years of commitment to quality and trust in agricultural exports.', side: 'left' },
                
                { year: '2026', title: 'Global Leadership', desc: 'Recognized as one of India\'s leading exporters to  countries across EU, Americas, and SE Asia.', side: 'right' },
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
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 font-button-text text-button-text hover:shadow-xl transition-all duration-300 inline-block text-center">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>


    </div>
  );
}
