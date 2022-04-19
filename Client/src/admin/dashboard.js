import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../actions/userActions";
import Loader from "../components/layout/Loader";

const dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="row bg-slate-800">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <h1 className="text-center text-slate-800 font-2xl">Dashboard</h1>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <div className="row bg-slate-900">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center font-bold text-3xl">
                        ADMIN DASHBOARD
                      </h5>
                      {/* <p className="card-text">{users.length}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default dashboard;
