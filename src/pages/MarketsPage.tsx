import { useEffect } from 'react';

export function MarketsPage() {
  useEffect(() => {
    // Micro-interactions for map markers
    const markers = document.querySelectorAll('.animate-pulse-gold');
    markers.forEach((marker) => {
      const el = marker as HTMLElement;
      marker.addEventListener('mouseenter', () => {
        el.classList.remove('animate-pulse-gold');
        el.classList.add('scale-150');
      });
      marker.addEventListener('mouseleave', () => {
        el.classList.add('animate-pulse-gold');
        el.classList.remove('scale-150');
      });
    });
  }, []);

  return (
    <div className="bg-background text-on-surface grain-texture font-body-rt overflow-x-hidden">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden bg-primary-container">
          <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <span className="inline-block text-secondary-fixed font-label-sm tracking-widest uppercase">
                Global Distribution
              </span>
              <h1 className="font-display-xl text-display-xl text-primary-fixed leading-none">
                Feeding the World from India
              </h1>
              <p className="text-on-primary-container text-subheading-md max-w-md">
                Bridging Indian agricultural excellence with international demand through high-stakes precision logistics and artisanal care.
              </p>
              <div className="flex gap-4">
                <a className="bg-secondary-container text-on-secondary-container px-8 py-4 font-button-text transition-transform hover:scale-105" href="#interactive-map">
                  Explore Markets
                </a>
                <a className="border border-outline-variant text-on-primary px-8 py-4 font-button-text hover:bg-white/10 transition-colors" href="#logistics">
                  Logistics Network
                </a>
              </div>
            </div>
            <div className="hidden md:block relative h-[600px]">
              <img
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBeiIKOCfhCAJGUP6Olq0gx3s7E0tzQqJE_EkRPQ1RenFvBJGY0W9PtORDOGGrUztesbdP2me6kkvkk2FGaywRu5JgXwh9H7YjDJV91bp_Acx880sQioRg9mUfj-dE_0ZuIR3hp5CPUHL6TpcFWhrdg_8Rvb1UORGXPOGFr3b5v6-owjJbdA39l6_cuMkJUWxhBUWhUTu9IX0Na24X3v2BAKjyxbTlZwf_uamk0x13H8oUnvPGqFSUaBg5zYAg7lMz3C6hEhHy6-o"
                alt="Container ship departing Indian port at golden hour"
              />
            </div>
          </div>
        </section>

        {/* Interactive Map Section (Dark Theme) */}
        <section className="py-section-gap map-container relative overflow-hidden" id="interactive-map">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-display-xl text-headline-lg text-primary-fixed">Our Global Presence</h2>
              <p className="text-on-primary-container max-w-2xl mx-auto">
                Active supply chains across 12 strategic nations, powered by real-time logistics monitoring.
              </p>
            </div>

            {/* Map UI */}
            <div className="relative w-full aspect-[21/9] bg-primary/20 rounded-full border border-white/5 p-4 overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                ></div>
              </div>

              {/* World Map */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  className="w-full h-full object-contain opacity-50 grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-GZ2hfjVsnO3K4nnQbkc2abciX2JTh_MFyaexcot8O-0xo41p8SDjnIhB1yEmryabVULJuuMizvIUvEukRTsfl737cMbVCZ5Oocgiup9K3HbtDq-T03NbEkUw50F2PsqbjHoDq8rRJnvrVSj4jt3AjUSADt-APfbJl_Z1xtSfTtl03-05uWcoaRYOH3BiHPt0yfqJL5W1lu-dVPjScJQGF0NgaVx0b5Wm4PGpk-gKmrL4PMxOUbuCW3IS7MQVzr09CESqMUKM8Ns"
                  alt="World map showing export destinations"
                />

                {/* Pulse Markers */}
                <div className="absolute top-[45%] left-[68%] w-4 h-4 bg-secondary-fixed rounded-full animate-pulse-gold shadow-[0_0_15px_rgba(255,222,170,0.6)]"></div>
                <div className="absolute top-[38%] left-[72%] w-4 h-4 bg-secondary-fixed rounded-full animate-pulse-gold shadow-[0_0_15px_rgba(255,222,170,0.6)]"></div>
                <div className="absolute top-[42%] left-[55%] w-4 h-4 bg-secondary-fixed rounded-full animate-pulse-gold shadow-[0_0_15px_rgba(255,222,170,0.6)]"></div>
                <div className="absolute top-[68%] left-[52%] w-4 h-4 bg-secondary-fixed rounded-full animate-pulse-gold shadow-[0_0_15px_rgba(255,222,170,0.6)]"></div>

                {/* Labels */}
                <div className="absolute top-[47%] left-[69%] text-primary-fixed text-[10px] font-label-sm">SINGAPORE</div>
                <div className="absolute top-[44%] left-[53%] text-primary-fixed text-[10px] font-label-sm">UAE</div>
              </div>

              {/* Market Legend */}
              <div className="absolute bottom-8 left-8 bg-primary-container/80 backdrop-blur-md p-6 border border-white/10 rounded-lg">
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="flex items-center gap-2 text-primary-fixed text-label-sm">
                    <span className="w-2 h-2 bg-secondary-fixed rounded-full"></span> Major Hubs
                  </span>
                  <span className="flex items-center gap-2 text-on-primary-container text-label-sm">
                    <span className="w-2 h-2 border border-secondary-fixed rounded-full"></span> Distribution Centers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Region Cards (Bento Style) */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Asia */}
            <div className="md:col-span-8 group relative overflow-hidden bg-white market-card-shadow border border-outline-variant/30 p-10 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  className="w-full h-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlTmKYnCu5MOsTCraY0dC4h832QCXGGtbj0f-fkMnYpmNSuy8WMc4o9XCmiYNiswrd1Byj21zTkHApKVBeRfoCkO8PulcmLdRvqMnWcEJ0Ba5fZkV6zCawOsp5Gw7YiqnhcMOV8l59YvqCpNWIOXnYyKC4AmmdmchdkR78xIMl3T76xxQlpsod8DSh9vpVRlR4XoFwwYlR-r5Hw96xQ9WqsRjoRivOli_vn9nPYg_AIv92ZFaaZMqzYCahTuKt3DY5KACbAkQpxE"
                  alt="Singapore skyline"
                />
              </div>
              <div className="relative z-10">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 01</span>
                <h3 className="font-display-xl text-headline-lg text-primary mb-4">Asia Pacific</h3>
                <p className="text-on-surface-variant max-w-md mb-8">
                  Our strongest growth corridor, serving the culinary hubs of Singapore, Malaysia, Vietnam, and mainland China with premium spices and grains.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-display-xl text-subheading-md font-bold">14 Days</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">Avg. Lead Time</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-display-xl text-subheading-md font-bold">4 Hubs</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">Direct Distribution</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Singapore', 'Malaysia', 'Vietnam', 'China'].map((country) => (
                  <span key={country} className="bg-surface-container-high px-3 py-1 text-label-sm rounded-full">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle East */}
            <div className="md:col-span-4 bg-primary text-on-primary p-10 market-card-shadow flex flex-col justify-between group">
              <div>
                <span className="text-secondary-fixed font-label-sm tracking-widest uppercase mb-2 block">Region 02</span>
                <h3 className="font-display-xl text-headline-lg leading-tight mb-4">Middle East</h3>
                <p className="text-on-primary-container text-body-rt mb-6">
                  High-volume trade routes supplying UAE, Saudi Arabia, and the Gulf with certified organic produce.
                </p>
              </div>
              <div className="space-y-4">
                {['UAE', 'Saudi Arabia', 'Oman & Qatar'].map((country) => (
                  <div key={country} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-label-sm">{country}</span>
                    <span className="material-symbols-outlined text-secondary-fixed">trending_up</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Africa */}
            <div className="md:col-span-12 bg-surface-container-low p-10 border border-outline-variant/20 flex flex-col md:flex-row gap-gutter items-center">
              <div className="flex-1">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 03</span>
                <h3 className="font-display-xl text-headline-lg text-primary mb-4">Africa & Emerging</h3>
                <p className="text-on-surface-variant max-w-xl">
                  Connecting South Africa and developing markets across the continent to India's vast agricultural heritage. Strategic partnerships in Cape Town and Durban ensure seamless distribution.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">shield_lock</span>
                  <p className="font-bold">SGS Certified</p>
                </div>
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">potted_plant</span>
                  <p className="font-bold">100% Traceable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Network */}
        <section className="py-section-gap bg-surface" id="logistics">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row gap-gutter items-end mb-16">
              <div className="md:w-1/2">
                <h2 className="font-display-xl text-headline-lg text-primary mb-4">Network Logistics</h2>
                <p className="text-on-surface-variant text-subheading-md">
                  Optimized shipping routes from India's premier export gateways: Mumbai (JNPT) and Chennai Ports.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end gap-8">
                <div className="text-right">
                  <p className="text-headline-lg font-bold text-secondary">08</p>
                  <p className="text-label-sm uppercase">Weekly Sailings</p>
                </div>
                <div className="text-right">
                  <p className="text-headline-lg font-bold text-secondary">42</p>
                  <p className="text-label-sm uppercase">Vessel Partners</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Port Route Card - Mumbai */}
              <div className="bg-white p-8 market-card-shadow border border-outline-variant/30 flex gap-6">
                <div className="w-24 h-24 bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">anchor</span>
                </div>
                <div>
                  <h4 className="font-subheading-md text-subheading-md text-primary mb-2">Mumbai (JNPT) Hub</h4>
                  <p className="text-body-rt text-on-surface-variant mb-4">
                    Primary gateway for Middle East and African markets. State-of-the-art cold storage and rapid transit handling.
                  </p>
                  <ul className="space-y-2 text-label-sm font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Jebel Ali: 6 Days
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Jeddah: 9 Days
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Durban: 18 Days
                    </li>
                  </ul>
                </div>
              </div>

              {/* Port Route Card - Chennai */}
              <div className="bg-white p-8 market-card-shadow border border-outline-variant/30 flex gap-6">
                <div className="w-24 h-24 bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">sailing</span>
                </div>
                <div>
                  <h4 className="font-subheading-md text-subheading-md text-primary mb-2">Chennai Port Gateway</h4>
                  <p className="text-body-rt text-on-surface-variant mb-4">
                    Direct express routes serving the ASEAN and East Asian corridors with optimized container cycling.
                  </p>
                  <ul className="space-y-2 text-label-sm font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Singapore: 4 Days
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Port Klang: 5 Days
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Shanghai: 12 Days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-section-gap relative">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZGxwTGI97tqBB8gw-WBDlYHRCvT-DaZu6DP5d4dDMDh5aE2BEg5V-JZGZwd3R0LwIjcRUj6I95PygagYpbXwkOft0eOmroc_j_4qZkI-vP2o_HAwrbAydQ7gQF-3PzlueLeSQ4fWGo2JFgHiYwml5axRXdB4vew6K9eZndLY_ThU6AYF6qustrB0GlYB9thccJZaE2f1O_lu-T3hk_cUz-NF4J88p8QrvgS5tNkgEBmtweBUZcm7urkAISYUQ7BXRg5PJltvdDE"
              alt="Luxury hotel lobby"
            />
          </div>
          <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center">
            <h2 className="font-display-xl text-headline-lg text-primary mb-16">Why We Are Preferred Globally</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { icon: 'workspace_premium', title: 'Quality Standards', desc: 'Stringent multi-level quality checks that exceed international FDA and FSSAI requirements for every batch.' },
                { icon: 'timer', title: 'Just-in-Time Logistics', desc: 'Real-time tracking and strategic warehousing ensure produce arrives at peak freshness, every time.' },
                { icon: 'handshake', title: 'Cultural Expertise', desc: 'Understanding regional specificities—from Middle Eastern spice profiles to Asian grain preferences.' },
              ].map((item, idx) => (
                <div key={idx} className="p-8">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-6">{item.icon}</span>
                  <h4 className="font-subheading-md text-subheading-md text-primary mb-4">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}
