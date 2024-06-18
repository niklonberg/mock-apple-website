import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = React.useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  function handleVideoSrc() {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleVideoSrc);
    return () => window.removeEventListener('resize', handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to('.hero-title', {
      delay: 2,
      duration: 1,
      opacity: 1,
    });
    gsap.to('#cta', {
      delay: 2,
      duration: 1,
      opacity: 1,
      y: -100,
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

      <div id="cta" className="translate-y-30 flex flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
