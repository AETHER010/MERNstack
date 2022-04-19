import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container bg-slate-800 text-white pt-5">
        <form action="" className="mt-4">
          <div class="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
            <div class="md:ml-auto md:mb-6">
              <p className="text-white">
                <strong>Sign up for our news</strong>
              </p>
            </div>

            <div class="md:mb-6">
              <input
                type="text"
                class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
            </div>

            <div class="md:mr-auto mb-6">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Suscribe
              </button>
            </div>
          </div>
        </form>
        <div>
          <div class="flex justify-center mb-9">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-9 m-1 w-9"
            >
              <FaFacebookF className="w-4 h-full mx-auto" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-9 m-1 w-9"
            >
              <FaInstagram className="w-4 h-full mx-auto" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-9 m-1 w-9"
            >
              <FaGoogle className="w-4 h-full mx-auto" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-9 m-1 w-9"
            >
              <FaTwitter className="w-4 h-full mx-auto" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-white">
            &copy; <span>ALL RIGHT RESERVED </span>
            {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
