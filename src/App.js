import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blogpage from "./pages/Blogpage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage from "./pages/Singlepage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProviyder } from "./hoc/Authprovieyde";
const App = () => {
  return (
    <div>
      <AuthProviyder>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about/*" element={<About />} />
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts" element={<Blogpage />} />
            <Route path="posts/:id" element={<Singlepage />} />
            <Route path="posts/:id/edit" element={<Editpost />} />
            <Route
              path="posts/new"
              element={
                <RequireAuth>
                  <Createpost />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Loginpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthProviyder>
    </div>
  );
};

export default App;
