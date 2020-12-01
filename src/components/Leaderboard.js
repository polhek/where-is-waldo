import React from 'react';
import wizard from '../wizard.png';
import waldo from '../waldo.png';
import wilma from '../wilma.png';
import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import UsersLeaderboard from './UsersLeaderboard';

const Leaderboard = ({ waldoFound, wizardFound, wilmaFound, usersDB }) => {
  return (
    <div className="sidebar">
      <div className="char-lines">
        <img src={wizard} alt="wizard" className="characterImg"></img>
        {wizardFound ? <FaThumbsUp size={40} /> : <FaThumbsDown size={40} />}
      </div>
      <div className="char-lines">
        <img src={waldo} alt="waldo" className="characterImg"></img>
        {waldoFound ? <FaThumbsUp size={40} /> : <FaThumbsDown size={40} />}
      </div>
      <div className="char-lines">
        <img src={wilma} alt="wilma" className="characterImg"></img>
        {wilmaFound ? <FaThumbsUp size={40} /> : <FaThumbsDown size={40} />}
      </div>
      <UsersLeaderboard usersDB={usersDB} />
    </div>
  );
};

export default Leaderboard;
