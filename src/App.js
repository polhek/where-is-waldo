import './App.css';
import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import Waldo from './components/Waldo';
import Timer from './components/Timer';
import User from './components/User';

//firebase...
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDI7clzPOlS0Tuf4FuT1GVNwoerT5SC0-I',
    authDomain: 'where-is-waldo-99e1e.firebaseapp.com',
    databaseURL: 'https://where-is-waldo-99e1e.firebaseio.com',
    projectId: 'where-is-waldo-99e1e',
    storageBucket: 'where-is-waldo-99e1e.appspot.com',
    messagingSenderId: '909475830981',
    appId: '1:909475830981:web:75eda288d5711c0f8424ac',
  });
}

const firestore = firebase.firestore();

function App() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [markerPlaced, setMarkerPlaced] = useState(false);
  const [character, setCharacter] = useState();
  const [waldoFound, setWaldoFound] = useState(false);
  const [wilmaFound, setWilmaFound] = useState(false);
  const [wizardFound, setWizardFound] = useState(false);
  const [characterInfo, setcharacterInfo] = useState({});
  const [user, setUser] = useState('');
  const [userDB, setUserDB] = useState([]);

  const getCharacterCoordinates = async () => {
    try {
      let characterRef = firestore.collection('characterCoordinates');
      let allCharactersCords = await characterRef.get();
      let characterInfoCoordinates = {};
      for (const doc of allCharactersCords.docs) {
        characterInfoCoordinates[doc.id] = doc.data();
      }
      setcharacterInfo(characterInfoCoordinates);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsersLeaderboard = async () => {
    try {
      let usersRef = firestore
        .collection('users')
        .orderBy('timer', 'asc')
        .limit(10);
      let users = await usersRef.get();
      let db = [];
      users.docs.forEach((doc) => {
        db.push(doc.data());
      });
      setUserDB(db);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacterCoordinates();
    getUsersLeaderboard();
  }, []);

  useEffect(() => {
    if (markerPlaced === true) {
      checkClick(x, y);
    }
  }, [character]);

  const clickedCharacter = (e) => {
    setCharacter(e.target.value);
  };

  const clickedCharacterCoordinates = () => {
    const clickedCharacterInfo = characterInfo[character];
    if (
      x - 20 < clickedCharacterInfo.cordX &&
      x + 20 > clickedCharacterInfo.cordX
    ) {
      if (
        y + 20 > clickedCharacterInfo.cordY &&
        y - 20 < clickedCharacterInfo.cordY
      ) {
        return true;
      }
    }
    return false;
  };

  const placeFound = () => {
    const findMarker = document.createElement('div');
    findMarker.classList.add('find-marker');
    findMarker.style.top = `${y - 20}px`;
    findMarker.style.left = `${x - 20}px`;
    document.querySelector('.image-container').appendChild(findMarker);
  };

  const checkClick = (x, y) => {
    if (clickedCharacterCoordinates()) {
      if (character === 'waldo') {
        setWaldoFound(true);
        placeFound();
      } else if (character === 'wizard') {
        setWizardFound(true);
        placeFound();
      } else if (character === 'wilma') {
        setWilmaFound(true);
        placeFound();
      }
    }
  };

  const saveUser = (user, timer) => {
    firestore
      .collection('users')
      .doc(user)
      .set({
        name: user,
        timer: timer,
      })
      .then(() => {
        console.log('Successfully saved user');
      })
      .catch((error) => {
        console.log('Error saving user', error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <User setUser={setUser} />
        <div className="app-header">
          <h1>Where's Waldo?</h1>
          <Timer
            user={user}
            waldoFound={waldoFound}
            wizardFound={wizardFound}
            wilmaFound={wilmaFound}
            saveUser={saveUser}
          />
        </div>
        <div className="main">
          <Leaderboard
            waldoFound={waldoFound}
            wizardFound={wizardFound}
            wilmaFound={wilmaFound}
            usersDB={userDB}
          />
          <Waldo
            setX={setX}
            setY={setY}
            clickedCharacter={clickedCharacter}
            checkClick={checkClick}
            setMarkerPlaced={setMarkerPlaced}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
