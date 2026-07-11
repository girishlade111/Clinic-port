import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Doctors', 'Services', 'Team', 'Contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[88px] transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-header' : 'bg-transparent'
      }`}
    >
      <div className="container-content h-full flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-[28px] font-bold text-text-dark tracking-tight">
          Clinic
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const href = `#${link.toLowerCase()}`;
            return (
              <a
                key={link}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="px-4 py-2 text-[15px] font-medium text-text-body hover:text-primary rounded-lg transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+15591234567" className="flex items-center gap-2 text-[15px] font-medium text-text-dark hover:text-primary transition-colors">
            <Phone size={18} className="text-primary" />
            (555) 123-4567
          </a>
          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="inline-flex items-center px-6 py-3 bg-primary text-white text-[15px] font-semibold rounded-button hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
          >
            Make Appointment
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text-dark"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-border shadow-xl"
        >
          <nav className="container-content py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const href = `#${link.toLowerCase()}`;
              return (
                <a
                  key={link}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="px-4 py-3 text-[15px] font-medium text-text-body hover:text-primary hover:bg-blue-light rounded-xl transition-colors"
                >
                  {link}
                </a>
              );
            })}
            <div className="pt-4 border-t border-border mt-2">
              <a
                href="#appointment"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="block text-center px-6 py-3 bg-primary text-white text-[15px] font-semibold rounded-button hover:bg-primary-dark transition-colors"
              >
                Make Appointment
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
