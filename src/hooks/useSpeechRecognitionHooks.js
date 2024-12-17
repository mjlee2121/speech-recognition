import React, {useState, useEffect} from 'react'
let recognition = null

if (window.SpeechRecognition || window.webkitSpeechRecognition){
  recognition = new window.webkitSpeechRecognition() || new window.webkitSpeechRecognition()
  recognition.continuous = true
  recognition.interimResults = true;
  recognition.lang = "en-US"
} else{
  console.log("webkitSpeechRecognition is not supported in this browser")
}

const useSpeechRecognitionHooks = () => {

  const [text, setText] = useState("")
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (!recognition) {
      console.log("Recognition doesn't exist");
      return;
    }

    recognition.onresult = (event) => {
      let interimText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setText((prev) => prev + transcript + " ");
        } else {
          interimText += transcript;
        }
      }
      console.log("Interim Text: ", interimText);
    };

    // Restart recognition if stopped automatically
    recognition.onend = () => {
      if (isListening) {
        recognition.start();
        console.log("Recognition restarted");
      }
    };
  }, [isListening]);

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
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  }
  
}

export default useSpeechRecognitionHooks