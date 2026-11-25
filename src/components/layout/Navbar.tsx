import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { NAV_ITEMS, TEACHER_DATA } from '../../constants/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sageGreen/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className="group flex items-center space-x-3 text-darkGreen focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-cream-100 group-hover:border-darkGreen transition-colors duration-300">
              <Compass className="w-5 h-5 text-gold-dark group-hover:text-darkGreen transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-darkGreen group-hover:text-darkGreen-light transition-colors">
                {TEACHER_DATA.name}
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-sageGreen-dark font-medium">
                İlköğretim Matematik Öğretmeni
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-darkGreen font-semibold bg-sageGreen/15 border-b-2 border-gold'
                      : 'text-darkGreen/80 hover:text-darkGreen hover:bg-sageGreen/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Menüyü aç/kapat"
              className="p-2 rounded-lg text-darkGreen hover:bg-sageGreen/10 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-sageGreen/20 bg-cream-50 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-darkGreen font-semibold bg-sageGreen/20 border-l-4 border-gold'
                    : 'text-darkGreen/80 hover:text-darkGreen hover:bg-sageGreen/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
