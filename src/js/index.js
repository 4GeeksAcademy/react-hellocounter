//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ContadorPositivo from "./component/ContadorPositivo";
import ContadorNegativo from "./component/ContadorNegativo";
import {useState,useEffect} from "react";
import "../styles/index.css";
import swal from 'sweetalert';                
import GameOver from "./component/GameOver";


const edad = prompt("introduce tu edad?");

let gameIsOver = false;

const renderApp = () => {
  if (gameIsOver) {
    ReactDOM.render(<GameOver />, document.querySelector("#app"));
  } else {
    
    let counterup = edad;
    let counterdown = 1000;
    const intervalOfId = setInterval(() => {
      const four = Math.floor(counterup / 1000) % 10;
      const three = Math.floor((counterup % 1000) / 100) % 10;
      const two = Math.floor((counterup % 100) / 10) % 10;
      const one = counterup % 10;
      
      const fourdown = Math.floor(counterdown / 1000) % 10;
      const threedown= Math.floor((counterdown % 1000) / 100) % 10;
      const twodown = Math.floor((counterdown % 100) / 10) % 10;
      const onedown = counterdown % 10;
      
      ReactDOM.render(
        <>
          
          <ContadorPositivo digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
          <ContadorNegativo digitOne={onedown} digitTwo={twodown} digitThree={threedown} digitFour={fourdown}/>
          <button onClick={() => stopCounterUp(intervalOfId)} className="BotonAlerta">Para el Tiempo!!</button>
         
        </>,
        document.querySelector("#app")
      );
      
      counterup++;
      counterdown--;

      if (counterdown <= 0) {
        stopCounterUp(intervalOfId);
      }
    }, 200);
  }
};
const stopCounterUp = (intervalId) => {
  clearInterval(intervalId);
  gameIsOver = true; 
  swal({
    title: "Amig@s el tiempo ha parado, pero...",
    text: "La VIDA no para... ¡Espabila!",
    icon: "warning",
    button: "Hahahaha!!!",
    
  }).then(() => {
    renderApp(); 
  });
};
renderApp();














  
      
       

