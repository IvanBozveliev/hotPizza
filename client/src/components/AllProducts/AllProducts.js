import './AllProducts.css';
import Card from '../Main/Card/Card';
import { getAllProducts } from '../../services/productServices.js';
import { useEffect, useState } from 'react';

const AllProducts = () => {
  let [state, setState] = useState([]);


  useEffect(() => {

    getAllProducts()
      .then(cardsInfo => {
        setState(cardsInfo)
      })
  }, [])

  return (


    <div className='allLists'>
      <div className='gridDivList'>
        {state.map(x => <Card key={x._id} id={x._id} img={x.imageUrl} title={x.title} currentStyle='mainStyle' price={x.price} />)}
      </div>

    </div>


  )
}

export default AllProducts;