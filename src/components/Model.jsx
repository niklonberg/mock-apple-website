import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Model = () => {
  useGSAP(() => {
    gsap.to('#heading', {
      duration: 1,
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h2 id="heading" className="section-heading">
          Take a closer look.
        </h2>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] overflow-hidden md:h-[90]"></div>
        </div>
      </div>
    </section>
  );
};

export default Model;
