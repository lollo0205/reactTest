import { Component } from "react";

export default class CartProductDetails extends Component {
  onChangeQtaProductCart = (op, idProductCart) => {
    this.props.onChangeQtaProductCart(op, idProductCart)
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            {this.props.product.name}
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <i className=" cursor-pointer bi bi-bag-plus-fill" onClick={() => this.onChangeQtaProductCart('+', this.props.product.id)}></i>
              </div>
              <div className="col">
                <span>{this.props.product.qta}</span>
              </div>
              <div className="col">
                <i className=" cursor-pointer bi bi-bag-dash-fill" onClick={() => this.onChangeQtaProductCart('-', this.props.product.id)}></i>
              </div>
            </div>
          </div>
          <div className="col d-flex flex-row-reverse">
            {this.props.product.qta * this.props.product.priceSinglePiece} €
          </div>
        </div>
      </li>
    )
  }
}