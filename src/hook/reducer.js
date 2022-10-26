import { products } from '../data/products'
import * as instant from './instant'

export const initState = {
  productInput: {
    id: '',
    name: '',
    gpa: ''
  },
  products
}

const reducer = (state, action) => {
  switch(action.type){
    case instant.set_productInput:
      return {
        ...state,
        productInput: action.payload
      }
    case instant.set_product: 
      return {
        ...state,
        productInput: action.payload
      }
    case instant.add_product:
      return {
        ...state,
        products: action.payload
      }
    case instant.delete_product:
      return {
        ...state,
        products: action.payload
      }
    case instant.update_product:
      return {
        ...state,
        products: action.payload
      }
    default: return state
  }
}

export default reducer