import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      country: null,
    };
  }
  nameHandler = (e) => {
    console.log(e.target.value);
  };
  selectHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    let name = e.target.name.value;
    let country = e.target.country.value;
    this.setState({ name, country }, () => console.log(this.state));
    e.target.name.value = "";
    e.target.country.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.selectHandler}>
          <input type="text" name="name" />
          <select name="country">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
