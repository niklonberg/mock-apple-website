import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Lights from './Lights';
import Model from './iPhoneModel';
import * as THREE from 'three';
import ModelLoader from './ModelLoader';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }) => {
  return (
    <View index={index} id={gsapType} className={`absolute h-full w-full ${index === 1 ? 'right-[-100%]' : ''}`}>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotation(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 0 ? 'small' : 'large'}`} position={[0, 0, 0]}>
        <Suspense fallback={<ModelLoader />}>
          <Model scale={index === 0 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
