"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const snippets = [
  "const", "let", "var", "function", "return",
  "import", "export", "interface", "type",
  "React", "Next", "GSAP", "Three",
  "<div>", "</div>", "{}", "[]", "()",
  "=>", "async", "await", "try", "catch"
];

function FloatingCode({ count = 50 }) {
  const words = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      text: snippets[Math.floor(Math.random() * snippets.length)],
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 0.5,
      color: Math.random() > 0.5 ? "#3b82f6" : "#ffffff"
    }));
  }, [count]);

  return (
    <group>
      {words.map((word, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
          <Text
            position={word.position}
            rotation={word.rotation}
            scale={word.scale}
            color={word.color}
            fontSize={0.5}
            font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0pnF8R-0.woff2"
            fillOpacity={0.6}
          >
            {word.text}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function CodeCloud() {
  return (
    <div className="webgl-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingCode />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
