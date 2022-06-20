import React, { useState } from "react"; 
// import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const [value, setValue] = useState();
  
//   let history = useHistory();

  function handleChange(event) {
    setValue(event.target.value);
  };

  function handleSubmit(event){
    event.preventDefault();
    props.func(value);
    // history.push("/search");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Daily News</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={value ?? ""}
                onChange={handleChange}
              />
              <a href="/search">
                <button className="btn btn-outline-light" type="submit" onClick={()=>{window.location.href="/search"}}>
                    Search
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
