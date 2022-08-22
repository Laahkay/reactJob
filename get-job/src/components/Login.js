import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let nav = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [options, setOptions] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    nav(options === "Job advetising" ? "/Job_advertising" : "/Job_markerting");

    console.log("e.target.value");
  };

  console.log("options", options);

  return (
    <div className="main-login">
      <div className="login-container">
        <h2>Login Page</h2>
      </div>
      <form onSubmit={handlesubmit}>
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2>Surname</h2>
        <input
          type="text"
          placeholder="Surname"
          id="surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <h3>
          Two Optin: <p>Job Marketing/Job Application</p>
        </h3>
        <select
          onChange={(e) => {
            setOptions(e.target.value);
          }}
          name="selectList"
          id="selectList"
        >
          <option>Select...</option>
          <option value="Job advetising">Job advetising</option>
          <option value="Job markerting">Job Marketing</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
