import React, { Component } from 'react';
import ProductSizes from '../../components/Product/ProductSizes';
import ProductDescription from '../../components/Product/ProductDescription';
import ProductDetail from '../../components/Product/ProductDetail';
import './styles.scss';

class Product extends Component {
  convertUnicode = input => {
    return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode).replace(/(?:\r\n|\r|\n)/g, '<br />');
    });
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product">
        <img src={product.productimage} alt="product"/>
        <span className="product__brand">{product.brand}</span>
        <span className="product__name">{product.productname}</span>
        <span className="product__seller">Vendido y entregado: <a href="#">{product.brand}</a></span>
        <ProductSizes sizes={product.sizes}/>
        <div className="product__share-buttons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
        <ProductDescription description={this.convertUnicode(product.description)} />
        <ProductDetail />
      </div>
    );
  }
}

export default Product;
