import React, { useEffect, useRef } from 'react';
import aditya from '../resources/aditya.jpg';
import adp from '../resources/ADP.png';
import disney from '../resources/Disney.webp';
import epam from '../resources/Epam.png';
import meta from '../resources/Meta.jpg';
import pwc from '../resources/pwc.jpg';
import snapchat from '../resources/Snapchat.avif';

const logos = [
  { name: 'ADP', image: adp },
  { name: 'Disney', image: disney },
  { name: 'EPAM', image: epam },
  { name: 'Meta', image: meta },
  { name: 'PwC', image: pwc },
  { name: 'Snapchat', image: snapchat },
  { name: 'Aditya', image: aditya }
];

const LogoShowcase = () => {
  const logoGridRef = useRef(null);
  const loopedLogos = [...logos, ...logos];

  const scrollLogos = (direction) => {
    if (!logoGridRef.current) {
      return;
    }

    const scrollAmount = logoGridRef.current.clientWidth * 0.6;

    logoGridRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const logoGrid = logoGridRef.current;

    if (!logoGrid) {
      return undefined;
    }

    const resetLoopPosition = () => {
      const halfWidth = logoGrid.scrollWidth / 2;

      if (logoGrid.scrollLeft >= halfWidth) {
        logoGrid.scrollLeft -= halfWidth;
      } else if (logoGrid.scrollLeft < 0) {
        logoGrid.scrollLeft += halfWidth;
      }
    };

    const autoScroll = window.setInterval(() => {
      const scrollAmount = logoGrid.clientWidth * 0.3;

      logoGrid.scrollTo({
        left: logoGrid.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });

      window.setTimeout(resetLoopPosition, 450);
    }, 1000);

    return () => {
      window.clearInterval(autoScroll);
    };
  }, []);

  return (
    <section className="logo-showcase">
      <div className="container">
        <h2 className="logo-showcase-title">Major Clients</h2>
        <div className="logo-showcase-track">
          <button
            type="button"
            className="logo-scroll-button logo-scroll-button-left"
            onClick={() => scrollLogos(-1)}
            aria-label="Scroll logos left"
          >
            <span>&lt;&lt;</span>
          </button>
          <div ref={logoGridRef} className="logo-grid">
          {loopedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="logo-card">
              <img src={logo.image} alt={logo.name} className="logo-image" />
            </div>
          ))}
          </div>
          <button
            type="button"
            className="logo-scroll-button logo-scroll-button-right"
            onClick={() => scrollLogos(1)}
            aria-label="Scroll logos right"
          >
            <span>&gt;&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
