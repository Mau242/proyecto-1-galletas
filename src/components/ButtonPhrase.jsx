import React from "react";
import phrases from '../utils/phrases.json';
import randomIndex from "../services/randomindex";
import arrayImages from '../utils/images.json';
const ButtonPhrase = ({setQuote, setImage}) => {

const handleButton = () => {

    setQuote(randomIndex(phrases));
    setImage(randomIndex(arrayImages));
    
   
}

    return(
        <button onClick={handleButton}>
            Probar mi suerte
        </button>
    )
}

export default ButtonPhrase;