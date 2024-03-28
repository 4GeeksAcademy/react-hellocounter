//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ContadorPositivo from "./component/ContadorPositivo";
import ContadorNegativo from "./component/ContadorNegativo";
import {useState} from "react";



// include your styles into the webpack bundle
import "../styles/index.css";
import { Boton } from "./component/Boton";




//import your own components
function SimpleCounter(props){
   
    
    return(
        <>

            <div className="contador">
                <div className="reloj">
                    <i className="fa fa-clock"></i>
                </div>
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>        
            </div> 
            <button onClick={handleInterval()}>{corriendo ? "parar tiempo" : "reanudar tiempo"}</button>
            <div>       
                <ContadorPositivo digitOne={props.digitOne} digitTwo={props.digitTwo} digitThree={props.digitThree} digitFour={digitFour}/>
            </div>  
            </>         
        );
}






let counterup = 0;
let counterdown =9999;
setInterval(function(){
    const four = Math.floor(counterup / 1000);
	const three = Math.floor(counterup /100);
	const two = Math.floor(counterup / 10);
	const one = Math.floor(counterup / 1);
    const fourdown = Math.floor(counterdown / 1000);
	const threedown= Math.floor(counterdown /100);
	const twodown = Math.floor(counterdown /10);
	const onedown = Math.floor(counterdown / 1);
   
    ReactDOM.render(
                <>                        
                    <ContadorPositivo digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>                 
                    <ContadorNegativo digitOne={onedown} digitTwo={twodown} digitThree={threedown} digitFour={fourdown}/>
                </>,
            document.querySelector("#app"));
    counterup ++;
    counterdown --; 
   
	},1000/5);






//render your react application
