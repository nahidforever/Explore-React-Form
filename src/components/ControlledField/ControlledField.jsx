import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    if (password.length < 6) {
      setError("Password must be 6 characters or long");
    } else {
      setError("");
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleChangeName}
          name="name"
          defaultValue={name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Mail"
          onChange={handleEmailChange}
          required
          defaultValue={email}
        />
        <br />

        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          defaultValue={password}
          onChange={handlePasswordChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
