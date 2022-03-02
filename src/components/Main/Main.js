import './Main.css';
import Card from './Card/Card.js';
import { useState } from 'react';

const Main = () => {
  
  const cardsInfo = [
     {id: 1, img: '../../../img/pizza5.png', title: 'pizza' },
     {id: 2, img: '../../../img/pizza8.png', title: 'pizza1' },
     {id: 3, img: '../../../img/pizza6.png', title: 'pizza2' },
     {id: 4, img: '../../../img/pizza10.png', title: 'pizza3' },
     {id: 5, img: '../../../img/pizza11.png', title: 'pizza4' },
     {id: 6, img: '../../../img/pizza12.png', title: 'pizza5' }
  ]
  
  let cards = cardsInfo.slice(0,3);

  let [state, setState] = useState(cards);
  let [style, setStyle] = useState('mainStyle');

  const leftClick = (e) => {
     setStyle('leftStyle')
     let cards = cardsInfo.slice(0, 3);
     setState(cards)
     
  }

  const rightClick = () => {
    setStyle('rightStyle')
    let cards = cardsInfo.slice(3, 6);
    setState(cards)
    
 }

  return (
    <div className='container'>
     <img id='imgLeft' src='../../../img/arrowsleft.png' onClick={leftClick}/>
     
    <div className='gridDiv'>
      {state.map(x => <Card key={x.id} img={x.img} title={x.title} currentStyle={style} /> )} 
    </div>
    <img src='../../../img/arrowr.png' id='imgRight' onClick={rightClick}/>
    </div>
   
  )
}

export default Main