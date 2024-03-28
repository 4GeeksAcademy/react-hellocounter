import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"



// include your styles into the webpack bundle





//import your own components
function ContadorNegativo(props){
    return(
        <div className="contador">
            <div className="reloj">
                <i className="">Dias que te quedan</i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>    
        );
}



    export default ContadorNegativo;