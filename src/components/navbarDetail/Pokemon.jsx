import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.01));
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Cube__0.geometry} ref={ref} position={[0,-200,0]} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={500} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
