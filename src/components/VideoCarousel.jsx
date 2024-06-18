import React from 'react';
import { hightlightsSlides } from '../constants';
import gsap from 'gsap';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';

const VideoCarousel = () => {
  const videoRef = React.useRef([]);
  const videoSpanRef = React.useRef([]);
  const videoDivRef = React.useRef([]);
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
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlaying && videoRef.current[videoId].play();
      }
    }
  }, [startPlaying, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((prevData) => [...prevData, e]);

  React.useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlaying]);

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

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, i) => (
          <div key={slide.id} className="slider pr-10 sm:pr-20">
            <div className="video-carousel-container">
              <div className="flex-center h-full overflow-hidden rounded-3xl bg-black">
                <video
                  className="slide-video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
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

      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
            >
              <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)}></span>
            </span>
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
