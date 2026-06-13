import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-12 bg-primary text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1">
          <div className="font-display-xl text-subheading-md text-primary-fixed mb-6">OM EXPORTS</div>
          <p className="text-outline-variant font-body-rt text-sm mb-6 leading-relaxed">
            Premium Indian agricultural logistics serving over 50 countries with uncompromised quality standards.
          </p>
        </div>

        <div>
          <h5 className="text-secondary-fixed font-bold mb-6">Quick Links</h5>
          <ul className="space-y-4">
            <li><Link to="/products" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Dry Red Chilli</Link></li>
            <li><Link to="/products" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Ground Nuts</Link></li>
            <li><Link to="/markets" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Export Markets</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-secondary-fixed font-bold mb-6">Resources</h5>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Supply Chain</Link></li>
            <li><Link to="/about" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Certifications</Link></li>
            <li><Link to="/about" className="text-outline-variant hover:text-secondary-fixed transition-all text-sm">Contact Us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h5 className="text-secondary-fixed font-bold mb-6">Contact Us</h5>
          <ul className="space-y-4 text-outline-variant text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span>2696/A/1940/296/A, Huliyar Road, Nanjaina Kottige, Hiriyur, Chitradurga, Karnataka – 577598</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <a href="mailto:Omexports1964@gmail.com" className="hover:text-secondary-fixed transition-colors">Omexports1964@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>+91 98809 32299</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="mt-20 pt-8 border-t border-white/10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center text-outline-variant text-xs flex flex-col items-center gap-2">
        <p>© 2026 OM EXPORTS. Premium Agricultural Logistics. All Rights Reserved.</p>
        <p>Design and developed by <a href="https://www.nammadesigns.site/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">namma designs</a></p>
      </div>
    </footer>
  );
}
