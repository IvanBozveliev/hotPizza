import './Main.css';
import Card from './Card/Card.js';
import AllProducts from '../AllProducts/AllProducts.js';
import { useEffect, useState } from 'react';

import { addCart } from '../../actions/cartActions';
import { fetchProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';

let index = 0;
let cards = [];

const Main = (props) => {

  let [show, setShow] = useState(false);
  let [state, setState] = useState([]);
  let [counter, setCounter] = useState(0);
  let [prevCounter, setPrevCounter] = useState(0);
  let [style, setStyle] = useState('mainStyle');

  useEffect(() => {


    props.fetchProducts();



    (() => {
      let cardsInfo = props.products.data;

      while (index < cardsInfo.length) {

        cards.push(cardsInfo.slice(index, index + 3));
        index += 3;
      }

      if (0 > counter) {

        setCounter(0);
        return;
      }
      if (counter >= cards.length) {
        setCounter(cards.length - 1);
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
    })()

  }, [counter, prevCounter])


  const addToCartProd = (item) => {

    props.addCart(item)
  }

  return (
    <>

      <div className='carousel'>
        <img id='imgLeft' src='../../../img/leftArrow.png' onClick={() => setCounter(--counter)} />

        <div className='gridDiv'>

          {state !== undefined && state.length > 0 && state.map(x => <Card key={x._id} currentStyle={style} data={x} addToCart={addToCartProd} />)}

        </div>
        <img src='../../../img/rightArrow.png' id='imgRight' onClick={() => setCounter(++counter)} />
      </div>
      <div id='divList' onClick={() => show ? setShow(false) : setShow(true)}>All Products</div>
      {show ? <AllProducts /> : ''}
      <div id='allProductsDiv'><AllProducts /></div>
    </>


  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}


export default connect(mapStateToProps, { fetchProducts, addCart })(Main)