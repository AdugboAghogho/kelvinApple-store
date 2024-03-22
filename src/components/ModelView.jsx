import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'

const ModelView = ({ index, groupRef, gaspType, controlRef, setRotation, size, item }) => {

  return (
    <View
      index={index}
      id={gaspType}
      className={`border-2 border-red-200 w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
      {/* ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense fallback={<div>Loading...</div>} >
        .
      </Suspense>
    </View>
  )
}

export default ModelView
