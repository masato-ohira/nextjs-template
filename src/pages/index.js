// import React, { Suspense, useState } from 'react'
// import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

const App = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </>
  )
}

export default App