export const getAllProductReducer=(state={products:[]},action)=>{
 switch (action.type) {
     case 'GET_PRODUCTS_REQUEST': return{
         loading:true,
         ...state
     }
     case 'GET_PRODUCTS_SUCCESS': return{
        loading:false,
        products: action.payload
     }
    case 'GET_PRODUCTS_FAILED': return{
        loading:false,
        error : action.payload
    }    
     default:
         return state;
 }
}
export const addProductReducer=(state={},action)=>{
 switch (action.type) {
     case 'ADD_PRODUCTS_REQUEST': return{
         loading:true,
         ...state
     }
     case 'ADD_PRODUCTS_SUCCESS': return{
        loading:false,
        success: true
     }
    case 'ADD_PRODUCTS_FAILED': return{
        loading:false,
        error : action.payload
    }    
     default:
         return state;
 }
}
export const editProductReducer=(state={},action)=>{
 switch (action.type) {
     case 'EDIT_PRODUCTS_REQUEST': return{
         editloading:true,
         ...state
     }
     case 'EDIT_PRODUCTS_SUCCESS': return{
        editloading:false,
        editsuccess: true
     }
    case 'EDIT_PRODUCTS_FAILED': return{
        editloading:false,
        editerror : action.payload
    }    
     default:
         return state;
 }
}

export const getProductByIdReducer=(state={},action)=>{
    switch (action.type) {
        case 'GET_PRODUCTSBYID_REQUEST': return{
            loading:true,
            ...state
        }
        case 'GET_PRODUCTSBYID_SUCCESS': return{
           loading:false,
           pizza: action.payload
        }
       case 'GET_PRODUCTSBYID_FAILED': return{
           loading:false,
           error : action.payload
       }    
        default:
            return state;
    }
}