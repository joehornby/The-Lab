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
