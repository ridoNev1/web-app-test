import React, { useState } from 'react'
import SoftSelect from '../../components/atom/SoftSelect'
import './style.css'

const PreviewCh2: React.FunctionComponent<{}> = () => {
  const generateRandom = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * (99 - 10 + 1)) + 10)

  const [arrayData, setArrayData] = useState<number[]>(generateRandom())

  const handleCheckMedian = (val: number) => {
    const sorted = Array.from(arrayData).sort((a, b) => a - b)
    const median = sorted.slice(2, 4)

    if (median.includes(val)) {
      alert(`Correct answer median value is ${median.join(' & ')}`)
    } else {
      alert(`Wrong answer median value is ${median.join(' & ')}`)
    }

    setArrayData(generateRandom())
  }

  return (
    <div className="__hero-container">
      <div className="__hero-main-infomation">
        <div className="__hero-main-section">
          <div className="__select-item-hero">
            <SoftSelect />
          </div>
          <div className="__main-title-hero">
            <img src="/clover-removebg-preview.png" alt="logo-clover" />
            <p>MEGA-SENA</p>
          </div>
          <div className="__sub-title-hero d-m-none">
            <p>CONCURSIO</p>
            <p>4531-07/04/2020</p>
          </div>
          <div className="__sub-title-hero d-lg-none">
            <p>CONCURSO N 4560</p>
          </div>
        </div>
      </div>
      <div className="__hero-content">
        <div className="__hero-rounded-container"></div>
        <div className="__hero-numb-section">
          <span></span>
          <div className="__hero-numb-items">
            {arrayData?.map((el, index) => (
              <button key={index} onClick={() => handleCheckMedian(el)}>
                {el}
              </button>
            ))}
          </div>
          <p>facilis at eos labore nostrum dignissimos quasi, consequatur accusamus eligendi!</p>
        </div>
      </div>
    </div>
  )
}

export default PreviewCh2
