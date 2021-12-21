import { Component } from "react";
class CartModal extends Component {
  render() {
    return (
      <div className="modal show fade d-block" id="cartModal" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">Cart</h5>
              <button type="button" className="btn-close" onClick={this.props.onShowModal}></button>
            </div>
            <div className="modal-body">
              ...
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartModal