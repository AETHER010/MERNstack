import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../components/layout/MetaData";
import Loader from "../components/layout/Loader";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getInstitutions,
  CreateInstitution,
  deleteInstitution,
  clearErrors,
} from "../actions/institutionActions";
import { Delete_Institution_Reset } from "../constants/institutionConstants";

const InstitutionList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, institutions } = useSelector(
    (state) => state.InstitutionList
  );
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.Institution
  );

  useEffect(() => {
    dispatch(getInstitutions());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("institution deleted successfully");
      history.push("/admin/institution");
      dispatch({ type: Delete_Institution_Reset });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const setInstitution = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "location",
          field: "location",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    institutions.forEach((institution) => {
      data.rows.push({
        id: institution._id,
        name: institution.name,
        actions: (
          <Fragment>
            <Link
              to={`/admin/product/${institution._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteInstitutionHandler(institution._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteInstitutionHandler = (id) => {
    dispatch(deleteInstitution(id));
  };

  return (
    <Fragment>
      <MetaData title={"All Products"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All InstitutionList</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setInstitution()}
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

export default InstitutionList;
