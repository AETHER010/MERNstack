import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../components/layout/MetaData";
import Loader from "../components/layout/Loader";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  donorRequestor,
  deleteDonor,
  clearErrors,
} from "../actions/requestorActions";
import { Delete_Donor_Request } from "../constants/requestorConstants";

const Request = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, requestors } = useSelector(
    (state) => state.donorRequestor
  );
  const { isDeleted } = useSelector((state) => state.Requestor);

  useEffect(() => {
    dispatch(donorRequestor());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order deleted successfully");
      history.push("/admin/requestors");
      dispatch({ type: Delete_Donor_Request });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteOrderHandler = (id) => {
    dispatch(deleteDonor(id));
  };

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "No of Request",
          field: "Request",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    requestors.forEach((requestor) => {
      data.rows.push({
        id: requestor._id,
        name: requestor.patientName,
        BloodType: requestor.bloodType,
        actions: (
          <Fragment>
            <Link
              to={`/admin/order/${requestor._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-eye"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteOrderHandler(requestor._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  return (
    <Fragment>
      <MetaData title={"All Orders"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Orders</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setOrders()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Request;
