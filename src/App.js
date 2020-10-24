import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./routes/HomePage/HomePage";
import CountryDetail from "./routes/CountryDetail/CountryDetail";
import "./App.scss";

export const ModeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Header mode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Switch>
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <ModeContext.Provider value={darkMode}>
                <HomePage {...routeProps} />
              </ModeContext.Provider>
            )}
          />
          <Route
            path="/country/:name"
            render={(routeProps) => (
              <ModeContext.Provider value={darkMode}>
                <CountryDetail {...routeProps} />
              </ModeContext.Provider>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
