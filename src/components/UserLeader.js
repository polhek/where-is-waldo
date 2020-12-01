import React from 'react';

const UserLeader = ({ name, index, timer }) => {
  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div>
      <p>
        <b>
          {index + 1}. {name} -- {formatTime(timer)}
        </b>
      </p>
    </div>
  );
};

export default UserLeader;
