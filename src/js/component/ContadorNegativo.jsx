import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"



// include your styles into the webpack bundle





//import your own components
function ContadorNegativo(props){
    return(
        <>
        <h3 className="tituloNegativo  pb-3">yo.. más humilde soy, y solo quiero que la hora que surge del último suspiro de un segundo,<br ></br>me transporte mecido hasta el siguiente...</h3>        
        
        <div className="wrapperNegativo">
            <div className="contadorNegativo">
                <h1>Aprovecha el tiempo,que se acaba!!</h1>
                <div className="cuentaAtras container">         
                    <div className="four">{props.digitFour % 10}</div>
                    <div className="three">{props.digitThree % 10}</div>
                    <div className="two">{props.digitTwo % 10}</div>
                    <div className="one">{props.digitOne % 10}</div>
                </div>  
            </div>
        </div> 
        </> 
        );
}



    export default ContadorNegativo;