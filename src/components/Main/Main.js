import './Main.css';
import Card from './Card/Card.js';
import { carouselFunction } from './CarouselLogic.js';

import { useEffect, useState } from 'react';


let allCards = carouselFunction();

const Main = () => {

  let [state, setState] = useState([]);
  let [counter, setCounter] = useState(0);
  let [prevCounter, setPrevCounter] = useState(0);
  let [style, setStyle] = useState('mainStyle');

  
  useEffect(() => {
    
    if (0 > counter){
      counter = 0;
      return;
    }
    if(counter >= allCards.length){
       counter = allCards.length-1;
       return;
    } 

    if (prevCounter < counter) {

      setStyle('rightStyle');
      setPrevCounter(counter);

    } else if (prevCounter > counter) {
      setStyle('leftStyle')
      setPrevCounter(counter);
    }

    setState(allCards[counter])

  }, [counter, prevCounter])

 
  return (
    <div className='container'>
      <div className='carousel'>
        <img id='imgLeft' src='../../../img/leftArrow.png' onClick={() => setCounter(--counter)} />

        <div className='gridDiv'>
          {state.map(x => <Card key={x.id} img={x.img} title={x.title} currentStyle={style} />)}
        </div>
        <img src='../../../img/rightArrow.png' id='imgRight' onClick={() => setCounter(++counter)} />
      </div>

    </div>

  )
}

export default Main;