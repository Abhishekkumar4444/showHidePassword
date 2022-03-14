import React, { Component } from "react";
class ContComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhi",
    };
  }
  inputHandler = (event) => {
    let name = event.target.value;
    console.log(name);
    this.setState({ name }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.inputHandler}
        />
      </div>
    );
  }
}
export default ContComponent;
