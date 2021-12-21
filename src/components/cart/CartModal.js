import { Component } from "react";
import CartProductDetails from "./productDetails/CartProductDetails";
export default class CartModal extends Component {
  onChangeQtaProductCart = (op, idProductCart) => {
    this.props.onChangeQtaProductCart(op, idProductCart)
  }
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
              <ul className="list-group list-group-flush">
                {this.props.cart.products.map(product => (
                  <CartProductDetails
                    key={product.id}
                    product={product}
                    onChangeQtaProductCart={this.onChangeQtaProductCart}
                  />
                ))}
                <li className="list-group-item">

                  <div className="row">
                    {this.props.cart.products.length > 0 &&
                      <div className="col d-flex justify-content-center">
                        <button type="button" className="btn btn-primary">
                          CHECKOUT
                        </button>
                      </div>}
                    <div className="col d-flex justify-content-center">
                      <button type="button" className="btn btn-danger" onClick={this.props.onShowModal}>
                        EXIT
                      </button>
                    </div>
                    <div className="col d-flex flex-row-reverse">
                      {this.props.cart.amount} €
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}