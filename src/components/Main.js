import React from 'react'
import useSpeechRecognitionHooks from '../hooks/useSpeechRecognitionHooks'
import { reportWebVitals } from 'web-vitals';
import TaskTable from './TaskTable';
import Calendar from './Calendar';
import TempCalendar from './TempCalendar';

const Main = () => {

  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHooks()
  
  const addToDailyTask = (text) =>{
    console.log("task added", text)
  }

  return (
    <div>
      <Calendar />
      <TaskTable text={text}/>
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
      <button className='add-button' onClick={addToDailyTask}>Add to <br />Daily Task</button>

    </div>
  )
}

export default Main