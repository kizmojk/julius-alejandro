"use client";

import React, { useRef, useMemo, useState, useEffect, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return [pos, vel];
  }, [count]);

  useFrame(({ mouse }) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(arr[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }

    posAttr.needsUpdate = true;

    meshRef.current.rotation.y += (mouse.x * 0.1 - meshRef.current.rotation.y) * 0.02;
    meshRef.current.rotation.x += (mouse.y * 0.05 - meshRef.current.rotation.x) * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#2d7d7b"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

const ParticleBackground = memo(function ParticleBackground() {
  const [count, setCount] = useState(800);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setCount(isMobile ? 300 : 800);
  }, []);

  return (
    <div className="fixed inset-0 -z-10" style={{ willChange: "transform" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles count={count} />
      </Canvas>
    </div>
  );
});

export default ParticleBackground;
