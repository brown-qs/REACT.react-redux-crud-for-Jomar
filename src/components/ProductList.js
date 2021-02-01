import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  editMode,
  fetchProductById
} from "../actions/productActions";
import "../../src/App.css";

class ProductList extends React.Component {

  onEdit = productId => {
    this.props.editMode();
    this.props.fetchProductById(productId);
  };

  onDelete = productId => {
    this.props.deleteProduct(productId);
  };

  render() {
    return (
      <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Products.filter(one => one.name.toLowerCase().includes(this.props.search.toLowerCase())).map(u => (
              <tr key={u.id}>
                <td><img src={u.image.includes("base64") ? u.image : "./images/" + u.image} height="200px"></img>
                </td>
                <td>{u.name}</td>
                <td>${u.price}</td>

                <td>
                  <button onClick={() => this.onEdit(u.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.onDelete(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Products: state.productReducer.products,
  error: state.productReducer.error
});

export default connect(
  mapStateToProps,
  { fetchProducts, deleteProduct, editMode, fetchProductById }
)(ProductList);
