import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikedSongs from "./pages/Likes";
import Details from "./pages/Details";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen flex">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/liked-songs"
            element={
              <MainLayout>
                <LikedSongs />
              </MainLayout>
            }
          />
          <Route
            path="/details/:id"
            element={
              <MainLayout>
                <Details />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
