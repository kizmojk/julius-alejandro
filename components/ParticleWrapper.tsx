"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, Component } from "react";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

class ParticleErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function ParticleWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only render Three.js on screens wider than 480px
    // and devices that can handle WebGL
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl && window.innerWidth >= 480) {
        setShow(true);
      }
    } catch {
      // WebGL not supported, skip particles
    }
  }, []);

  if (!show) return null;
  return (
    <ParticleErrorBoundary>
      <ParticleBackground />
    </ParticleErrorBoundary>
  );
}
