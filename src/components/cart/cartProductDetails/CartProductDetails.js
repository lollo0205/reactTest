import { Component } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

export default class CartProductDetails extends Component {

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            {this.props.product.name}
          </Col>
          <Col >
            <Row >
              <Col className=" d-flex flex-row-reverse">
                <i className=" cursor-pointer bi bi-bag-dash-fill" onClick={() => this.props.onChangeQtaProductCart('-', this.props.product.id)}></i>
              </Col>
              <Col className=" d-flex flex-row-reverse">
                <span>{this.props.product.qta}</span>
              </Col>
              <Col className=" d-flex flex-row-reverse">
                <i className="cursor-pointer bi bi-bag-plus-fill" onClick={() => this.props.onChangeQtaProductCart('+', this.props.product.id)}></i>
              </Col>
            </Row>
          </Col>
          <Col className=" d-flex flex-row-reverse">
            {this.props.product.qta * this.props.product.priceSinglePiece} €
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}