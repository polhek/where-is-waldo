import React from 'react';
import wado from '../wado.jpeg';

const Waldo = ({ setY, setX, clickedCharacter, setMarkerPlaced }) => {
  const imgMarker = (x, y) => {
    const markerContainer = document.querySelector('.marker-container');
    markerContainer.classList.remove('hide');
    markerContainer.style.top = `${y - 25}px`;
    markerContainer.style.left = `${x - 25}px`;
  };

  const coordinates = (event) => {
    let clicked = window.event;
    const x = clicked.offsetX
      ? clicked.offsetX
      : clicked.pageX - document.getElementsByClassName('waldo-img').offsetLeft;
    const y = clicked.offsetY
      ? clicked.offsetY
      : clicked.pageY - document.getElementsByClassName('waldo-img').offsetTop;
    imgMarker(x, y);
    setMarkerPlaced(true);
    console.log(x, y);
    setX(x);
    setY(y);
  };
  return (
    <div className="image-container ">
      <div className="marker-container hide">
        <div className="marker"></div>
        <button
          name="waldo"
          type="submit"
          onClick={(e) => clickedCharacter(e)}
          value="waldo"
        >
          Waldo
        </button>
        <button
          name="wizard"
          type="submit"
          onClick={(e) => clickedCharacter(e)}
          value="wizard"
        >
          Wizard
        </button>
        <button
          name="wilma"
          type="submit"
          onClick={(e) => clickedCharacter(e)}
          value="wilma"
        >
          Wilma
        </button>
      </div>
      <img
        onClick={(event) => {
          coordinates(event);
        }}
        className="waldo-img"
        src={wado}
        alt="Find Waldo"
      ></img>
    </div>
  );
};

export default Waldo;
