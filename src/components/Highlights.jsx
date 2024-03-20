import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      delay: 2,
    })
    gsap.to('#cta', { 
      opacity: 1, 
      y: -50, 
      delay: 2 
    })
  })

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div>
          <h1 id="title" className="section-heading">Get The Highligths.</h1>
        </div>
      </div>
    </section>
  )
}

export default Highlights
