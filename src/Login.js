import React, { useState } from "react";


function Login(props) {
  super(props);
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    cDisabled(true);
    props.client
    .login(e.target.useername.value, e.target.password.value)
    .then( (response) => {
      cDisabled(false);
      props.loggedIn(response.data.token);
    })
    .catch(() => {
      alert("an error has occured")
      cDisabled(false);
    })


  };

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => this.submitHandler(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;
