import React, { useState } from "react";
export const Boton = () => {
    const [corriendo, setCorriendo] = useState(true);
    console.log(corriendo)
    const handleInterval = () => {
        if (corriendo) {
            setCorriendo(false);
        } else {
            setCorriendo(true);
        }
    }
    return (
        <button onClick={handleInterval()}>{corriendo ? "parar tiempo" : "reanudar tiempo"}</button>
    )
}                   
