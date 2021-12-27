import { Component } from "react";
import { Container } from "react-bootstrap";
import CartModal from "./components/cart/CartModal";
import NavbarComponent from "./components/Navbar/navbar";
import { cart } from "./mock";
import {
  Routes,
  Route,
} from "react-router-dom"; import About from "./pages/about/about";
import ShowProducts from "./pages/showProduct/showProducts";
import Contacts from "./pages/contacts/contacts";
class App extends Component {
  state = {
    cart,
    showCartModal: false
  }
  handleChangeCart = (cart) => {
    this.setState({ cart });
  }
  render() {

    return (
      <>
        <NavbarComponent
          totalProductOnCart={this.state.cart.totalProducts}
          onShowModal={() => this.setState({ showCartModal: !this.state.showCartModal })}
        />
        <Container>
          <Routes>
            <Route exact path="/" element={<ShowProducts cart={this.state.cart} onChangeCart={this.handleChangeCart} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shopping" element={<ShowProducts />} />
            <Route exact path="/contacts" element={<Contacts />} />

          </Routes>
        </Container>
        <CartModal
          onShowModal={() => this.setState({ showCartModal: !this.state.showCartModal })}
          onChangeCart={this.handleChangeCart}
          cart={this.state.cart}
          show={this.state.showCartModal}
        />
      </>
    );
  }

}

export default App;