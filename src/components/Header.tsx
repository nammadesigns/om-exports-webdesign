import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClass = (path: string) => {
    const baseClasses = 'font-body-rt text-base font-medium transition-colors duration-300 relative';
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
          <button onClick={() => handleNavClick('/products')} className={getLinkClass('/products')}>Products</button>
          <button onClick={() => handleNavClick('/markets')} className={getLinkClass('/markets')}>Markets</button>
          <button onClick={() => handleNavClick('/services')} className={getLinkClass('/services')}>Services</button>
          <button onClick={() => handleNavClick('/about')} className={getLinkClass('/about')}>About Us</button>
          <button onClick={() => handleNavClick('/contact')} className={getLinkClass('/contact')}>Contact Us</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="hidden lg:block font-button-text text-button-text text-on-surface-variant hover:text-primary">
            EN/IN
          </button>
          <Link to="/contact" className="bg-primary text-on-primary px-6 py-3 font-button-text text-button-text hover:scale-95 duration-200 ease-in-out inline-block">
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-on-surface p-2 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="material-symbols-outlined text-3xl" style={{ transition: 'transform 0.3s ease' }}>
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown — animated */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: isMobileMenuOpen ? '500px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          opacity: isMobileMenuOpen ? 1 : 0,
          transitionProperty: 'max-height, opacity',
          transitionDuration: '0.4s, 0.3s',
        }}
      >
        <div className="absolute top-20 left-0 w-full bg-surface shadow-xl border-b border-outline-variant/20 flex flex-col">
          <button onClick={() => handleNavClick('/products')} className={getMobileLinkClass('/products')}>Products</button>
          <button onClick={() => handleNavClick('/markets')} className={getMobileLinkClass('/markets')}>Markets</button>
          <button onClick={() => handleNavClick('/services')} className={getMobileLinkClass('/services')}>Services</button>
          <button onClick={() => handleNavClick('/about')} className={getMobileLinkClass('/about')}>About Us</button>
          <button onClick={() => handleNavClick('/contact')} className={getMobileLinkClass('/contact')}>Contact Us</button>
          <div className="p-6">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-primary text-on-primary px-6 py-3 font-button-text text-button-text hover:scale-95 duration-200 ease-in-out text-center block">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
