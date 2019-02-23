import React, { PureComponent } from 'react';
import './styles.scss';

class ProductSizes extends PureComponent {
  render() {
    const { sizes } = this.props;
    return (
      <div className="product-sizes">
        <span className="product-sizes__label">TALLA</span>
        <div className="product-sizes__row">
          {sizes.map(size => (
            <div className="product-sizes__row__size" key={size.id}>{size.size}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductSizes;
