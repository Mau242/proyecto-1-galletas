

import './App.css';
import RandomPhrase from './components/RandomPhrase';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomindex';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';

import arrayImages from './utils/images.json';

function App() {


  const [quote, setQuote] = useState(randomIndex(phrases));

  const [image, setImage] = useState(randomIndex(arrayImages));
  
  const objStyles = {
    backgroundImage: `url(../public/fortuna-2/fondo${image}.png)`,
  }

  return (
    <div className='container' style={objStyles}> 
      <h1 className= 'app__title'>Galletas dela fortuna</h1>
      <ButtonPhrase
      setQuote ={setQuote}
      setImage={setImage}
      /> 

      <RandomPhrase
        quote={quote}
      />
      
    </div>
   
  )
}

export default App;
