import ProductModal from "../ProductModal";
import {Button} from '@mui/material'
import Context from "../../hook/Context";
import {useContext} from 'react'
import * as actions from '../../hook/actions'
function Product({product, index}) {
  const context = useContext(Context)
  const {state, dispatch} = context
  
  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.gpa}</td>
        <td><ProductModal product={product}/></td>
        <td><Button sx={{ width: '100px', color: 'white', backgroundColor: 'blue'}} onClick={() => {
          dispatch(actions.deleteProduct(product, state.products))
        }}>Delete</Button></td>
      </tr>
    </>
  );
}

export default Product;
