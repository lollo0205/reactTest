import { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
export default class RegisterUser extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="form.ControlName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="ex. Mario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.ControlSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="ex. Rossi" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.ControlEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="ex. mario.rossi@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.ControlPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="ex. aeifszhzdiuoarws" />
            </Form.Group>
          </Form>
        </ Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onShowModal}>
            Close
          </Button>
          <Button variant="success" onClick={this.props.onShowModal}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}