import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import useFetch from "../Utils/useFetch";

const apiUrl = "http://localhost:4000";
const Logo = "https://drive.google.com/uc?id=1k0BUFLlnXwZ5bhzHhW19uFC0k_722KoK";
const profilePic =
  "https://drive.google.com/uc?id=1PGUdjGkmhaGXWHHW96iJDF8d_JELJBGM";

const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  // console.log("Search", searchInput);
  const [logInToken, setLogInToken] = useState(false);
  // const { data: product, loading } = useFetch(`/product?name=${searchInput}`);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setLogInToken(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setLogInToken(true);
    }
  }, [logInToken]);


  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSearchInput(value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white mt-5 mb-0 p-0">
      <div className="container-fluid">
        <Link className="nav-title list-inline-item mx-3" to="/">
          <img src={Logo} width="200" alt="SEW ANIMALS logo" />
        </Link>
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
          <i className="nav-strapline">Homemade accessories, that's Sew Animals!</i>
          {/* <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <span className="container-fluid"></span>

          <span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {logInToken ? (
                  <Link to="/">
                    <button
                      onClick={() => handleLogOut()}
                      className="btn btn-sm btn-outline-secondary"
                      type="button"
                    >
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button
                      className="btn btn-lg btn-outline-secondary"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {logInToken ? (
                  <Link to="/">
                    <button
                      className="btn btn-lg btn-link-secondary"
                      type="button"
                    >
                      BarrySTARS
                    </button>
                  </Link>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item">
                {logInToken ? (
                  <div>
                    <img
                      src={profilePic}
                      className="profile-picture"
                      width="50"
                      alt="Profile"
                    />
                  </div>
                ) : (
                  <Link to="/register">
                    <button
                      className="btn btn-lg btn-primary me-2"
                      type="button"
                    >
                      Join
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
