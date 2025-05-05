"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Rocket } from "../models/Rocket";

const TestScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <directionalLight intensity={1} />
      <Rocket args={[]} />
      <OrbitControls
        enablePan={false}
        maxDistance={380}
        minDistance={380}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default TestScene;
