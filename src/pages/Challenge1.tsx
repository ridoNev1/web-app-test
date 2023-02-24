import React, { useState, useEffect } from 'react'
import '../styles/Challenge1.css'

export const Challenge1: React.FunctionComponent<{}> = () => {
  const [lovesCount, setLovesCount] = useState<number>(0)
  const [animationExam, setAnimationExamp] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState<number>(0)

  const handleAnimation = () => {
    setAnimationExamp(!animationExam)
  }

  useEffect(() => {
    if (timeLeft === 0) {
      if (lovesCount > 0) {
        setTimeLeft(30)
      } else {
        setTimeLeft(0)
      }
    } else if (timeLeft === 1) {
      setLovesCount(lovesCount > 0 ? lovesCount - 1 : 0)
    }

    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  // debug time
  console.log('>>>>>>>>>>>>>>>>', timeLeft)

  return (
    <div>
      <div className="logoContainer">
        <img
          src={'/penguin.png'}
          className={animationExam ? 'logo' : ''}
          alt="logo"
          onAnimationEnd={handleAnimation}
          onClick={() => {
            handleAnimation()
            setLovesCount(lovesCount >= 5 ? 0 : lovesCount + 1)
            setTimeLeft(30)
          }}
        />
      </div>

      <div>
        <p>Give the penguin some love by tapping on it</p>
        Penguin loves meter: <br />
        <div className="__love-meter-container">
          {[...Array(lovesCount)].map((_, index) => (
            <img src="/love.png" alt="love-images" key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
