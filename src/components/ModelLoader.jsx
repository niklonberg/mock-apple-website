import { Html } from '@react-three/drei';
import React from 'react';

const ModelLoader = () => {
  return (
    <Html>
      <div className="flex-center absolute left-0 top-0 h-full w-full">
        <div className="h-[10vw] w-[10vw]">Loading...</div>
      </div>
    </Html>
  );
};

export default ModelLoader;
