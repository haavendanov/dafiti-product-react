import React, { PureComponent } from 'react';
import './styles.scss';

class ProductDetail extends PureComponent {
  state = {
    open: false,
  }; 

  handleTabStatus = () => {
    const { open } = this.state;
    this.setState({open: !open})
  }

  render() {
    const { detail } = this.props;
    const { open } = this.state;
    return (
      <div className="product-detail">
        <div className="product-detail__label" onClick={this.handleTabStatus}>
          <span>DETALLE DEL PRODUCTO</span>
          {open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </div>
        {open && (
          <div className="product-detail__text">
            <div dangerouslySetInnerHTML={{ __html: detail }}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetail;
