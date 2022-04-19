import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import "./Request.css";

import { getDonor, deleteDonor } from "../../actions/requestorActions";

const GetDonor = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, donor, error } = useSelector(
    (state) => state.getDonorRequestor
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getDonor());
  }, [dispatch, error, alert]);
  console.log(`Hello ${donor}`);
  const deleteDonorHandler = () => {
    dispatch(deleteDonor()).then(() => {
      history.push("/");
    });
  };
  return (
    <>
      <div className="donor-container">
        <h1 className="text-center text-3xl text-white font-bold pt-5 font-serif">
          Donor
        </h1>
        <div className="border-2 bg-slate-200 border-slate-300"></div>
        <div className="row pt-3">
          <div className="col-md-6">
            <div className="card max-w-lg rounded overflow-hidden shadow-lg ">
              <div className="card-body pl-4">
                <h5 className="card-title pt-4 mt-3">
                  <img
                    className="rounded-full w-1/3 pl-5"
                    src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
                  ></img>
                </h5>
                {/* <h2>{donor.name}</h2> */}
                {donor && (
                  <>
                    <p className="card-text text-center">
                      <strong>Name:</strong> {donor.name}
                    </p>
                    <p className="card-text text-center">
                      <strong>Phone no:</strong> {donor.phoneNumber}
                    </p>
                    <button
                      type="button"
                      className="btn btn-danger bg-slate-700"
                      onClick={deleteDonorHandler}
                    >
                      Confirm/Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDonor;
