import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import UserContext from "../../context/UserContext";

function AuthDetails() {
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
    return () => {
      listen();
    };
  }, []);
  return (
    <div className="flex justify-center flex-col align-middle items-center gap-4">
      {user ? <>logged in</> : <>not logged in</>}

      {user && (
        <>
          <div>
            <button onClick={handlSubmit}>logOut</button>
          </div>
        </>
      )}
    </div>
  );
}

export default AuthDetails;
