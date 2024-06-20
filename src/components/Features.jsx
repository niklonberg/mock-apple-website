import { useGSAP } from '@gsap/react';
import React from 'react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
  const videoRef = React.useRef();

  useGSAP(() => {
    animateWithGsap('#features-title', {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      '.g_grow',
      {
        scale: 1,
        opacity: 1,
        ease: 'power1',
      },
      { scrub: 5.5 },
    );
    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
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
            <video
              ref={videoRef}
              playsInline
              id="explore-video"
              className="h-full w-full object-cover object-center"
              preload="none"
              muted
              autoPlay
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="feature-video-container">
            <div className="h-[50vh] flex-1 overflow-hidden">
              <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
            </div>
            <div className="h-[50vh] flex-1 overflow-hidden">
              <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
            </div>
          </div>

          <div className="feature-text-container">
            <div className="flex-center flex-1">
              <p className="feature-text g_text">
                iPhone 15 Pro is{' '}
                <span className="text-white">the first iPhone to feature an aerospace-grade titanium design</span>,
                using the same alloy that spacecrafts use for missions to Mars.
              </p>
            </div>

            <div className="flex-center flex-1">
              <p className="feature-text g_text">
                Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                <span className="text-white">lightest Pro models ever.</span>
                You'll notice the difference the moment you pick one up.
              </p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores itaque voluptatibus sequi eos voluptas
            dolore aliquid voluptates mollitia aspernatur ducimus. Eligendi ipsam culpa soluta veniam beatae. Dicta quos
            dolorum facere dignissimos! Id doloremque fugit soluta commodi, ipsum sequi molestiae labore. Iste non ad
            veniam nostrum quibusdam nesciunt officia ullam, ipsa earum numquam, impedit voluptas nisi fuga ex
            reiciendis possimus quod! Cum placeat, voluptate, non in at est quis vitae, blanditiis eveniet nostrum iure.
            Eaque natus doloribus molestiae quis porro quidem exercitationem animi fugit distinctio atque ab dolorum
            adipisci, sit quos, iusto eius pariatur at nobis incidunt iure unde aut dolorem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
