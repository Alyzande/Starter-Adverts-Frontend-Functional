import React, { useState } from "react";


function Login(props) {
  super(props);
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    cDisabled(true);
    props.client
    .login(e.target.userName.value, e.target.password.value)
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
        <input type="text" name="userName" disabled={disabled} />
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
//https://www.youtube.com/watch?v=QUC5Lfw3W_Y&list=PLCxZN2AWRdpsoP64CZPEJ1wTeDMzeNGzq&index=50
//why does this bloody thing not work
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa