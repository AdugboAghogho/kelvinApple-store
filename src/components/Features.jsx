import { useGSAP } from '@gsap/react'
import React from 'react'

const Features = () => {
  useGSAP(() => {
    
  }, [])

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className="screen-max-width">
        <div className="mb-12 w-full">
            <h1
              id='features_title'
              className='section-heading'
            >
                Explore The Full Story
            </h1>
        </div>
      </div>
    </section>
  )
}

export default Features
