import './AllProducts.css';
import Card from '../Main/Card/Card';
import { getAllProducts } from '../../services/productServices.js';
import { useEffect, useState } from 'react';
import { AddCart } from '../../actions/cartActions';
import { fetchProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';


const AllProducts = (props) => {

  // const AllProducts = ({fetchProducts}) => {
  // let [state, setState] = useState([]);

  // useEffect(() => {
  //     getAllProducts() 
  //       .then(result => setState(result))
  // },[])


  useEffect(() => {

    props.fetchProducts()
  }, [])

  // props.products.isLoading.error

  const addToCartProd = (item) => {
     props.AddCart(item)
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
    products: state.myProducts.products
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: dispatch(fetchProducts())
//   }
// }

export default connect(mapStateToProps, { fetchProducts, AddCart })(AllProducts);