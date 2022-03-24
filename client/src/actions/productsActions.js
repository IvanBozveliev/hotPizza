import * as productService from '../services/productServices';

export const fetchProducts = () => {
    return async dispatch => {

        try{
            // dispatch(fetchProductsLoading)
            let products = await productService.getAllProducts();
           
            dispatch(fetchProductsSuccess(products))
        }catch(error){
            dispatch(fetchProductsError(error))
        }
    }
}

const fetchProductsSuccess = products => {
  
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
}

const fetchProductsError = error =>{
    return {
        type: 'FETCH_PRODUCTS_ERROR',
        error
    }
}


