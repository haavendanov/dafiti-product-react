import React, { Component } from 'react';
import ProductSizes from '../../components/Product/ProductSizes';
import ProductDescription from '../../components/Product/ProductDescription';
import ProductDetail from '../../components/Product/ProductDetail';
import './styles.scss';

class Product extends Component {
  state = {
    favorite: false,
  }; 

  convertUnicode = input => {
    return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode).replace(/(?:\r\n|\r|\n)/g, '<br />');
    });
  }

  handleFavoriteClick = () => {
    const { favorite } = this.state;
    this.setState({favorite: !favorite})
  }

  render() {
    const { product } = this.props;
    const { favorite } = this.state;
    return (
      <div className="product">
        <img src={product.productimage} alt="product"/>
        <div className="product__information">
          <div>
            <span className="product__information__brand">{product.brand}</span>
            <span className="product__information__name">{product.productname}</span>
            <span className="product__information__seller">Vendido y entregado: <a href="#">{product.brand}</a></span>
          </div>
          { favorite ? <i className="fas fa-heart" onClick={this.handleFavoriteClick}></i> : <i className="far fa-heart" onClick={this.handleFavoriteClick}></i>}
        </div>
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
