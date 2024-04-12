import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import SpiderMan from './SpiderMan'
import { OrbitControls } from '@react-three/drei';
function Home() {

  return (
    <>
      <div>
        <h1>Welcome to my 3D world!</h1>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <SpiderMan />
        </Canvas>
      </div>
    </>
  )
}

export default Home