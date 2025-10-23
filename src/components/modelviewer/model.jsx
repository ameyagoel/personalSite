import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function Model({ modelPath, ...props }) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);
  const [centerOffset, setCenterOffset] = useState([0, 0, 0]);

  useEffect(() => {
    if (animations.length > 0) {
      const firstAnim = Object.keys(actions)[0];
      actions[firstAnim]?.play();
    }

    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    setCenterOffset([-center.x, -center.y, -center.z]);
  }, [actions, animations, scene]);

  return (
    <group ref={group} {...props} position={centerOffset} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
