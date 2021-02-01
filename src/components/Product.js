import React from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import ProductEdit from "./ProductEdit";
import { connect } from "react-redux";
import { addProductBtnClicked, fetchProducts } from "../actions/productActions";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSaveBtnClicked: false, search: '' };

    this.onClick = this.onClick.bind(this);

    this.Add = this.Add.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  Add() {
    this.setState({ isSaveBtnClicked: false });
  }

  onClick(e) {
    const isSaveBtnClicked = true;
    this.setState({ isSaveBtnClicked });
    this.props.addProductBtnClicked();
  }
  handleSearch(evt) {
    this.setState({ search: evt.target.value })
  }

  render() {
    return (
      <div>
        <h2>Demo - React, Redux and Redux-Saga</h2>
        {this.props.edit === true && (
          <h3 className="alert alert-success">Data Edited Successfully</h3>
        )}

        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <div>
              <button className="btn btn-primary" onClick={this.onClick}>
                Add
            </button>  <br />
              <input value={this.state.search} placeholder="Search here..." onChange={this.handleSearch} />
            </div>
          )
        }
        <br />
        <br />
        {
          this.state.isSaveBtnClicked === true && (
            <ProductForm AddClicked={this.Add} />
          )
        }
        {
          this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <ProductList EditClicked={this.editBtn} search={this.state.search} />
          )
        }
        { this.props.isEditBtnClicked && <ProductEdit />}
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isEditBtnClicked: state.productReducer.isEditBtnClicked,
  edit: state.productReducer.edit
});

export default connect(
  mapStateToProps,
  { addProductBtnClicked, fetchProducts }
)(Product);
