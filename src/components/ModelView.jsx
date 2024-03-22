import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import * as THREE from 'three'

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

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target0={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0 ,0]}>
        <Suspense fallback={<div>Loading...</div>}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>

    </View>
  )
}

export default ModelView
