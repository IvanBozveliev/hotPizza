import './Main.css';
import Card from './Card/Card.js';
import { getAllProducts } from '../../services/productServices.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

let index = 0;
let cards = [];

const Main = () => {
  let [state, setState] = useState([]);
  let [counter, setCounter] = useState(0);
  let [prevCounter, setPrevCounter] = useState(0);
  let [style, setStyle] = useState('mainStyle');


  useEffect(() => {

    getAllProducts()
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
    <>
    
      <div className='carousel'>
        <img id='imgLeft' src='../../../img/leftArrow.png' onClick={() => setCounter(--counter)} />

        <div className='gridDiv'>
          {state.map(x => <Card key={x._id} id={x._id} img={x.imageUrl} title={x.title} currentStyle={style} price={x.price} />)}
        </div>
        <img src='../../../img/rightArrow.png' id='imgRight' onClick={() => setCounter(++counter)} />
      </div>
      <div id='divList'><Link to='all-products' id='list'>All Products</Link></div>
      
    </>


  )
}

export default Main;