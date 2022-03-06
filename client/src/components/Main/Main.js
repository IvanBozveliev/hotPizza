import './Main.css';
import Card from './Card/Card.js';
// import { carouselFunction } from './CarouselLogic.js';
import { getAll } from '../../services/productServices.js';

import { useEffect, useState } from 'react';

let index = 0; 
let cards = [];

const Main = () => {

  let [state, setState] = useState([]);
  let [counter, setCounter] = useState(0);
  let [prevCounter, setPrevCounter] = useState(0);
  let [style, setStyle] = useState('mainStyle');


  useEffect(() => {
  
    getAll()
      .then(cardsInfo => {

        while (index < cardsInfo.length) {

          cards.push(cardsInfo.slice(index, index + 3));
          index += 3;
        }

        if (0 > counter) {
          counter = 0;
          return;
        }
        if (counter >= cards.length) {
          counter = cards.length - 1;
          return;
        }

        if (prevCounter < counter) {

          setStyle('rightStyle');
          setPrevCounter(counter);
    
        } else if (prevCounter > counter) {
          setStyle('leftStyle')
          setPrevCounter(counter);
        }

        setState(cards[counter])
      })


  }, [counter, prevCounter])


  return (
    <div className='container'>
      <div className='carousel'>
        <img id='imgLeft' src='../../../img/leftArrow.png' onClick={() => setCounter(--counter)} />

        <div className='gridDiv'>
          {state.map(x => <Card key={x.id} img={x.imageUrl} title={x.title} currentStyle={style} />)}
        </div>
        <img src='../../../img/rightArrow.png' id='imgRight' onClick={() => setCounter(++counter)} />
      </div>

    </div>

  )
}

export default Main;