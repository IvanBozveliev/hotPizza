import './AllProducts.css';
import Card from '../Main/Card/Card';
import { useEffect, useState } from 'react';
import { addCart } from '../../actions/cartActions';
import { fetchProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';


const AllProducts = (props) => {

  useEffect(() => {

    props.fetchProducts()
  }, [])

  // props.products.isLoading.error

  const addToCartProd = (item) => {
    props.addCart(item)
  }

  return (


    <div className='allLists'>
      <div className='gridDivList'>
        {props.products.data.length > 0 && props.products.data.map(product => <Card key={product._id} data={product} currentStyle='mainStyle' addToCart={addToCartProd} />)}
      </div>

    </div>

  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchProducts, addCart })(AllProducts);