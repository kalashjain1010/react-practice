import React, { useContext, useState } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import UserContext from "../../context/UserContext.js";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedInSuccess, setSignedInSuccess] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .then(() => setSignedInSuccess(true))
      .then(() => setUser({ email, password }))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        className="flex gap-3 flex-col max-w-sm m-20 text-red-300"
        onSubmit={handleLogin}
      >
        {signedInSuccess && (
          <>
            <div>signed in success</div>
          </>
        )}
        <input
          className="border-2 border-red-800"
          type="email"
          placeholder="type email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="border-2 border-red-800"
          type="password"
          placeholder="type pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default SignIn;
