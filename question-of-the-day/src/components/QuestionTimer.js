import React, {useState, useEffect} from "react";



function QuestionTimer () {
    const [time, setTime] = useState(new Date())


    useEffect (() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return(
        <div>
            <h1>{hours < 10 ? `0${hours}`: hours}:{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </div>
        
    )
}


export default QuestionTimer;

