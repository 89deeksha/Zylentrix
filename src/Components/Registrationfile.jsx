import React, { useState } from "react";

function Registrationfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleInputchange = (e) => { //switch helps in making input field value different
    const {name, value} = e.target;
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmpassword":
        setConfirmpassword(value);
        break;
    }
  };

  let handleSubmit=(e)=>{
e.preventDefault()
const formDatasubmit={
    firstname,
    lastname,
    email,
    phone,
    password,
    confirmpassword


}
console.log(formDatasubmit)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-registration">
        <h1>Sign Up</h1>
        <p>Please fill the form to create an account</p>
        <div className="reg-form">
          <label htmlFor="firstname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="enter first name"
            required
            value={firstname}
            onChange={handleInputchange}
          />
        </div>
        {/* lastname */}
        <div className="reg-form">
          <label htmlFor="lastname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="enter last name"
            required
            value={lastname}
            onChange={handleInputchange}
          />
        </div>
        {/* email */}
        <div className="reg-form">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            required
            value={email}
            onChange={handleInputchange}
          />
        </div>
        {/* phone */}
        <div className="reg-form">
          <label htmlFor="phone">
            <b>phone</b>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="phone"
            required
            value={phone}
            onChange={handleInputchange}
          />
        </div>
        {/* password */}
        <div className="reg-form">
          <label htmlFor="Password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            required
            value={password}
            onChange={handleInputchange}
          />
        </div>
        {/* confirm password */}
        <div className="reg-form">
          <label htmlFor="confirm password">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm password"
            required
            value={confirmpassword}
            onChange={handleInputchange}
          />
        </div>
        <p>By creating an account you agree to our</p>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
}

export default Registrationfile;
