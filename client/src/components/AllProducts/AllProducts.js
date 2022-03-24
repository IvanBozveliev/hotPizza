import './AllProducts.css';
import Card from '../Main/Card/Card';
import { getAllProducts } from '../../services/productServices.js';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../actions/productsActions';
import {connect} from 'react-redux';


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
  
  return (
    
    
    <div className='allLists'>
      <div className='gridDivList'>
   
        {props.products.data.length > 0 && props.products.data.map(product =><Card key={product._id} id={product._id} img={product.imageUrl} title={product.title} currentStyle='mainStyle' price={product.price} /> )} 
      </div>

    </div>

  )
}

const mapStateToProps = state => {
   return {
     products: state.products.products
   }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: dispatch(fetchProducts())
//   }
// }

// export default connect(state => ({products: state.shop.products}),{fetchProducts})(AllProducts)

// export default connect(mapStateToProps, {fetchProducts})(AllProducts);

export default connect(mapStateToProps,{fetchProducts})(AllProducts);