import React from "react";
import Typewriter from "typewriter-effect";
import "./Content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="cover-header font-bold text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Welcome To Blood Donation Management System")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Please Login To Process Your Request")
              .start();
          }}
        />
      </div>
      <div className="justify-center mt-3">
        <div className="row">
          <div className="col mr-4 ml-4 mt-4 mb-4">
            <h3 className="text-xl font-bold mt-3 mb-3 text-center">
              Universal Donors and Recipients
            </h3>
            <p className="text-xl mt-3 mb-3 text-center">
              The most common blood type is O, followed by type A.{" "}
            </p>
            <p className="text-center">
              Type O individuals are often called "universal donors" since their
              blood can be transfused into personswithany blood type. Those with
              type AB blood are called "universal recipients" because they can
              receivebloodofany type.
            </p>
            <p>
              However, since approximately twice as many people in the general
              population have O and A blood types, abloodbank's need for this
              type of blood increases exponentially.
            </p>
          </div>
          <div className="col border-box flex flex-wrap">
            <img
              className="bg-clip-content mt-2 h-3/4  rounded-sm shadow-2xl shadow-black-400/20"
              src="https://m.economictimes.com/thumb/msid-76339286,width-1200,height-900,resizemode-4,imgsize-353228/blood-donation_istock.jpg"
              alt="blood"
            />
          </div>
        </div>
        <div className="middle-container">
          <h3 className="text-2xl font-bold text-center mt-3 mb-3 pr-3 pl-3 pt-3">
            DO donate blood, only if you satisfy all of the following conditions
          </h3>
          <table
            border="0"
            cellspacing="0"
            cellpadding="5"
            className="pl-4 ml-4"
          >
            <tbody>
              <tr>
                <td valign="top">You are between age group of 18-60 years.</td>
              </tr>
              <tr>
                <td valign="top">Your weight is 45 kgs or more.</td>
              </tr>
              <tr>
                <td valign="top">Your hemoglobin is 12.5 gm% minimum.</td>
              </tr>
              <tr>
                <td valign="top">
                  Your last blood donation was 3 or more months earlier.
                </td>
              </tr>
              <tr>
                <td valign="top">
                  You are healthy and have not suffered from malaria, typhoid or
                  other transmissibledisease in the recent past.
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-2xl text-center font-bold mt-3 mb-3">
            DO NOT donate blood, if you have any of the following conditions
          </h3>
          <table cellspacing="0" cellpadding="5" className="pl-4 ml-4">
            <tbody>
              <tr>
                <td valign="top">Cold / fever in the past 1 week.</td>
              </tr>
              <tr>
                <td valign="top">
                  Under treatment with antibiotics or any other medication.
                </td>
              </tr>
              <tr>
                <td valign="top">
                  Cardiac problems, hypertension, epilepsy, diabetes (on insulin
                  therapy), history ofcancer, chronic kidney or liver disease,
                  bleeding tendencies, venereal disease etc.
                </td>
              </tr>
              <tr>
                <td valign="top">Major surgery in the last 6 months.</td>
              </tr>
              <tr>
                <td valign="top">Vaccination in the last 24 hours.</td>
              </tr>
              <tr>
                <td valign="top">
                  Had a miscarriage in the last 6 months or have been pregnant /
                  lactating in thelastoneyear.
                </td>
              </tr>
              <tr>
                <td valign="top">Had fainting attacks during last donation.</td>
              </tr>
              <tr>
                <td valign="top">
                  Have regularly received treatment with blood products.
                </td>
              </tr>
              <tr>
                <td valign="top">
                  Shared a needle to inject drugs/ have history of drug
                  addiction.{" "}
                </td>
              </tr>
              <tr>
                <td valign="top">
                  Had sexual relations with different partners or with a high
                  risk individual.
                </td>
              </tr>
              <tr>
                <td valign="top">
                  Been tested positive for antibodies to HIV.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wave-container">
          <div className="row mt-5">
            <div className="col pr-4 pl-4">
              <h3 className="text-2xl font-bold mt-3 mb-3 text-center">
                Blood Bank
              </h3>
              <p className="pl-4">
                {" "}
                A blood bank is a place designed especially for the storage of
                blood and blood products. Large coolersholdthese products at a
                constant temperature and they are available at a moment's
                notice.
              </p>
              <h3 className="text-xl font-bold mt-3 mb-3 text-center">
                About Blood Donation
              </h3>
              <p className="pl-4">
                {" "}
                Donating blood is a life saving measure especially when you have
                a rare blood type. Blood donation issafeand simple. It takes
                only about 10 minutes to donate blood - less than the time of an
                average telephonecall.We can save upto 3 to 4 precious lives by
                donating blood.
              </p>
              <h3 className="text-xl font-bold mt-3 mb-3 text-center">
                World Blood Donor Day
              </h3>
              <p className="pl-4">
                {" "}
                The day is celebrated to raise awareness globally about the need
                for regular and voluntary blooddonation.
              </p>
            </div>
            <div className="col pl-4 ml-4 justify-center">
              <img
                className="bg-clip-content mt-2 h-3/4 rounded-sm shadow-2xl shadow-black-400/20"
                src="https://cms.dailytrust.com.ng/wp-content/uploads/2019/10/wp-blood-donation-clinic-1.jpg"
                alt="blood"
              />
            </div>
          </div>
        </div>
        <h2 id="institution" className="text-3xl font-bold mt-3 mb-3">
          List of Institutions which you can use
        </h2>
      </div>
    </div>
  );
};
export default Content;
