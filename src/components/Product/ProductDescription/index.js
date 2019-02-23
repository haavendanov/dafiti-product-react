import React, { PureComponent } from 'react';
import './styles.scss';

class ProductDescription extends PureComponent {
  state = {
    open: false,
  }; 

  handleTabStatus = () => {
    const { open } = this.state;
    this.setState({open: !open})
  }

  render() {
    const { description } = this.props;
    const { open } = this.state;
    return (
      <div className="product-description">
        <div className="product-description__label" onClick={this.handleTabStatus}>
          <span>DESCRIPCIÓN</span>
          {open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </div>
        {open && (
          <div className="product-description__text">
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDescription;
