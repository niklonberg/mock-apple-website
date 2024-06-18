import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = React.useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

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
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
