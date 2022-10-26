import React from 'react';
import {Table} from 'react-bootstrap';
import './index.css'
import Product from '../Product';

function ProductTable({products}) {
  // console.log(products)
  return (
    <> 
      <Table striped className="w-100">
      <thead>
        <tr>
          <th style={{width: '20%'}}>ID</th>
          <th style={{width: '20%'}}>Name</th>
          <th style={{width: '20%'}}>GPA</th>
          <th style={{width: '20%'}}></th>
          <th style={{width: '20%'}}></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => <Product key={index} product={product} index={index}/>)}
      </tbody>
    </Table>
    </>
  );
}

export default ProductTable;
