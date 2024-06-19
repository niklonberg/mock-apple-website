import React, { Suspense } from 'react';
import { PerspectiveCamera, View } from '@react-three/drei';
import Lights from './Lights';
import Model from './iPhoneModel';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`h-full w-full border-2 border-red-500 ${index === 1 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense fallback={<div>Loading</div>}>
        <Model />
      </Suspense>
    </View>
  );
};

export default ModelView;
