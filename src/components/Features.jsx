import { useGSAP } from '@gsap/react';
import React from 'react';
import { animateWithGsap } from '../utils/animations';
import { exploreVideo } from '../utils';

const Features = () => {
  useGSAP(() => {
    animateWithGsap('#features-title', {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12">
          <h2 id="features-title" className="section-heading">
            Explore the full story.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h3 className="text-4xl font-semibold lg:text-7xl">iPhone 15 Pro.</h3>
            <h3 className="text-4xl font-semibold lg:text-7xl">Forged in titanium.</h3>
          </div>
        </div>
        <div className="flex-center flex-col sm:px-10">
          <div className="relative flex h-[50vh] items-center">
            <video playsInline id="explore-video" className="h-full w-full object-cover object-center" preload="none">
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
