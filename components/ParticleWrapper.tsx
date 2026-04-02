"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function ParticleWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 480) {
      setShow(true);
    }
  }, []);

  if (!show) return null;
  return <ParticleBackground />;
}
