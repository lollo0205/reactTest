import { Component } from 'react'
import RegisterUser from '../user/register/registerUser'
export default class Navbar extends Component {
  state = {
    showModal: false,
    toggle: {
      userOption: false,
      registerModal: false,
      loginModal: false
    },
  }
  handleToggle = whatToggle => {
    console.log(whatToggle);
    const toggle = { ... this.state.toggle };
    toggle[whatToggle] = !toggle[whatToggle];
    this.setState({ toggle })
  }

  render() {
    const toggleUserOption = `dropdown-menu cursor-pointer${this.state.toggle.userOption ? " show" : ""}`;
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Fullstack Hardware</span>
            <div className='d-flex row'>
              <div className='col'>
                <div className="dropdown">
                  <span>
                    <i
                      className="bi bi-person cursor-pointer dropdown-toggle text-white "
                      onClick={() => this.handleToggle('userOption')}
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    </i>
                  </span>
                  <ul className={toggleUserOption} aria-labelledby="dropdownMenuButton1">
                    <li><span className='dropdown-item' onClick={() => this.handleToggle('registerModal')}>Register</span></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div className='col me-3'>
                <span className="float-right text-white cursor-pointer" onClick={this.props.onShowModal}>Cart
                  <span className=" badge rounded-pill bg-danger position-absolute" style={{ padding: '0.1em 0.3em' }}>
                    {this.props.totalProductOnCart}
                  </span>
                </span>
              </div>
            </div>

          </div>
        </nav>
        {this.state.toggle.registerModal && <RegisterUser onCloseModalRegister={() => this.handleToggle('registerModal')} />}
      </>
    )
  }
}
