import "./App.scss"

import images from "./images/images"

function App() {
  return (
    <div className="App">
      <div className="scroll">
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
