import React from 'react';
import { hightlightsSlides } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = React.useRef([]);
  const videoDivRef = React.useRef([]);
  const videoSpanRef = React.useRef([]);
  const [video, setVideo] = React.useState({
    hasEnded: false,
    startPlaying: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = React.useState([]);

  const { hasEnded, startPlaying, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    // slider animation, moves finished video out, and new video in
    gsap.to('.slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut',
    });
    // video animation to play the current video when it is in view. Triggered by scroll
    gsap.to('.slide-video', {
      scrollTrigger: {
        trigger: '.slide-video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlaying: true,
          isPlaying: true,
        }));
      },
    });
  }, [hasEnded, videoId]);

  React.useEffect(() => {
    if (loadedData.length === hightlightsSlides.length) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlaying && videoRef.current[videoId].play();
      }
    }
  }, [startPlaying, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((prevData) => [...prevData, e]);

  // keep track of video progress
  React.useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress bar
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress percentage
          const progressPercent = Math.ceil(anim.progress() * 100);
          console.log(anim.progress());
          if (progressPercent !== currentProgress) {
            // update the progress percentage
            currentProgress = progressPercent;
            // update the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 1200
                  ? '10vw' // tablet & mobile
                  : '5vw', // desktop
            });
            // update the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            });
          }
        },
        // when the video ends replace the progress bar with a small dot and change background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            });
            gsap.to(span[videoId], {
              backgroundColor: '#7A7A7A',
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        const video = videoRef.current[videoId];
        if (video) anim.progress(video.currentTime / video.duration);
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlaying, isPlaying]);

  const handleVideoProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((prevVideo) => ({
          ...prevVideo,
          hasEnded: true,
          videoId: i + 1,
        }));
        break;

      case 'video-last':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: true,
        }));
        break;

      case 'video-reset':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: false,
          videoId: 0,
        }));
        break;

      case 'video-play':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !isPlaying,
        }));
        break;

      case 'video-pause':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !isPlaying,
        }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      {/* container for videos */}
      <div className="flex items-center">
        {hightlightsSlides.map((slide, i) => (
          <div key={slide.id} className="slider pr-10 sm:pr-20">
            <div className="video-carousel-container">
              <div className="flex-center h-full overflow-hidden rounded-3xl bg-black">
                <video
                  className={`slide-video ${slide.id === 2 && 'translate-x-44'} pointer-events-none`}
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i < hightlightsSlides.length - 1
                      ? handleVideoProcess('video-end', i)
                      : handleVideoProcess('video-last')
                  }
                  onPlay={() => {
                    setVideo((prevVideo) => ({ ...prevVideo, isPlaying: true }));
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e.target)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute left-[5%] top-12 z-10">
                {slide.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium text-white md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* container for video progress */}
      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, i) => (
            <div
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
            >
              <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)} />
            </div>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={
              isLastVideo
                ? () => handleVideoProcess('video-reset')
                : isPlaying
                  ? () => handleVideoProcess('video-play')
                  : () => handleVideoProcess('video-pause')
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
