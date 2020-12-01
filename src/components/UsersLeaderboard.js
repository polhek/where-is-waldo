import React from 'react';
import UserLeader from './UserLeader';

const UsersLeaderboard = ({ usersDB }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <div className="leader">
        <div className="userLeader">
          {usersDB.map((user, index) => {
            return (
              <UserLeader
                key={user.index}
                name={user.name}
                timer={user.timer}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsersLeaderboard;
