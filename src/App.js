import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = ()=> {
  const limit = 10;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}
                  apiKey={apiKey}
                  limit={limit}
                  country="in"
                  category="technology"
                  key="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
}

export default App;