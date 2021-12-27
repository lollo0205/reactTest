import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartModal from "./components/cart/CartModal";
import NavbarComponent from "./components/Navbar/navbar";
import { cards, cart } from "./mock";
class App extends Component {
  state = {
    cards,
    cart,
    showCartModal: false
  }

  handleChangeQtaProductCart = (op, idProductsCart) => {
    const cart = { ...this.state.cart };
    const IndexProduct = cart.products.findIndex(product => product.id === idProductsCart);
    if (op === '-') {
      cart.products[IndexProduct].qta -= 1;
      cart.totalProducts = cart.totalProducts === 0 ? cart.totalProducts : cart.totalProducts - 1;
    } else {
      cart.products[IndexProduct].qta += 1;
      cart.totalProducts++;
    }
    cart.products[IndexProduct].qta === 0
      ? cart.products.splice(IndexProduct, 1)
      : cart.products[IndexProduct].partialPrice = cart.products[IndexProduct].qta * cart.products[IndexProduct].priceSinglePiece;
    cart.amount = cart.products.map(product => product.partialPrice).reduce((partial_sum, a) => partial_sum + a, 0);
    this.setState({ cart });
  }
  handleShowModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
  }
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  handleAddProduct = productToInsert => {
    const cart = { ...this.state.cart };
    const IndexSearched = cart.products.findIndex(product => productToInsert.id === product.id);
    if (IndexSearched > -1) {
      cart.products[IndexSearched].qta++;
      cart.products[IndexSearched].partialPrice = cart.products[IndexSearched].qta * productToInsert.price;
      cart.totalProducts++;
    } else {
      cart.products.push({
        id: productToInsert.id,
        name: productToInsert.name,
        qta: 1,
        priceSinglePiece: productToInsert.price,
        partialPrice: productToInsert.price
      })
      cart.totalProducts++;
    }
    cart.amount = cart.products.map(product => product.partialPrice).reduce((partial_sum, a) => partial_sum + a, 0);
    this.setState({ cart });
  }

  calculateAmount(products) {

  }
  render() {

    return (
      <>
        <NavbarComponent
          totalProductOnCart={this.state.cart.totalProducts}
          onShowModal={() => this.setState({ showCartModal: !this.state.showCartModal })}
        />
        <Container>
          <h1> Quale componente desideri acquistare?</h1>
          <hr />
          <Row>
            {this.state.cards.map(card => (
              <Col lg={4} className="mb-2">
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                  <Card.Img className="mx-auto d-block" style={{ height: '10rem', width: '17rem' }} variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                      {card.price}€
                    </Card.Text>
                    <Card.Text>
                      <b>Stock:</b> {card.qtaStock}
                    </Card.Text>
                    <Button variant="primary" className="me-2" onClick={() => this.props.handleAddProduct(card)}>add cart</Button>
                    <Button variant="danger" onClick={() => this.props.handleDelete(card.id)}>delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <CartModal
          onShowModal={() => this.setState({ showCartModal: !this.state.showCartModal })}
          onChangeQtaProductCart={this.handleChangeQtaProductCart}
          cart={this.state.cart}
          show={this.state.showCartModal}
        />
      </>
    );
  }

}

export default App;