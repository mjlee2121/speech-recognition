import React from 'react'
import useSpeechRecognitionHooks from '../hooks/useSpeechRecognitionHooks'
import { reportWebVitals } from 'web-vitals';

const Main = () => {

  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHooks()

  return (
    <div>
      {hasRecognitionSupport ? 
      (
        <div>
          <button className='recording-button' onClick={startListening}>Start listening</button>
          {isListening ? (<div>Your browser is currently listening..</div>) : null}
          <button className='recording-button' onClick={stopListening}>Stop listening</button>
          {isListening ? null : (<div>Your browser stopped listening</div>)}
          {text}
        </div>
      ) : (
        <h1>Your browser has no speech recognition support</h1>
      )}
    </div>
  )
}

export default Main