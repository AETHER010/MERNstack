import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DonorMap from "./DonorMap";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import { checkIfRequested } from "../../actions/donorActions";
import "./Donor.css";

const Donor = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, requestor, error } = useSelector(
    (state) => state.requestDonor
  );
  const handleClicked = () => {
    dispatch(checkIfRequested());
  };

  console.log(requestor);
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(checkIfRequested());
  }, [dispatch, error, alert]);
  const { user } = useSelector((state) => state.auth);
  console.log(`Hello ${requestor}`);
  return (
    <div className="donor-container">
      <h1 className="text-center text-3xl text-white font-bold pt-5 font-serif ">
        YOU can Donate From here!!
      </h1>
      <div className="border-2 border-gray-700"></div>

      <DonorMap />

      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="card-container"></div>
            <h1 className="text-center text-3xl text-white font-bold pt-5 font-serif">
              Send Request
            </h1>
            {user && user.requestor !== null && (
              <div className="container pt-4 ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card flex flex-column text-center max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full rounded-full h-48 object-cover"
                        src="https://cdn5.vectorstock.com/i/1000x1000/04/09/user-icon-vector-5770409.jpg"
                        alt="User"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">Requestor Details</h5>
                        <p className="card-text">
                          <strong>Name:</strong> {requestor.patientName}
                        </p>
                        <p className="card-text">
                          <strong>Phone no:</strong> {requestor.phoneNumber}
                        </p>
                        <button
                          type="button"
                          onClick={handleClicked}
                          class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                          Send request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {user && user.requestor === null && (
              <div className="container text-center">
                <h3>There is no request yet.</h3>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Donor;
