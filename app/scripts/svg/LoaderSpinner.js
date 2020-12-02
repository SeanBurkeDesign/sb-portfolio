import React from 'react'

const LoaderSpinner = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="loader__spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle className="loader__circle loader__circle--navy" cx="50" cy="50" r="16" strokeWidth="2" stroke="#2c3e50" strokeDasharray="25.132741228718345 25.132741228718345" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" dur="1.923076923076923s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
      </circle>
      <circle className="loader__circle loader__circle--navy" cx="50" cy="50" r="13" strokeWidth="2" stroke="#e87e04" strokeDasharray="20.420352248333657 20.420352248333657" strokeDashoffset="20.420352248333657" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" dur="1.923076923076923s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
      </circle>
    </svg>
  )
}

export default LoaderSpinner