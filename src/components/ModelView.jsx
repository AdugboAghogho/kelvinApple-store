import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'

const ModelView = ({ index, groupRef, gaspType, controlRef, setRotation, size, item }) => {

  return (
    <View
      index={index}
      id={gaspType}
      className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
      {/* ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense fallback={<div>Loading...</div>}>
        <IPhone />
      </Suspense>
    </View>
  )
}

export default ModelView
