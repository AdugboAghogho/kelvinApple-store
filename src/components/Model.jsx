import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Model = () => {
    useGSAP(() => {
        gsap.to('heading', {y: 0, opacity: 1 })
    }, []);

  return (
    <section className='common-padding'>
      <div className="screen-max-width">
         <h1 id='heading'>Takw</h1>
      </div>
    </section>
  )
}

export default Model
