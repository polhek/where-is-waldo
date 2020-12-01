import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ user, waldoFound, wizardFound, wilmaFound, saveUser }) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    if (user.length > 0 && isActive === false) {
      handleStart();
    }
  }, [user]);

  useEffect(() => {
    if (waldoFound && wizardFound && wilmaFound) {
      handlePause();
      saveUser(user, timer);
    }
  }, [waldoFound, wizardFound, wilmaFound]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <div className="timer">
      <div className="timer-timer">
        <h2>{formatTime(timer)}</h2>
      </div>
    </div>
  );
};

export default Timer;
