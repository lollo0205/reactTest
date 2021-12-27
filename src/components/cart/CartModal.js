import { Component } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import CartProductDetails from "./cartProductDetails/CartProductDetails";
export default class CartModal extends Component {
  state = {
    show: false
  }
  onChangeQtaProductCart = (op, idProductCart) => {
    this.props.onChangeQtaProductCart(op, idProductCart)
  }
  //   getCartProductDetails = products => {
  //     const element = <section>
  // {      this.props.cart.products.map(product => (
  //       <CartProductDetails
  //         key={product.id}
  //         product={product}
  //         onChangeQtaProductCart={this.onChangeQtaProductCart}
  //       />
  //       ))}
  //       <li></li>
  //     </section>


  //   }
  getCartProductsDetails = cart => {
    const element = <>
      {cart.products.map(product => (
        <CartProductDetails
          key={product.id}
          product={product}
          onChangeQtaProductCart={this.onChangeQtaProductCart}
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
          <Button variant="primary" onClick={this.props.onShowModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}