import { Component } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import CartProductDetails from "./cartProductDetails/CartProductDetails";
export default class CartModal extends Component {
  state = {
    show: false
  }

  handleChangeQtaProductCart = (op, idProductsCart) => {
    const cart = { ...this.props.cart };
    const IndexProduct = cart.products.findIndex(product => product.id === idProductsCart);
    if (op === '-') {
      if (cart.products[IndexProduct].qta === 1) {
        cart.products.splice(IndexProduct, 1);
      } else {
        cart.products[IndexProduct].qta -= 1;
        cart.products[IndexProduct].partialPrice = cart.products[IndexProduct].qta * cart.products[IndexProduct].priceSinglePiece;
      }
      cart.totalProducts -= 1;
    } else {
      cart.products[IndexProduct].qta += 1;
      cart.products[IndexProduct].partialPrice = cart.products[IndexProduct].qta * cart.products[IndexProduct].priceSinglePiece;
      cart.totalProducts += 1;

    }
    cart.amount = cart.products.map(product => product.partialPrice).reduce((partial_sum, a) => partial_sum + a, 0);
    this.props.onChangeCart(cart)
  }
  getCartProductsDetails = cart => {
    const element = <>
      {cart.products.map(product => (
        <CartProductDetails
          key={product.id}
          product={product}
          onChangeQtaProductCart={this.handleChangeQtaProductCart}
        />
      ))}
      <ListGroup.Item className="col d-flex flex-row-reverse">
        {this.props.cart.amount} €
      </ListGroup.Item>
    </>
      ;
    return element;
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {this.props.cart.products.length > 0
              ? this.getCartProductsDetails(this.props.cart)
              : <h5 className="text-danger">Non ci sono prodotti nel carrello</h5>
            }
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onShowModal}>
            Close
          </Button>
          <Button variant="success" onClick={this.props.onShowModal}>
            checkout
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}