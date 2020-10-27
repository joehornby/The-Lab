import React, { useRef, useEffect } from "react"
import "./App.scss"

// import window size hook
import useWindowSize from './hooks/useWindowSize'

import images from "./images/images"

function App() {
  // Hook
  const size = useWindowSize()

  // Ref
  const app = useRef()
  const scrollContainer = useRef()

  // Skew config
  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  }

  // Using empty dependency [], useEffect will only run once component has mounted. 
  // With a dependency, it will also run when the dependency changes - in this case, when the the window size changes.
  // TODO: add debounce to avoid excessive rendering on window size
  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  }, [size.height]) // [] = empty dependency, [size.height] = window size hook imported above

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  })

  const skewScrolling = () => {
    skewConfig.current = window.scrollY
    skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100

    // skew mechanics variables
    const difference = skewConfig.current - skewConfig.rounded
    const acceleration = difference / size.width // emphasise skew effect on smaller devices
    const skew = acceleration * 12;

    // skew
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)` 

    // ask browser to update animation before repaint
    requestAnimationFrame(() => skewScrolling())

  }

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
            <div key={index} className="img-container">
              <img src={image} alt={`Process ${index} &mdash; Joseph Hornby in 'Languitecture', &copy; 2016`} />
            </div>
            <h2>
              Lorem Ipsum
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
