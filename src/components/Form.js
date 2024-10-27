import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userNameError: "",
    passwordError: "",
  });

  const [userDetails, setUserDetails] = useState([]);

  function handleUserName(e) {
    setUser({ ...user, username: e.target.value });
    setErrors({ ...errors, userNameError: "" });
  }

  function handlePassword(e) {
    setUser({ ...user, password: e.target.value });
    setErrors({ ...errors, passwordError: "" });
  }

  function handlePush() {
    if (!user.username.trim()) {
      setErrors({ ...errors, userNameError: "Username is required" });
    } else if (!user.password.trim()) {
      setErrors({ ...errors, passwordError: "Password is required" });
    } else {
      setUserDetails([...userDetails, { ...user }]);
      setUser({
        username: "",
        password: "",
      });
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={handleUserName}
        value={user.username}
        required
      />
      {errors.userNameError && (
        <p style={{ color: "red" }}>{errors.userNameError}</p>
      )}
      <input
        type="password"
        placeholder="Password"
        onChange={handlePassword}
        value={user.password}
        required
      />
      {errors.passwordError && (
        <p style={{ color: "red" }}>{errors.passwordError}</p>
      )}
      <button onClick={handlePush}>Push</button>
      <ul>
        {userDetails.map((items, index) => (
          <li key={index}>{`UserName: ${items.username} 
                         Password : ${items.password}
                    `}</li>
        ))}
      </ul>
    </>
  );
}
