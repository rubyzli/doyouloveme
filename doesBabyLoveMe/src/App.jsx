import React, { useState } from 'react';
import './App.css';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showYesGif, setShowYesGif] = useState(false);

  const handleYesClick = () => {
    setShowYesGif(true);
  };

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const yesButtonStyle = {
    backgroundColor: 'rgb(219, 112, 147)', // Pastel purple color
    color: 'white',
    transform: `scale(${1 + noClickCount * 0.2})`,
    transition: 'transform 0.3s'
  };

  return (
    <div className="App container text-center" style={{ backgroundColor: 'lightpink', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {!showYesGif ? (
        <>
          <div>
            <img src="https://media1.tenor.com/m/bJgFrhz0xEEAAAAd/knoxy-knox.gif" alt="Knoxy Golden GIF" className="img-fluid" />
          </div>
          <h2 className="mt-3">Baby, do you love me?</h2>
          <div className="mt-3">
            <button className="btn btn-primary m-2" style={yesButtonStyle} onClick={handleYesClick}>Yes</button>
            <button className="btn btn-dark m-2" onClick={handleNoClick}>No</button>
          </div>
        </>
      ) : (
        <div>
          <img src="https://media1.tenor.com/m/X5QM_xv9XW8AAAAC/golden-retriever-dog.gif" alt="Golden Retriever Dog GIF" className="img-fluid mt-3" />
          <h2 className="mt-3">I love you toooo!!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
