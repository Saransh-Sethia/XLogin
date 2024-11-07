import React, { useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [invalid, setInvalid] = useState("")
  const [inputField, setInpuField] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInpuField((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputField.username === "user" && inputField.password === "password") {
      setIsLoggedIn(true);
      setInvalid("")
    } else {
      setIsLoggedIn(false);
      setInvalid("Invalid username or password")
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <>
        <p>{invalid}</p>
        <form onSubmit={submit}>
          <label>Username: </label>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={inputField.username}
            onChange={handleChange}
            required="true"
          />
          <br />
          <label>Password: </label>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={inputField.password}
            onChange={handleChange}
            required="true"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        </>
      )}
    </div>
  );
};

export default Home;
