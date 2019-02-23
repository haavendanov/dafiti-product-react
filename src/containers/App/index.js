import React, { Component } from 'react';
import './styles.scss';
import file from '../../detalle.json';
import Product from '../Product';

class App extends Component {
  render() {
    return (
      <div>
        {file.products.map(product => <Product product={product} key={product.id}/>)}
      </div>
    );
  }
}

export default App;
