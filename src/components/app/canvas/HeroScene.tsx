"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Rocket } from "../models/Rocket";

const Controls = ({
  isSpinning,
  onStartInteraction,
  onEndInteraction,
}: any) => {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleStart = () => onStartInteraction();
    const handleEnd = () => onEndInteraction();

    controls.addEventListener("start", handleStart);
    controls.addEventListener("end", handleEnd);

    return () => {
      controls.removeEventListener("start", handleStart);
      controls.removeEventListener("end", handleEnd);
    };
  }, [onStartInteraction, onEndInteraction]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      maxDistance={380}
      minDistance={380}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

const RotatingGroup = ({ isSpinning }: { isSpinning: boolean }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (isSpinning) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Rocket args={[]} />
    </group>
  );
};

const HeroScene = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  const handleStartInteraction = () => {
    setIsSpinning(false);
    setLastInteraction(Date.now());
  };

  const handleEndInteraction = () => {
    setLastInteraction(Date.now());
  };

  // Resume spinning after 1 seconds of no interaction
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSpinning && Date.now() - lastInteraction > 1000) {
        setIsSpinning(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isSpinning, lastInteraction]);

  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <directionalLight intensity={1} />
      <RotatingGroup isSpinning={isSpinning} />
      <Controls
        isSpinning={isSpinning}
        onStartInteraction={handleStartInteraction}
        onEndInteraction={handleEndInteraction}
      />
    </Canvas>
  );
};

export default HeroScene;
