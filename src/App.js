import React from "react";
import ProductTable from "./components/ProductTable";
import AddProductModal from "./components/AddProductModal";
import { Container, Row, Col } from "react-bootstrap";
import {products} from './data/products'
import Context from "./hook/Context";

function App() {
  const state = React.useContext(Context)
  const { productInput, products } = state.state

  return (
    <div className="App">
      <Container fluid="md">
        <Row style={{ display: 'flex', justifyContent: 'end', marginTop: '50px'}}>
          <AddProductModal reducer={state}/>
        </Row>
        <Row>
          <ProductTable products={products}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
