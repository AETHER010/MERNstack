import React from "react";

const Donatefund = () => {
  return (
    <div className="donatefund-container">
      <div className="leftside">
        <div className="row wrapper ">
          <div className="col-10 col0lg-5">
            <form
              className="shadow-lg p-3 mb-5 bg-white rounded"
              encType="multipart/form-data"
            >
              <h1 className="mb-3 text-center font-lg font-bold">
                DONATE FUNDS HERE!!
              </h1>
              <h1 className="text-center">We appreciate your support !!!</h1>
              <div className="border-2 border-gray-500"></div>
              <div className="form-group mt-2">
                <label htmlFor="email_field">Name</label>
                <input
                  type="name"
                  id="name_field"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email_field">Contact</label>
                <input
                  type="number"
                  id="contact_field"
                  className="form-control"
                  name="contact"
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount_field">Amount</label>
                <input
                  type="text"
                  id="amount_field"
                  className="form-control"
                  name="amount"
                  placeholder=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="address_field">Address</label>
                <input
                  type="text"
                  id="address_field"
                  className="form-control"
                  name="bloodType"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Remarks_field">Remarks</label>
                <input
                  type="text"
                  id="Remarks_field"
                  className="form-control"
                  name="remarks"
                />
              </div>
              <button
                id="submit-button"
                type="submit"
                className="btn btn-block py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donatefund;
