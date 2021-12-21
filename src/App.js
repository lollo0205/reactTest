import { Component } from "react";
import Card from "./components/card/card";
import CartModal from "./components/cart/CartModal";
import Navbar from "./components/Navbar/navbar";
import { cards, cart } from "./mock";

class App extends Component {
  state = {
    cards,
    cart,
    showModal: false
  }


  handleShowModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal })
  }
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  handleAddProduct = productToInsert => {
    const cart = { ...this.state.cart }
    const IndexSearched = cart.products.findIndex(product => productToInsert.id === product.id);
    if (IndexSearched > -1) {
      cart.products[IndexSearched].qta++
      cart.products[IndexSearched].partialPrice = cart.products[IndexSearched].qta * productToInsert.price
      cart.totalProducts++
      cart.amount += productToInsert.price
    } else {
      cart.products.push({
        id: productToInsert.id,
        qta: 1,
        priceSinglePiece: productToInsert.price,
        partialPrice: productToInsert.price
      })
      cart.totalProducts++;
      cart.amount += productToInsert.price
    }
    this.setState({ cart });
  }
  render() {

    return (
      <>
        <Navbar
          totalProductOnCart={this.state.cart.totalProducts}
          onShowModal={this.handleShowModal}
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
        <section>
          {this.state.showModal && <CartModal onShowModal={this.handleShowModal} />}

        </section>
      </>
    );
  }

}

export default App;