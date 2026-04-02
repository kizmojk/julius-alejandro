"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, Component } from "react";

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
  const [visible, setVisible] = useState(true);
  const resizeTimer = useRef<ReturnType<typeof setTimeout>>(null);

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

    // Unmount Canvas during resize to prevent React reconciler crash
    const handleResize = () => {
      setVisible(false);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => setVisible(true), 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
    };
  }, []);

  if (!show || !visible) return null;
  return (
    <ParticleErrorBoundary>
      <ParticleBackground />
    </ParticleErrorBoundary>
  );
}
