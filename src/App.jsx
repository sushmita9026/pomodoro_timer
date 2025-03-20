import React, { useRef, useState } from "react";
import "./App.css";
function App() {
  const [timeLeft, setTimeLeft] = useState(1500); 
  const [isBreak, setIsBreak] = useState(false);   
  const [Running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  function startTimer() {
    if (!Running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            if (isBreak) {
              setIsBreak(false);
              setTimeLeft(1500);
            } else {
              setIsBreak(false);
              setTimeLeft(1500);
            }
            setRunning(false);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunning(false);
    }
  }
  function startBreak() {
    if (!Running) {
      setIsBreak(true);  
      alert(" Break start")
      setTimeLeft(300);  
      startTimer();      
    } else {
      clearInterval(intervalRef.current); 
      intervalRef.current = null;
      setRunning(false); 

      setIsBreak(false);   
      setTimeLeft(1500);  
      startTimer();       
    }
  }
  return (
    <div className="container">
      <button onClick={startBreak} className="breakbtn">Short Break</button>
      <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(timeLeft % 60).padStart(2, "0")}</span>
      <button onClick={startTimer} className="startbtn">
        {Running ? "Pause Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default App;


