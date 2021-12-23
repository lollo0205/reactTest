import { Component } from 'react'
export default class RegisterUser extends Component {
  render() {
    return (
      <div className="modal show fade d-block" id="cartModal" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">Register</h5>
              <button type="button" className="btn-close" onClick={this.props.onCloseModalRegister}></button>
            </div>
            <div className="modal-body">
              questo è il corpo della registrazione
            </div>
          </div>
        </div>
      </div>
    )
  }
}