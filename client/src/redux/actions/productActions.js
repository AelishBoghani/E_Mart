import axios from 'axios'

export const getAllProducts=()=> async dispatch=>{
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    try{
        const response = await axios.get('/api/products/getallproducts')
        console.log(response);
        dispatch({type:'GET_PRODUCTS_SUCCESS', payload : response.data})
    }catch(error){
        dispatch({type:'GET_PRODUCTS_FAILED',payload: error})
    }
} 

export const filterProducts=(searchKey,category)=> async dispatch=>{

    var fliterproduct;
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    try{
        const response = await axios.get('/api/products/getallproducts')
        fliterproduct=response.data.filter(product=>product.name.toLowerCase().includes(searchKey))

        if(category!='all'){
            fliterproduct=response.data.filter(product=>product.category.toLowerCase()==category)
        }
        dispatch({type:'GET_PRODUCTS_SUCCESS', payload : fliterproduct})
    }catch(error){ 
        dispatch({type:'GET_PRODUCTS_FAILED',payload: error})
    }
}
export const addProduct=(product)=> async dispatch=>{
    dispatch({type:'ADD_PRODUCTS_REQUEST'})

    try{
        const response = await axios.post('/api/products/addproduct',{product})
        console.log(response);
        dispatch({type:'ADD_PRODUCTS_SUCCESS'})
        window.location.href='/admin/productlist'
    }catch(error){
        dispatch({type:'ADD_PRODUCTS_FAILED',payload: error})
    }
}



export const getProductById=(productid)=> async dispatch=>{
    dispatch({type:'GET_PRODUCTSBYID_REQUEST'})

    try{
        const response = await axios.post('/api/products/getproductbyid',{productid})
        console.log(response);
        dispatch({type:'GET_PRODUCTSBYID_SUCCESS', payload : response.data})
    }catch(error){
        dispatch({type:'GET_PRODUCTSBYID_FAILED',payload: error})
    }
}

export const editProduct=(editedproduct)=> async dispatch=>{
    dispatch({type:'EDIT_PRODUCTS_REQUEST'})

    try{
        const response = await axios.post('/api/products/editproduct',{editedproduct})
        console.log(response);
        dispatch({type:'EDIT_PRODUCTS_SUCCESS'})
        window.location.href='/admin/productlist'
    }catch(error){
        dispatch({type:'EDIT_PRODUCTS_FAILED',payload: error})
    }
}
export const deleteProduct=(productid)=> async dispatch=>{
    
    try{
        const response = await axios.post('/api/products/deleteproduct',{productid})
        alert('product Deleted Successfully')
        console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something Went Wrong')
    }
}