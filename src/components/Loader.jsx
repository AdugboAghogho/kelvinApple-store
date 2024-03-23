import { Html } from '@react-three/drei'
import React from 'react'
import { spinnerImg } from '../utils'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <img src={spinnerImg} alt="spinner" />
        </div>
      </div>
    </Html>
  )
}

export default Loader