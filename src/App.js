import { Component } from "react";
import Card from "./components/card/card";
import Navbar from "./components/Navbar/navbar";
import { cards, cart } from "./mock";

class App extends Component {
  state = {
    cards,
    cart
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  handleAddProduct = product => {
    const cart = JSON.parse(JSON.stringify(this.state.cart))
    const IndexSearched = cart.products.findIndex(product => product);
    if (IndexSearched > -1) {
      cart.products[IndexSearched].qta++
      cart.products[IndexSearched].partialPrice = cart.products[IndexSearched].qta++ * product.price
      cart.totalProducts++
      cart.amount = cart.amount + product.price
    } else {
      const productToAdd = {
        id: product.id,
        qta: product.qta,
        priceSinglePiece: product.price,
        partialPrice: product.price
      }
      cart.products.push(productToAdd)
    }
    this.setState({ cart });
  }
  render() {
    console.log('render')
    return (
      <>
        <Navbar
          totalProductOnCart={this.state.cart.totalProducts}
        />
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
    );
  }

}

export default App;