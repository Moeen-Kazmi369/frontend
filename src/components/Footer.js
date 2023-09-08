import React from "react";
import {RiTwitterXLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      {/* <!--Footer Section--> */}
      <section className="padding_top_60 padding_bottom_60">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 full_width">
              <figure className="margin_bottom_20 footer_logo">
                <img src="assets/images/logo.svg" alt="" />
              </figure>
              <div className="font_size_12 line_height_18 color_5a5f69 sailec_regular margin_bottom_10">
                Copyright 2019 DesigningMedia.
                <br />
                All Rights reserved
              </div>
              <div className="designed_by font_size_12 line_height_18 color_5a5f69 sailec_regular margin_bottom_20">
                Designed by:
                <a href="#" className="color_5a5f69">
                  Designingmedia
                </a>
              </div>
              <div className=" w-full flex space-x-1 justify-center md:justify-start">
              {" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-black text-white text-center p-[5px]"
              >
                <RiTwitterXLine/>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-[#f04f65] text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-instagram"></i>
              </a>
              {" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-green-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-whatsapp"></i>
              </a>{" "}
              </div>
            </div>
            <div className="col disable_links empty_column"></div>
            <div className="col-xl-2 col-lg-2 col-md-3 disable_links">
              <div className="footer_heading">Our Services</div>
              <ul className="footer_links">
                <li>
                  <a href="shared_hosting.html">Shared Hosting</a>
                </li>
                <li>
                  <a href="reseller_hosting.html">Reseller Hosting</a>
                </li>
                <li>
                  <a href="vps_hosting.html">VPS Hosting</a>
                </li>
                <li>
                  <a href="dedicated_hosting.html">Dedicated Hosting</a>
                </li>
                <li>
                  <a href="domain.html">Domain Registration</a>
                </li>
              </ul>
            </div>
            <div className="col disable_links empty_column"></div>
            <div className="col-xl-2 col-lg-2 col-md-3 disable_links">
              <div className="footer_heading">About Us</div>
              <ul className="footer_links">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col disable_links empty_column"></div>
            <div className="col-xl-2 col-lg-2 col-md-3 disable_links">
              <div className="footer_heading">Contact Us</div>
              <ul className="footer_links">
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="#">Submit A Ticket</a>
                </li>
                <li>
                  <a href="#">Acceptable Use Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col disable_links empty_column"></div>
          </div>
        </div>
      </section>
      {/* <!--Ends Here--> */}
    </footer>
  );
};

export default Footer;
