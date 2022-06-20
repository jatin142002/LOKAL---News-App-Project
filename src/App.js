import "./App.css";
import React , {useState} from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = "2069f8682ebc4eefad0647d5e3ca6b7e";
    // eslint-disable-next-line 
  const [search , setSearch] = useState("");
  

  return (
    <div>
      <Router>
        <NavBar setSearch={setSearch}/>

        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              typ="link"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              typ="link"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              typ="link"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              typ="link"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              typ="link"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              typ="link"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              typ="link"
            />
          </Route>
          {/* <Route exact path="/search">
            <News
              apiKey={apiKey}
              key="search"
              pageSize={pageSize}
              country="in"
              category={search}
              typ="search"
            />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
