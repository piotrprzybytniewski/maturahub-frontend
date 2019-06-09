import React, {useEffect, useState, useRef} from 'react';

const timeHelper = (val) => {
    let valString = val.toString();
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
};

export const Timer = (timerStatus = true) => {
    const [seconds, setSeconds] = useState('');
    const [minutes, setMinutes] = useState('');
    const [totalSeconds, setTotalSeconds] = useState(0);

    const intervalRef = useRef();
    useEffect(() => {
        const id = setInterval(() => {
            setTotalSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        let seconds = timeHelper(totalSeconds % 60);
        let minutes = timeHelper(parseInt(totalSeconds / 60));
        setSeconds(seconds);
        setMinutes(minutes);
    }, [totalSeconds]);


    const handleClear = () => {
        clearInterval(intervalRef.current);
    };

    if (!timerStatus) {
        handleClear();
    }
    return (
        <span>
            <span id="timer__minutes">{minutes}</span> min <span id="timer__seconds">{seconds}</span> sek
        </span>
    )
};

