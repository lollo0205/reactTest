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
  handleAddProduct = productToInsert => {
    const cart = JSON.parse(JSON.stringify(this.state.cart))
    const IndexSearched = cart.products.findIndex(product => productToInsert.id === product.id);
    console.log('IndexSearched', IndexSearched);
    if (IndexSearched > -1) {
      console.log('true')
      cart.products[IndexSearched].qta++
      cart.products[IndexSearched].partialPrice = cart.products[IndexSearched].qta * productToInsert.price
      cart.totalProducts++
      cart.amount += productToInsert.price
      console.log('true', cart)
    } else {
      console.log('false')
      cart.products.push({
        id: productToInsert.id,
        qta: 1,
        priceSinglePiece: productToInsert.price,
        partialPrice: productToInsert.price
      })
      cart.totalProducts++;
      cart.amount += productToInsert.price
      console.log('cart false', cart)
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