import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.to('.hero-title', {
      delay: 1.5,
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <section className="nav-height relative bg-black">
      <div className="flex-center h-5/6 flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
      </div>
    </section>
  );
};

export default Hero;
