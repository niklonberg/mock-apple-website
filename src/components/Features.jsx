import { useGSAP } from '@gsap/react';
import React from 'react';

const Features = () => {
  useGSAP(() => {}, []);
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12">
          <h1 id="features-title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Features;
