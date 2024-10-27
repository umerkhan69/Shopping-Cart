import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mt-3 mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.AddItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-4">
          <label htmlfor="input name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="input name"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: Number(e.currentTarget.value) });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlfor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add to Cart
        </button>
      </form>
    );
  }
}

export default AddItem;
