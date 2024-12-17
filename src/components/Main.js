import React from 'react'
import useSpeechRecognition from '../hooks/useSpeechRecognitionHooks'
import { reportWebVitals } from 'web-vitals';

const Main = () => {
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition
  console.log('recog', recognition)
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport
  } = useSpeechRecognition

  return (
    <div>
      {hasRecognitionSupport ? 
      (
        <div>
          <button onClick={startListening}>Start listening</button>
          {isListening ? (<div>Your browser is currently listening</div>) : null}
        </div>
      ) : (
        <h1>Your browser has no speech recognition support</h1>
      )}
    </div>
  )
}

export default Main