import React, { useState } from 'react'
import './App.css'
import { Challenge1 } from './pages/Challenge1'
import { Challenge2 } from './pages/Challenge2'
import { Challenge3 } from './pages/Challenge3'
import PreviewCh2 from './pages/PreviewCh2'

function App() {
  const [challenge, setChallenge] = useState<number>(1)
  const [previewCh2, setPreviewCh2] = useState<boolean>(false)
  const previousChallenge = () => {
    setChallenge(challenge - 1)
  }

  const nextChallenge = () => {
    setChallenge(challenge + 1)
  }

  return (
    <div className="App">
      {previewCh2 ? (
        <PreviewCh2 />
      ) : (
        <div className="__challenge-container">
          <h3>Challenge {challenge}</h3>
          {challenge === 1 && <Challenge1 />}
          {challenge === 2 && <Challenge2 />}
          {challenge === 3 && <Challenge3 />}
          <p>
            <button className="LgButton" onClick={previousChallenge}>
              Prev challenge
            </button>{' '}
            {challenge === 2 && (
              <button className="LgButton" onClick={() => setPreviewCh2(true)}>
                preview Page challenge 2
              </button>
            )}
            {challenge < 3 && (
              <button className="LgButton" onClick={nextChallenge}>
                Next challenge
              </button>
            )}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
