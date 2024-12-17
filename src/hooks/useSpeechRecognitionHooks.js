import React, {useState, useEffect} from 'react'

const useSpeechRecognitionHooks = () => {
  let recognition = null
  

  if (window.SpeechRecognition || window.webkitSpeechRecognition){
    recognition = new webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true;
    recognition.lang = "en-US"
  } else{
    console.log("webkitSpeechRecognition is not supported in this browser")
  }

  
  const [text, setText] = useState("")
  const [isListening, setIsListening] = useState(false)

  useEffect(()=>{
    if (!recognition) {
      console.log("recognition doesn't exist")
      return
    } else{
      console.log("recognition exists", recognition)
    }

    recognition.onresult = (event) =>{
      console.log('onresult event', event)
      recognition.stop()
      setIsListening(false)
    }
  },[])

  const startListening = () => {
    setText('')
    setIsListening(true)
    recognition.start()
  }

  const stopListening = () => {
    setIsListening(false)
    recognition.stop()
  }
  const hasRecognitionSupport = recognition

  return {
    text,
    isListening,
    startListening,
    hasRecognitionSupport
  }
  
}

export default useSpeechRecognitionHooks