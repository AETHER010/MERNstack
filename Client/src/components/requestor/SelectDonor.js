import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { donorRequestor, selectDonor } from "../../actions/requestorActions";
import Googlemap from "../googleMap/Googlemap";
import "./SelectDonor.css";

const SelectDonor = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, donors, error } = useSelector(
    (state) => state.donorsRequestor
  );
  const { success } = useSelector((state) => state.selectdonor);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (success) {
      alert.success(success);
      history.push("/request");
    }
    dispatch(donorRequestor());
  }, [success, history, alert, error, dispatch]);

  const selectClickedDonor = (donor) => {
    const donorData = {
      donor: donor,
      status: "booked",
    };
    dispatch(selectDonor(donorData));
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Select one donor"} />
          <div className="donor-container">
            <h2 className="text-red-800 font-bold text-2xl">
              List of Donors which you can use
            </h2>
            <div className="border-2 border-gray-400 bg-gray-400"></div>
            <div className="card.container pt-3 ">
              {donors.map((donor) => (
                <div key={donor._id} className="col-12 donor">
                  <Googlemap
                    className="googlemap-container h-32 w-56"
                    center={{
                      lat: donor.location.coordinates[1],
                      lng: donor.location.coordinates[0],
                    }}
                    lat={donor.location.coordinates[0]}
                    lng={donor.location.coordinates[1]}
                    name={donor.institutionName}
                  />
                  <h3 className="text-center font-bold text-2xl">
                    {donor.name}
                  </h3>
                  <p className="text-center font-bold text-2xl">
                    {donor.email}
                  </p>
                  <button
                    className="btn btn-primary bg-blue-500 hover:bg-blue-700 border border-blue-700 py-2 px-4"
                    onClick={() => selectClickedDonor(donor._id)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SelectDonor;
