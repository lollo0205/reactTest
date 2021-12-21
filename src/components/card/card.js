import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col col-lg-4 mb-2">
        <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
          <img src={this.props.card.image} className="card-img-top mx-auto d-block" style={{ height: '10rem', width: '17rem' }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.card.name}</h5>
            <p className="card-text">{this.props.card.price}€</p>
            <p className="card-text bold"><b>Stock:</b> {this.props.card.qtaStock}</p>
            <button className="btn btn-primary me-2" onClick={() => this.props.onAddProducts(this.props.card)}>add cart</button>
            <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.card.id)}>delete</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Card;