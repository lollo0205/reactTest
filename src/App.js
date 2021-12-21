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

  handleChangeQtaProductCart = (op, idProductsCart) => {
    const cart = { ...this.state.cart };
    const IndexProduct = cart.products.findIndex(product => product.id === idProductsCart);
    op === '-' ? cart.products[IndexProduct].qta-- : cart.products[IndexProduct].qta++;
    console.log('IndexProduct', IndexProduct);
    console.log('prodtqta', cart.products[IndexProduct].qta);
    // console.log('cartslice', cart.products.slice(IndexProduct));
    cart.products[IndexProduct].qta === 0
      ? cart.products.splice(IndexProduct, 1)
      : cart.products[IndexProduct].partialPrice = cart.products[IndexProduct].qta * cart.products[IndexProduct].priceSinglePiece;
    console.log(cart.products)
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
          {this.state.showModal &&
            <CartModal
              onShowModal={this.handleShowModal}
              onChangeQtaProductCart={this.handleChangeQtaProductCart}
              cart={this.state.cart}
            />}

        </section>
      </>
    );
  }

}

export default App;