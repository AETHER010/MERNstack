import React from "react";
import Googlemap from "../googleMap/Googlemap";
import "./institution.css";

const Institution = ({ institution }) => {
  const center = {
    lat: parseFloat(institution.location.coordinates[0]),
    lng: parseFloat(institution.location.coordinates[1]),
  };
  return (
    <div id="institution" className="col-6 col-md-6">
      <div className="card">
        <div className="card-body shadow-lg pb-3 mb-2 text-center">
          <Googlemap
            center={center}
            lat={institution.location.coordinates[0]}
            lng={institution.location.coordinates[1]}
            name={institution.institutionName}
          />
          <h3>Name: {institution.institutionName}</h3>
          <p>Email: {institution.email}</p>
          <p>Phone No: {institution.phoneNumber}</p>
          <p>Address: {institution.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Institution;
