import React from "react";
import { Link } from "react-router-dom";
import "./RequestorHome.css";

const RequestorHome = () => {
  return (
    <div className="requestor-home w-full">
      <div className="heading-text">
        <h1 className="text-center text-2xl text-gray-50 pt-5">
          Create a new request !!
        </h1>
      </div>
      <div className="border-2 border-gray-700"></div>
      <div className="requestor-main">
        <div class="flex space-x-2 justify-center m-2">
          <div>
            <Link
              type="button"
              to="/createrequest"
              class="inline-block px-6 py-2 border-gray-900 border-2 hover:border-gray-50 border-gray-200 text-red-500 font-medium text-2xl leading-tight uppercase rounded hover:bg-black hover:text-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Create Request
            </Link>
            <Link
              type="button"
              to="/getdonor"
              class=" bg-black inline-block px-6 py-2 border-2 hover:border-gray-800 border-gray-200 text-gray-200 font-medium text-2xl leading-tight uppercase rounded hover:bg-white hover:text-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Donor Details
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div className="requestor-main pl-3 pr-3">
    //   <div className="requestor-container row m-4">
    //     <div className="requestor-link col-lg-4 col-md-6 col-xs-12">
    //       <Link
    //         className="btn border-2 border-blue-600 text-gray-80"
    //         id="login_btn"
    //         to="/createrequest"
    //       >
    //         Create Request
    //       </Link>
    //     </div>
    //     <div className="requestor-link col-lg-4 col-md-6 col-xs-12 ml-3">
    //       <Link className="btn" id="login_btn" to="/getdonor">
    //         Donor Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};
export default RequestorHome;
