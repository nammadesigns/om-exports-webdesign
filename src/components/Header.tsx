import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClass = (path: string) => {
    const baseClasses = 'font-body-rt text-base font-medium transition-colors duration-300';
    if (isActive(path)) {
      return `${baseClasses} text-secondary border-b-2 border-secondary pb-1`;
    }
    return `${baseClasses} text-on-surface hover:text-secondary`;
  };

  const getMobileLinkClass = (path: string) => {
    const baseClasses = 'block font-body-rt text-base font-medium py-4 px-6 border-b border-outline-variant/20 transition-colors duration-300';
    if (isActive(path)) {
      return `${baseClasses} text-secondary bg-surface-container-low`;
    }
    return `${baseClasses} text-on-surface hover:text-secondary hover:bg-surface-container-low`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/Images-Videos/OM-Export_Logo_T.png" alt="OM Exports Logo" className="h-16 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-gutter">
          <Link to="/products" className={getLinkClass('/products')}>Products</Link>
          <Link to="/markets" className={getLinkClass('/markets')}>Markets</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="hidden lg:block font-button-text text-button-text text-on-surface-variant hover:text-primary">
            EN/IN
          </button>
          <button className="bg-primary text-on-primary px-6 py-3 font-button-text text-button-text hover:scale-95 duration-200 ease-in-out">
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-on-surface p-2 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface shadow-xl border-b border-outline-variant/20 flex flex-col">
          <Link to="/products" className={getMobileLinkClass('/products')} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/markets" className={getMobileLinkClass('/markets')} onClick={() => setIsMobileMenuOpen(false)}>Markets</Link>
          <Link to="/services" className={getMobileLinkClass('/services')} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/about" className={getMobileLinkClass('/about')} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className={getMobileLinkClass('/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <div className="p-6">
            <button className="w-full bg-primary text-on-primary px-6 py-3 font-button-text text-button-text hover:scale-95 duration-200 ease-in-out text-center">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
