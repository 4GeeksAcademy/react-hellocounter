import React from "react";

const GameOver = () =>{
   
    return(
    <div>
        <div className="bordeCaja">
        <div className="cajaMatrix">
            <h1 className="gameTitulo mt-4 text-center">Porque si la vida para....</h1>
            <h1 className="gameover mt-4 text-center">GAME OVER!!</h1>
        </div>
        </div>
        <img style={{width:"100%" }} className="matrix" src="https://cdn.textures4photoshop.com/tex/thumbs/matrix-code-animation-gif-free-animated-background-716.gif" alt="" />
        
    </div>
    )
}
export default GameOver;