import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center h-[50vh]">
      hello {user?.email} how are you
    </div>
  );
}

export default HomePage;
