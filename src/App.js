import "./App.css";
import React from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = "2069f8682ebc4eefad0647d5e3ca6b7e";

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                typ="link"
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <News
                apiKey={apiKey}
                key="search"
                pageSize={pageSize}
                country="in"
                category="search"
                typ="search"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
