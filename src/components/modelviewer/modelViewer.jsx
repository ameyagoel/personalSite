import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./model";
import './modelViewer.css'

export default function ModelViewer({ model, color }) {
  return (
    <div className="modelFrame" >
      <Canvas
  camera={{ position: [0, 0, 5], fov: 50 }}
  style={{ backgroundColor: color }}
>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model modelPath={model} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
