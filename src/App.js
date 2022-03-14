import React, { Component } from "react";
import Greet from "./components/Greet";
import Register from "./components/Register";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      isShowPass: false,
    };
  }
  submitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
    event.preventDefault();
  };
  showPasswordHandler = () => {
    this.setState({ isShowPass: !this.state.isShowPass });
  };

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name} />
        ) : (
          <Register
            register={this.submitHandler}
            isShowPass={this.state.isShowPass}
            click={this.showPasswordHandler}
          />
        )}
      </div>
    );
  }
}
