import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Details from "./pages/Details";
import MainLayout from "./layouts/MainLayout";
// bg-[linear-gradient(180deg,_#3333A3_5.09%,_#121212_33.4%)]
function App() {
  return (
    <div className=" w-full min-h-screen flex">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <MainLayout>
              <Likes></Likes>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/details/:id"
          element={
            <MainLayout>
              <Details></Details>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
