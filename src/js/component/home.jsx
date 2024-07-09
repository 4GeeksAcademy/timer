import React, { useState, useRef, useEffect } from "react";

const Home = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    
    const startTimer = () => {
        const startTime = new Date().getTime(); 

        
        const id = setInterval(() => {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;

            
            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

            
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }, 1000);

        Ref.current = id; 
    };

    
    const clearTimer = () => {
        clearInterval(Ref.current);
    };

    
    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(Ref.current);
        };
    }, []);

    
    const onClickReset = () => {
        clearInterval(Ref.current); 
        setTimer("00:00:00"); 
        startTimer(); 
    };

    return (
      <div className="timerContainer">
        <i className='far fa-clock' id="clock" style={{fontSize:"100px"}}></i>
        <div className="timer">
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
        </div>
    );
};

export default Home;
