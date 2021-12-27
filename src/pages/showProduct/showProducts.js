import { Component } from "react";
import Card from '../../components/card/card';
import { cards } from "../../mock";
export default class ShowProducts extends Component {
  state = {
    cards
  }
  handleChangeQtaProductCart = (op, idProductsCart) => {
    const cart = { ...this.props.cart };
    const IndexProduct = cart.products.findIndex(product => product.id === idProductsCart);
    op === '-' ? cart.products[IndexProduct].qta-- : cart.products[IndexProduct].qta++;
    cart.products[IndexProduct].qta === 0
      ? cart.products.splice(IndexProduct, 1)
      : cart.products[IndexProduct].partialPrice = cart.products[IndexProduct].qta * cart.products[IndexProduct].priceSinglePiece;
    cart.amount = cart.products.map(product => product.partialPrice).reduce((partial_sum, a) => partial_sum + a, 0);
    this.setState({ cart });
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
    this.setState({ cart });
  }
  render() {
    return (
      <>
        <h1>HELLo I'M SHOWPRODUCTS</h1>
        <div className="container">
          <h1> Quale componente desideri acquistare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                onDelete={this.handleDelete}
                onAddProducts={this.handleAddProduct}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}