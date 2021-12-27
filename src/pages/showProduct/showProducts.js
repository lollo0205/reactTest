import { Component } from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { cards } from "../../mock";
export default class ShowProducts extends Component {
  state = {
    cards
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  handleAddProduct = productToInsert => {
    const cart = { ...this.props.cart };
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
    this.props.onChangeCart(cart)
  }
  render() {
    return (
      <>
        <Container>
          <h1> Quale componente desideri acquistare?</h1>
          <hr />
          <Row>
            {this.state.cards.map((card, idx) => (
              <Col key={idx} lg={4} className="mt-2">
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
                    <Button variant="primary" className="me-2" onClick={() => this.handleAddProduct(card)}>add cart</Button>
                    <Button variant="danger" disabled onClick={() => this.handleDelete(card.id)}>delete</Button>
                  </Card.Body>
                </Card>
              </Col>

            ))}
          </Row>
        </Container>
      </>
    )
  }
}