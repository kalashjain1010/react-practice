import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const [authUser, setAuthUser] = useState("");
  const { user, setUser } = useContext(UserContext);
  const handlSubmit = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out success");
      })
      .then(() => setUser(false))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return (
    <div className="flex justify-between px-5">
      <Link to={"/"}>Logo</Link>
      <div className="flex gap-3">
        <div className="flex gap-4">
          {user ? (
            <>
              <div>{user.email}</div>
              <div>
                <button onClick={handlSubmit} className="p-2 bg-yellow-200 rounded-lg">Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to={"/signup"}>SignUp</Link>
              <Link to={"/login"}>Login</Link>
            </>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
