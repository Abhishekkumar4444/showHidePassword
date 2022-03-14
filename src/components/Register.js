import React from "react";

function Register(props) {
  let btnstyle = {
    backgroundColor: "green",
    color: "white",
  };
  let btnText, passwordType;
  if (props.isShowPass === true) {
    btnstyle.backgroundColor = "red";
    btnText = "Hide Password";
    passwordType = "text";
  } else {
    btnText = "Show Password";
    passwordType = "password";
  }

  return (
    <div className="container card py-2 my-5  border-secondary w-50">
      <h2 className="text-md-center">Registration Form</h2>

      <form onSubmit={props.register}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control border-primary"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control border-primary"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordType}
            name="password"
            className="form-control border-primary"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
        <button
          type="button"
          className="btn mx-5"
          onClick={props.click}
          style={btnstyle}
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}

export default Register;
