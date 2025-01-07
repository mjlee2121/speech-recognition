import React from 'react'
import useSpeechRecognitionHooks from '../hooks/useSpeechRecognitionHooks'
import { reportWebVitals } from 'web-vitals';
import TaskManage from './TaskManage';
import TaskTable from './TaskTable';

const Main = () => {

  const {
    addToMonthlyTask,
    addToDailyTask
  } = TaskManage()

  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHooks()

  return (
    <div>
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
      <button className='add-button' onClick={addToMonthlyTask}>Add to <br />Monthly Task</button>

    </div>
  )
}

export default Main