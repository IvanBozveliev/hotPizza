import './Main.css';
import Card from './Card/Card.js';
import { useEffect, useState } from 'react';
import { carouselFunction } from './CarouselLogic.js';

let allCards = carouselFunction();

const Main = () => {

  let cards = allCards.slice(0, 3);

  let [state, setState] = useState(cards);
  let [counter, setCounter] = useState(0);
  let [prevCounter, setPrevCounter] = useState(0);
  let [style, setStyle] = useState('mainStyle');


  useEffect(() => {

    if (0 > counter || counter >= allCards.length) {
      return;
    } else {
      if (prevCounter < counter) {

        setStyle('rightStyle');
        setPrevCounter(counter);

      } else if (prevCounter > counter) {
        setStyle('leftStyle')
        setPrevCounter(counter);
      }

      setState(allCards[counter]);
    }



  }, [counter])



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

export default Main