//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ContadorPositivo from "./component/ContadorPositivo";
import ContadorNegativo from "./component/ContadorNegativo";
import {useState,useEffect} from "react";
import "../styles/index.css";
import swal from 'sweetalert';
import { GameOver } from "./component/GameOver";


let  gameOver=false;


function SimpleCounter(props){
   
    
    return(
        <>
            
            <div className="contador">                          
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>        
            </div>             
            <div>       
                <ContadorPositivo digitOne={props.digitOne} digitTwo={props.digitTwo} digitThree={props.digitThree} digitFour={digitFour}/>
            </div>  

            </>         
        );
}






let counterup = 0;
let counterdown =5000;

const intervalOfId = setInterval(function(){
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
                    <button onClick={stopCounterUp} className="BotonAlerta">Para el Tiempo!!</button>   
                    <a href="https://www.youtube.com/watch?v=3SnZIkYbklQ" className="btn btn-primary" target="_blank" type="button" >Y  si ... se te acaba el tiempo...</a>
                    
                </>,
            document.querySelector("#app"));
    counterup ++;
    counterdown --; 
   
	},1000/5);

    const stopCounterUp = () => {
        clearInterval(intervalOfId);
        swal({
            title:"Amig@s el tiempo ha parado, pero...",
            text:"La VIDA no para...Espabila!!!!",
            icon:"warning",
            buttons:"Hahahaha!!!"
        })
    };
  
    

  
      
       
    
//import your own components
