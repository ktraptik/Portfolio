import React, { useState } from 'react';

const Header = ({ name, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-copy">
          <h1 className="header-name">{name}</h1>
          <p className="header-title"><i className="fas fa-marker"></i> {title}</p>
        </div>
        <button
          type="button"
          className="header-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="header-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          <span>Menu</span>
        </button>
        <nav
          id="header-nav"
          className={`header-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#case-studies" onClick={handleNavClick}>Case Studies</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
