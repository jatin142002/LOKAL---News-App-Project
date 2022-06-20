import "./App.css";
// eslint-disable-next-line
import React,{useState} from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = "ed36f16e328e4f1fbcd791acdd9ec499";
  
  // const [query, setQuery] = useState("Dhoni");

  let search_data="Dhoni" ;

  const pull_search = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    search_data = data;
  }
  
  return (
    <div>
      <Router>
        <NavBar func={pull_search} />
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
          <Route exact path="/search">
            <News
              apiKey={apiKey}
              key="search"
              pageSize={pageSize}
              country="in"
              category={search_data}
              typ="search"
            />
             {/* {console.log(query)} */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
