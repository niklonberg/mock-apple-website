import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ModelView from './ModelView';
import { yellowImg } from '../utils';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { models, sizes } from '../constants';

const Model = () => {
  const [size, setSize] = React.useState('small');
  const [model, setModel] = React.useState({
    title: 'iPhone 15 pro in Titanium',
    color: ['8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // camera control for model view
  const cameraControlSmall = React.useRef();
  const cameraControlLarge = React.useRef();

  // models
  const small = React.useRef(new THREE.Group());
  const large = React.useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = React.useState(0);
  const [largeRotation, setLargeRotation] = React.useState(0);

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
          {/* model viewers */}
          <div className="relative h-[75vh] overflow-hidden md:h-[90]">
            <ModelView
              index={0}
              groupRef={small}
              gsapType="view0"
              controlRef={cameraControlSmall}
              setRotation={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={1}
              groupRef={large}
              gsapType="view1"
              controlRef={cameraControlLarge}
              setRotation={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="h-full w-full"
              style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          {/* 3D view controls */}
          <div className="mx-auto">
            <p className="mb-4 text-center text-lg font-light">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((model, i) => (
                  <li key={model.id} className="flex-center mx-2">
                    <button
                      className="h-6 w-6 cursor-pointer rounded-full"
                      style={{ backgroundColor: model.color[0] }}
                      onClick={() => setModel(model)}
                    ></button>
                  </li>
                ))}
              </ul>
              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <button
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                      fontSize: '16px',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
