import { Component } from 'react'
export default class Navbar extends Component {
  state = {
    showModal: false,
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Fullstack Hardware</span>
            <span className="float-right text-white" style={{ cursor: 'pointer' }} onClick={this.props.onShowModal}>Cart
              <span className=" badge rounded-pill bg-danger">
                {this.props.totalProductOnCart}
                <span className="visually-hidden">unread messages</span>
              </span>
            </span>
          </div>
        </nav>

      </>
    )
  }
}
