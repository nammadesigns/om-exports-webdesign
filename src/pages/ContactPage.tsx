import React from 'react';

export function ContactPage() {
  return (
    <div className="bg-surface grainy-bg text-on-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-xl text-display-xl md:text-display-xl text-headline-lg-mobile text-primary mb-4">Connect with our Global Trade Desk</h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 font-body-rt text-body-rt text-on-surface-variant max-w-2xl mx-auto">
            Bridging Indian agricultural excellence with international demand. Our experts are ready to facilitate your next high-volume procurement.
          </p>
        </div>
      </section>

      {/* Two-Column Content */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Form */}
          <div className="glass-panel p-10 rounded-xl custom-shadow bg-white/80 backdrop-blur-xl border border-outline-variant/20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Get a Custom Quote</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector('button');
              if (btn) {
                const originalText = btn.innerText;
                btn.innerText = 'Sending Inquiry...';
                btn.disabled = true;
                btn.classList.add('opacity-50');
                
                setTimeout(() => {
                  btn.innerText = 'Request Sent Successfully';
                  btn.classList.remove('bg-primary');
                  btn.classList.add('bg-green-600');
                  
                  setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'bg-green-600');
                    btn.classList.add('bg-primary');
                    (e.target as HTMLFormElement).reset();
                  }, 3000);
                }, 1500);
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
                  <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="John Doe" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Company Name</label>
                  <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="Global Logistics Inc." type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
                  <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="john@company.com" type="email" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Phone Number</label>
                  <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Product of Interest</label>
                  <select className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt">
                    <option>Dry Red Chilli</option>
                    <option>Ground Nuts</option>
                    <option>Spices & Herbs</option>
                    <option>Grains & Pulses</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Quantity (Metric Tons)</label>
                  <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="e.g. 50" type="number" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Destination Country</label>
                <input className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="e.g. UAE, Netherlands, Japan" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Your Message</label>
                <textarea className="border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 font-body-rt text-body-rt" placeholder="Outline your specific quality requirements or shipping timelines..." rows={4} required></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 font-button-text text-button-text rounded-lg shadow-lg transition-all hover:-translate-y-1 hover:border-b-2 hover:border-secondary-fixed" type="submit">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block">Corporate Headquarters</span>
                <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  Location Details
                </h3>
                <p className="font-body-rt text-body-rt text-on-surface-variant leading-relaxed max-w-sm">
                  2696/A/1940/296/A, Huliyar Road, Nanjaina Kottige, Hiriyur, Chitradurga, Karnataka – 577598, India.
                </p>
              </div>
              <div>
                <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  Direct Correspondence
                </h3>
                <div className="space-y-2">
                  <p className="font-body-rt text-body-rt text-on-surface-variant">Exports: trade@omexports.com</p>
                  <p className="font-body-rt text-body-rt text-on-surface-variant">Inquiries: info@omexports.com</p>
                </div>
              </div>
              <div>
                <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">call</span>
                  Voice Support
                </h3>
                <div className="space-y-2">
                  <p className="font-body-rt text-body-rt text-on-surface-variant">+91 98765 43210 (Main Line)</p>
                  <p className="font-body-rt text-body-rt text-on-surface-variant">+91 80 1234 5678 (Trade Desk)</p>
                </div>
              </div>
              <div>
                <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  Business Hours
                </h3>
                <p className="font-body-rt text-body-rt text-on-surface-variant">
                  Monday – Saturday: 09:00 AM – 07:00 PM (IST)<br/>
                  Sunday: Closed
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30">
                <a className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-md group" href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  <span className="font-button-text">Connect on WhatsApp</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Inquiries Bento Grid */}
      <section className="bg-primary text-on-primary py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary-fixed mb-4">Global Network Points</h2>
            <p className="font-body-rt text-body-rt text-on-primary-container max-w-xl">Dedicated logistics and quality assurance desks for our primary export markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Asia */}
            <div className="p-8 rounded-xl bg-primary-container border border-on-primary-container/10 hover:border-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">language_us</span>
              <h4 className="font-subheading-md text-subheading-md text-white mb-4">Asia Pacific</h4>
              <ul className="space-y-3 font-body-rt text-body-rt text-on-primary-container">
                <li>• Southeast Asia Trade Hub</li>
                <li>• East Asia Quality Controls</li>
                <li>• SAARC Logistics Support</li>
              </ul>
            </div>
            {/* Middle East */}
            <div className="p-8 rounded-xl bg-primary-container border border-on-primary-container/10 hover:border-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">location_city</span>
              <h4 className="font-subheading-md text-subheading-md text-white mb-4">Middle East & GCC</h4>
              <ul className="space-y-3 font-body-rt text-body-rt text-on-primary-container">
                <li>• UAE Distribution Center</li>
                <li>• Saudi Arabia Trade Desk</li>
                <li>• GCC Custom Compliances</li>
              </ul>
            </div>
            {/* Europe */}
            <div className="p-8 rounded-xl bg-primary-container border border-on-primary-container/10 hover:border-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">public</span>
              <h4 className="font-subheading-md text-subheading-md text-white mb-4">European Union</h4>
              <ul className="space-y-3 font-body-rt text-body-rt text-on-primary-container">
                <li>• EU Quality Standards Desk</li>
                <li>• Rotterdam Port Logistics</li>
                <li>• UK & Benelux Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[600px] relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 z-0">
          <iframe allowFullScreen className="w-full h-full border-0" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.90382379435!2d76.608307!3d13.938833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0394747717445%3A0xe54952084f728c7f!2sHiriyur%2C%20Karnataka%20577598!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"></iframe>
        </div>
        <div className="absolute top-10 left-margin-desktop z-10 hidden md:block pointer-events-none">
          <div className="glass-panel p-6 rounded-lg shadow-xl max-w-xs bg-white/90 backdrop-blur-md">
            <h5 className="font-subheading-md text-primary mb-2">Facility Access</h5>
            <p className="font-body-rt text-body-rt text-on-surface-variant">Located strategically near major highways for rapid logistics deployment from the heart of Karnataka's agricultural belt.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
