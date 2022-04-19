import React from "react";
import Footer from "./Footer";
import Wave from "react-wavify";

// import "../css/about.css";

const About = () => {
  return (
    <div className="about-container w-full h-full flex flex-wrap">
      <div className="row ">
        <div className="col relative ml-5 pl-3">
          <img
            className="pt-4 ml-5"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/596/029/small_2x/hand-with-blood-droplet-symbol-for-donation-blood-for-charity-concept-in-cartoon-illustration-vector.jpg"
            alt=".."
          />
        </div>
        <div className="col text-black pt-5 text-center mr-5">
          <h4 className="text-black">
            You don't always have to be a doctor to SAVE someone's LIFE!
          </h4>
          <p className="text-black">
            Donating just a pint (almost 470 ml) of blood will not make much of
            a difference in your life but that one pint can save up to three
            lives! So roll up your sleeves and contribute proactively in this
            noble cause.
          </p>
          <p className="text-black">
            Blood donation is a great gesture to help the needy people or those
            who are in need of the blood. There are many health issues, which
            remain silent until it is in a late stage. We do not easily notice
            the early warning signs of health conditions such as hypertension,
            cancer, diabetes, kidney problems, and so on. If you want to become
            a donor, then it is your responsibility to take care of yourself and
            ensure that you are not spreading any disease.
          </p>
        </div>
      </div>
      <section class="overflow-hidden text-gray-700">
        <h1 className="text-red-700 font-bold text-3xl text-center">
          SOME OF THE WORKS
        </h1>
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.iiitb.ac.in/includefiles/newsevents/blooddonationcamp1.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/06/14/Pictures/blood-donation-camp-at-iehe_06c40a76-322c-11e6-a1a7-3aade94c5b51.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://c.ndtvimg.com/2019-05/mvtvi0h_blood-donation_625x300_30_May_19.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://assets.thehansindia.com/h-upload/2020/06/16/977276-blood-donation-camp.webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i0.wp.com/orissadiary.com/wp-content/uploads/2021/02/Donation-Camp.pdf.jpg?fit=556%2C345&ssl=1"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://c.ndtvimg.com/2019-05/mvtvi0h_blood-donation_625x300_30_May_19.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
