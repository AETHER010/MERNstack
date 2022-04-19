import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

import "../../App.css";

const Header = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully Refresh the page.");
    history.push("/");
  };

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="flex justify-between items-center col-12 col-md-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#1c2938"
                fill-opacity="1"
                d="M0,64L0,64L288,64L288,288L576,288L576,160L864,160L864,96L1152,96L1152,64L1440,64L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="navbar-brand">
            <Link to="/">
              <img
                src="/images/logo.jpg"
                alt="logo"
                height="100"
                width="100"
                style={{
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              />
            </Link>
          </div>
          <div className="navbar-item flex  w-full justify-center items-center">
            <a
              as
              Link
              className="nav-link text-white  font-bold pr-3 pl-3"
              href="/"
            >
              Home
            </a>
            <a
              as
              Link
              className="nav-link text-white font-bold pr-3 pl-3"
              href="/about"
            >
              About
            </a>
            <a
              as
              Link
              className="nav-link text-white font-bold pr-3 pl-3"
              href="#institution"
            >
              Institution
            </a>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {user ? (
            <div className=" dropdown">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>

                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
              <div className="btn-group"></div>
            </div>
          ) : (
            !loading && (
              <div className="flex flex-wrap">
                <div class="flex space-x-2 justify-center ml-1">
                  <div>
                    <Link
                      type="button"
                      to="/login"
                      class="inline-block px-6 py-2.5 mr-1 bg-yellow-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </Link>
                    <Link
                      type="button"
                      to="/register"
                      class="inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md focus:shadow-lg focus:bg-blue-700 focus:shadow-lg outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Register
                    </Link>
                  </div>
                  {/* <div className="btn-group w-4 bg-black">
                  <Link to="/login" className="btn ml-3" id="login_btn">
                    Login
                  </Link>
                </div>
                <div className="btn-group w-4">
                  <Link to="/login" className="btn ml-3" id="login_btn">
                    Register
                  </Link>
                </div> */}
                </div>
              </div>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
