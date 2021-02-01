import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions/productActions";
import Product from "./Product";

class ProductEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      image: "",
      name: "",
      price: ""
    };
  }

  componentDidMount() {
    let product = this.props.product;
    this.setState({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const id = this.state.id;
    const image = this.state.image;
    const name = this.state.name;

    const price = this.state.price;

    const product = {
      id,
      image,
      name,
      price
    };
    this.props.editProduct(product);
  };

  render() {
    return (
      <div className="container">
        <h3>Edit </h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label> Image </label>
            <img src={this.state.image.includes("base64") ? this.state.image : "./images/" + this.state.image} width="100px" height="100px"></img>
            <input
              type="file"
              className="form-control"
              onChange={e => {
                var FR = new FileReader();

                FR.addEventListener("load", e => {
                  console.log(e.target.result)
                  this.setState({ image: e.target.result });
                });

                FR.readAsDataURL(e.target.files[0]);

              }}
            />
          </div>
          <div className="form-group">
            <label> Product Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Price </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={e => {
                this.setState({ price: e.target.value });
              }}
            />
          </div>

          <button className="btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productReducer.product
});

export default connect(
  mapStateToProps,
  { editProduct }
)(ProductEdit);
