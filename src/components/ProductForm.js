import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/productActions";
import "bootstrap/dist/css/bootstrap.css";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    const image = this.state.image;
    const name = this.getname.value;

    const price = this.getprice.value;

    const product = { image: image, name: name, price: price };

    this.props.addProduct(product);
    this.props.AddClicked();
  };

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>Image</label>
              <br />
              <img src={this.state.image ? (this.state.image.includes("base64") ? this.state.image : "./images/" + this.state.image) : ""} width="100px" height="100px"></img>
              <input
                type="file"
                className="form-control"
                onChange={e => {
                  var FR = new FileReader();

                  FR.addEventListener("load", e => {
                    this.setState({ image: e.target.result });
                  });

                  FR.readAsDataURL(e.target.files[0]);

                }} />
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="name"
                type="text"
                ref={input => (this.getname = input)}
              />
            </div>
            <div className="form-group">
              <label>price</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="price"
                type="text"
                ref={input => (this.getprice = input)}
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct }
)(ProductForm);
