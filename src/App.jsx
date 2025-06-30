import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './components/Home'
import img from './assets/main-img.png'
import scrroll from "./assets/scrroll.png"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const bgRef = useRef(null)
  const [flash, setFlash] = useState(false)
  const [showHome, setShowHome] = useState(false)
  const hasAnimated = useRef(false) // <-- guard

  useEffect(() => {
    const el = bgRef.current
    const animation = gsap.fromTo(
      el,
      { scale: 1 },
      {
        scale: 3,
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=300',
          scrub: 1,
          onLeave: () => {
            if (!hasAnimated.current) {
              hasAnimated.current = true
              setFlash(true)
              setTimeout(() => {
                setShowHome(true)
              }, 500)
            }
          },
        },
        transformOrigin: 'center center',
        ease: 'none',
      }
    )

    return () => {
      animation.scrollTrigger && animation.scrollTrigger.kill()
      animation.kill()
    }
  }, [])

  if (showHome) {
    return <Home />
  }

  return (
    <>
      <div
        ref={bgRef}
        className="flex justify-center items-center h-screen w-screen bg-cover bg-center fixed"
        style={{
          backgroundImage: `url(${img})`,
          willChange: 'transform',
        }}
      >
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src={scrroll}
            alt="Scroll indicator"
            className="w-28 h-20 animate-bounce"
          />
        </div>
      </div>
      {/* White flash overlay */}
      {flash && (
        <div className="fixed inset-0 bg-white z-50 animate-fade" />
      )}
      {/* Add extra content to enable scrolling */}
      <div className="h-[170vh]"></div>
      {/* Tailwind fade animation */}
      <style>
        {`
          .animate-fade {
            animation: fadeIn 0.2s, fadeOut 0.8s 0.2s forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        
        `}
      </style>
    </>
  )
}

export default App