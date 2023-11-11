import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./compoenet/homepage/page";
import SIgnUp from "./compoenet/auth/SIgnUp";
import SignIn from "./compoenet/auth/SignIn";

function Routers() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SIgnUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="*" element={<HomePage />} />
          {/* dsfsd */}
        </Routes>
      </Layout>
    </div>
  );
}

export default Routers;
