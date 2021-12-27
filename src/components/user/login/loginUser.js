import React, { Component } from "react"
import { Button, Form, Modal } from 'react-bootstrap'

export default class LoginUser extends Component {
  state = {
    formLoginValid: false
  }
  constructor(props) {
    super(props);
    this.loginFormRefs = React.createRef();
  }
  handleSubmit = (event) => {
    if (!this.loginFormRefs.current.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ formLoginValid: true });
  };

  render() {

    return (
      <Modal show={this.props.show} onHide={this.props.onShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={this.state.formLoginValid} onSubmit={this.handleSubmit} ref={this.loginFormRefs} >
            <Form.Group className="mb-3" controlId="form.ControlName">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="ex. Mario" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.ControlSurname">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.onChange}
                minLength={5}
                maxLength={8}
                type="password"
                placeholder="ex. Rossi" />
            </Form.Group>
          </Form>
        </ Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="danger" onClick={this.props.onShowModal}>
            Close
          </Button>
          <Button type="submit" variant="success" onClick={this.handleSubmit} >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}