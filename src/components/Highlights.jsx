import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    });
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
  return (
    <section id="highlights" className="common-padding h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-4">
            <a className="link">
              Watch the film <img className="ml-2" src={watchImg} alt="" />
            </a>
            <a className="link">
              Watch the event <img className="ml-2" src={rightImg} alt="" />
            </a>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
