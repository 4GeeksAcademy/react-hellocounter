import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"
import { Boton } from "./Boton";



// include your styles into the webpack bundle





//import your own components
function ContadorPositivo(props) {
    return (
        <>
            <h3 className="tituloPositivo pb-2">Para muchos la vida es galopar un camino empedrado de horas, minutos y segundos...</h3>
            <div className="wrapperPositivo">
                <div className="contadorPositivo">
                    <h1>Tu vida pasa rápido</h1>
                    <div className="cuentaAdelante container">
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



export default ContadorPositivo;