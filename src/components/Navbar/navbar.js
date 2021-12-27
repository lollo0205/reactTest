import { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LoginUser from '../user/login/loginUser';
import RegisterUser from '../user/register/registerUser'
export default class NavbarComponent extends Component {
  state = {
    toggle: {
      registerUserModal: false,
      loginUserModal: false
    },
  }
  handleToggle = whatToggle => {
    const toggle = { ...this.state.toggle };
    toggle[whatToggle] = !toggle[whatToggle];
    this.setState({ toggle })
  }

  render() {
    const iconUser = <i
      className="bi bi-person cursor-pointer text-white"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
    </i>;
    const cartIcon = <span className="float-right text-white cursor-pointer" onClick={this.props.onShowModal}>Cart
      <span className=" badge rounded-pill bg-danger position-absolute" style={{ padding: '0.1em 0.3em' }}>
        {this.props.totalProductOnCart}
      </span>
    </span>;
    return (
      <>
        {<RegisterUser show={this.state.toggle.registerUserModal} onShowModal={() => this.handleToggle('registerUserModal')} />}
        {<LoginUser show={this.state.toggle.loginUserModal} onShowModal={() => this.handleToggle('loginUserModal')} />}

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Fullstack Hardware</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <NavDropdown className='text-white' title={iconUser} id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={() => this.handleToggle('registerUserModal')} >Register</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.handleToggle('loginUserModal')}>Login</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='me-4' eventKey={2} >
                  {cartIcon}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
