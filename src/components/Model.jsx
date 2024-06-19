import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ModelView from './ModelView';
import { yellowImg } from '../utils';
import * as THREE from 'three';

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
          <div className="relative h-[75vh] overflow-hidden md:h-[90]">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
