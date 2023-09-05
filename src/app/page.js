// "use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
// import $ from 'jquery'; // Import jQuery
import React from "react";
const Home = () => {
  return (
    <>
      <main>
        {/* <div id="default_header"></div>
        <!--Hero Banner Section--> */}
        <section className="hero_banner_img padding_bottom_35  float-left w-100">
          <div className="banner_content">
            <div className="container">
              <div className="row mobile_banner_margin">
                <div className="col-xl-6 col-lg-6 col-md-6  padding_top_200 order02 mobile_text_center">
                  <h1 className="font_size_48 line_height_60 color_222 margin_bottom_30">
                    Fastest Performance
                    <br />
                    Web Hosting
                  </h1>
                  <p className="font_size_18 line_height_30 color_5a5f69 margin_bottom_50 font_weight_500">
                    Dedicated Servers are ideal for Larger Businesses
                    <br /> and High Traffic Websites
                  </p>
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 order01 mobile_img">
                  <figure>
                    <img
                      src="assets/images/hero_banner_img.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Slider Section-->
        <!--Partner Section--> */}
        <section className="text-center padding_top_35 padding_bottom_60">
          <div className="container">
            <p className="margin_bottom_50 font_weight_500 font_size_18">
              Over 1,000 Companies Love Hostiko
            </p>
            <figure className="partner_img">
              <img
                src="assets/images/partner_img.png"
                alt=""
                className="img-fluid"
              />
            </figure>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Hosting Plans Section--> */}
        <section className="padding_top_60 padding_bottom_60 text-center">
          <div className="container">
            <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
              Our Hosting Plans
            </h2>
            <p className="margin_bottom_50">
              From professional business to enterprise, we've got you covered!
            </p>
            <div className="row margin_bottom_20">
              <div className="col-xl-4 col-lg-4 col-md-4 margin_box">
                <div className="hosting_plan_box">
                  <div className="hosting_plan_name">Web Hosting</div>
                  <div className="hosting_plan_box_price">
                    $49<span>/Mo</span>{" "}
                  </div>
                  <div className="discount_tag">
                    Save Up to 30% <br />
                    <span>Annual Billing</span>{" "}
                  </div>
                  <ul className="hosting_plan_listing">
                    <li>Unlimited Disk Space</li>
                    <li>99.9% Uptime Guarantee</li>
                    <li>Unmetered Bandwidth</li>
                    <li>One Click Installs Scripts</li>
                  </ul>
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 margin_box">
                <div className="hosting_plan_box active">
                  <div className="hosting_plan_name">VPS Hosting</div>
                  <div className="hosting_plan_box_price">
                    $79<span>/Mo</span>{" "}
                  </div>
                  <div className="discount_tag">
                    Save Up to 30% <br />
                    <span>Annual Billing</span>{" "}
                  </div>
                  <ul className="hosting_plan_listing">
                    <li>Unlimited Disk Space</li>
                    <li>99.9% Uptime Guarantee</li>
                    <li>Unmetered Bandwidth</li>
                    <li>One Click Installs Scripts</li>
                  </ul>
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="hosting_plan_box">
                  <div className="hosting_plan_name">Dedicated Server</div>
                  <div className="hosting_plan_box_price">
                    $99<span>/Mo</span>{" "}
                  </div>
                  <div className="discount_tag">
                    Save Up to 30% <br />
                    <span>Annual Billing</span>{" "}
                  </div>
                  <ul className="hosting_plan_listing">
                    <li>Unlimited Disk Space</li>
                    <li>99.9% Uptime Guarantee</li>
                    <li>Unmetered Bandwidth</li>
                    <li>One Click Installs Scripts</li>
                  </ul>
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
              </div>
            </div>
            <p className="tag_line">
              All paid plans include 30-days Full Money Back Guarantee
            </p>
          </div>
        </section>
        {/* <!--End Here--> */}
        {/* <!--Hosting Features Plans--> */}
        <section className="padding_top_60 padding_bottom_35 text-center">
          <div className="container">
            <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
              Welcome to Hostiko Company
            </h2>
            <p className="padding_bottom_100">
              We provide fast, affordable & secure hosting all over the world.
            </p>
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-5 welcome_section_img">
                <figure>
                  <img
                    src="assets/images/welcome_section_img.svg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col"></div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row margin_bottom_40">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                    <div className="company_box01 hover_effect">
                      <div className="company_detail_heading">History</div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                    <div className="company_box02 hover_effect">
                      <div className="company_detail_heading">Vision</div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                    <div className="company_box03 hover_effect">
                      <div className="company_detail_heading">Mission</div>
                    </div>
                  </div>
                </div>
                <p className="text-left margin_bottom_40 mobile_center">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem dolor sit amet, consectetur, adipisci
                  numquam eius modi tempora incid dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div className="text-left mobile_center">
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!-- Guarantee Section--> */}
        <section className="padding_bottom_45 padding_top_35 text-center">
          <div className="container">
            <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
              Hostiko Guarantee
            </h2>
            <p className="margin_bottom_80">
              From professional business to enterprise, we've got you covered!
            </p>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 padding_top_170 margin_box">
                <div className="guarantee_box">
                  <div className="guarantee_img01"></div>
                  <div className="guarantee_box_heading margin_bottom_10">
                    Money Back Guarantee
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="guarantee_box margin_box mobile_margin_box">
                  <div className="guarantee_img02"></div>

                  <div className="guarantee_box_heading margin_bottom_10">
                    Fastest SSD Servers
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet.
                  </p>
                </div>
                <div className="guarantee_box margin_box mobile_margin_box">
                  <div className="guarantee_img03"></div>

                  <div className="guarantee_box_heading margin_bottom_10">
                    Cloud Technology
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 padding_top_170">
                <div className="guarantee_box">
                  <div className="guarantee_img04"></div>

                  <div className="guarantee_box_heading margin_bottom_10">
                    24/7 Live Support
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Search Domain Section--> */}
        <section className="padding_bottom_60 padding_top_45 search_domain_section">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7 padding_top_30 order_2">
                <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
                  Choose Your Domain Today!
                </h2>
                <p className="font_size_18 line_height_24 color_ff007e sailec_regular margin_bottom_50">
                  Get Perfect Domain Name from Hostiko.
                </p>
                <div className="search_box text-center">
                  <form
                    action="//akdesigner.com/whmcs-templates/cart.php?systpl=hostiko&layout=28&a=add&domain=register"
                    method="post"
                  >
                    <div className="search_area input-effect">
                      <input
                        type="text"
                        placeholder="Search Domain here"
                        className="text_field"
                        name="query"
                        size="20"
                      />
                      <span className="focus-border">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="submit"
                      className="search_btn text-uppercase bg_color"
                      value=""
                    />
                  </form>
                </div>
                <ul className="domain_listing">
                  <li>
                    .com <span>$12</span>
                  </li>
                  <li>
                    .net <span>$15</span>
                  </li>
                  <li>
                    .info <span>$18</span>
                  </li>
                  <li>
                    .org <span>$19</span>
                  </li>
                  <li>
                    .co.uk <span>$29</span>
                  </li>
                  <li>
                    .city <span>$39</span>
                  </li>
                  <li>
                    .edu <span>$49</span>
                  </li>
                </ul>
              </div>
              <div className="col hide_colum"></div>
              <div className="col-xl-4 col-lg-4 col-md-5 order_1 mobile_center_img search_domain_img">
                <figure>
                  <img
                    src="assets/images/search_domain.svg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Feature Section--> */}
        <section className="padding_bottom_60 padding_top_60 text-center">
          <div className="container">
            <div className="row margin_bottom_50">
              <div className="col"></div>
              <div className="col-xl-8 col-lg-8">
                <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
                  Hostiko Features
                </h2>
                <p className="margin_bottom_60">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor
                  consectetur, adipisci numquam incidunt ut labore et dolore
                  magnam aliquam quaerat voluptatem.
                </p>
              </div>
              <div className="col"></div>
            </div>
            <div className="row hosting_feature_row">
              <div className="col-xl-6 col-lg-6 col-md-6 outer_featured_box">
                <div className="row margin_box">
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding order_2">
                    <div className="featured_box text-right">
                      <div className="featured_box_heading">
                        Maximum Performance
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 order_1 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img01.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="row margin_box">
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding order_2">
                    <div className="featured_box text-right">
                      <div className="featured_box_heading">
                        Free Let’s Encrypt SSL
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 order_1 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img03.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding order_2">
                    <div className="featured_box text-right">
                      <div className="featured_box_heading">Maximum Security</div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 order_1 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img05.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 padding_top_130">
                <div className="row margin_box">
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img02.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding">
                    <div className="featured_box text-left">
                      <div className="featured_box_heading">
                        WordPress Pre-Installed
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row margin_box">
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img04.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding">
                    <div className="featured_box text-left">
                      <div className="featured_box_heading">
                        99.9% Uptime Guarantee
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 no_padding padding_top_50 margin_box">
                    <div className="featured_box_img">
                      <figure>
                        <img src="assets/images/featured_img06.png" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding">
                    <div className="featured_box text-left">
                      <div className="featured_box_heading">
                        Money Back Guarantee
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Blog Posts--> */}
        <section className="padding_top_60 padding_bottom_60 text-center">
          <div className="container">
            <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
              Latest Posts
            </h2>
            <p className="margin_bottom_60">
              Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur
            </p>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 text-left first_blog_post">
                <div className="first_blog_post_img_box">
                  <figure>
                    <img
                      src="assets/images/blog_post_img01.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <div className="featured_post_tag">Featured Post</div>
                </div>
                <div className="latest_post_content">
                  <div className="font_size_16 line_height_36 color_ff007e margin_bottom_15">
                    January 05, 2019
                  </div>
                  <div className="font_size_20 line_height_30 color_222 margin_bottom_40">
                    Powerful Web Hosting with WordPress Optimized Solution
                    Available.
                  </div>
                  <a href="#" className="learn-more">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <p className="button-text">Get Started Now</p>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 text-left">
                <div className="blog_post_box margin_bottom_35">
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-5 inner_blog_post_box">
                      <figure className="">
                        <img
                          src="assets/images/blog_post_img02.png"
                          alt=""
                          className=""
                        />
                      </figure>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-7 outer_content_blog_post_box">
                      <div className="content_blog_post_box">
                        <div className="font_size_14 line_height_24 color_ff007e margin_bottom_10">
                          January 01, 2018
                        </div>
                        <p className="font_size_16 line_height_24 color_222 margin_bottom_15">
                          Disk Storage amount of storage available for uploading
                          files and huge data storage.
                        </p>
                        <a href="#" className="learn-more">
                          <div className="circle">
                            <span className="icon arrow"></span>
                          </div>
                          <p className="button-text">Get Started Now</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_post_box">
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-5 inner_blog_post_box">
                      <figure className="">
                        <img
                          src="assets/images/blog_post_img03.png"
                          alt=""
                          className=""
                        />
                      </figure>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-7 outer_content_blog_post_box">
                      <div className="content_blog_post_box">
                        <div className="font_size_14 line_height_24 color_ff007e margin_bottom_10">
                          January 01, 2018
                        </div>
                        <p className="font_size_16 line_height_24 color_222 margin_bottom_15">
                          Disk Storage amount of storage available for uploading
                          files and huge data storage.
                        </p>
                        <a href="#" className="learn-more">
                          <div className="circle">
                            <span className="icon arrow"></span>
                          </div>
                          <p className="button-text">Get Started Now</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Testimonial Section--> */}
        <section className="padding_top_60 padding_bottom_60 text-center">
          <div className="container">
            <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
              Happy Clients
            </h2>
            <div className="row">
              <div className="col"></div>
              <div className="col-xl-10 col-lg-10 margin_top_50">
                <div
                  id="testimonial_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* <!-- Indicators --> */}
                  <ul className="carousel-indicators testimonial_indicators">
                    <li data-target="#testimonial_slider" data-slide-to="0">
                      <figure>
                        <img src="assets/images/testimonial_img01.png" alt="" />
                      </figure>
                    </li>
                    <li data-target="#testimonial_slider" data-slide-to="1">
                      <figure>
                        <img src="assets/images/testimonial_img02.png" alt="" />
                      </figure>
                    </li>
                    <li
                      data-target="#testimonial_slider"
                      data-slide-to="2"
                      className="active"
                    >
                      <figure>
                        <img src="assets/images/testimonial_img05.png" alt="" />
                      </figure>
                    </li>
                    <li data-target="#testimonial_slider" data-slide-to="3">
                      <figure>
                        <img src="assets/images/testimonial_img04.png" alt="" />
                      </figure>
                    </li>
                    <li data-target="#testimonial_slider" data-slide-to="4">
                      <figure>
                        <img src="assets/images/testimonial_img03.png" alt="" />
                      </figure>
                    </li>
                  </ul>

                  {/* <!-- The slideshow --> */}
                  <div className="carousel-inner">
                    <div className="carousel-item testimonial_box_content">
                      <figure className="margin_bottom_15">
                        <img
                          src="assets/images/testimonial_quotes.png"
                          alt=""
                        />
                      </figure>
                      <div className="client_name margin_bottom_20">
                        John Robert
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                    <div className="carousel-item testimonial_box_content">
                      <figure className="margin_bottom_15">
                        <img
                          src="assets/images/testimonial_quotes.png"
                          alt=""
                        />
                      </figure>
                      <div className="client_name margin_bottom_20">
                        John Robert
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                    <div className="carousel-item active testimonial_box_content">
                      <figure className="margin_bottom_15">
                        <img
                          src="assets/images/testimonial_quotes.png"
                          alt=""
                        />
                      </figure>
                      <div className="client_name margin_bottom_20">
                        John Robert
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                    <div className="carousel-item testimonial_box_content">
                      <figure className="margin_bottom_15">
                        <img
                          src="assets/images/testimonial_quotes.png"
                          alt=""
                        />
                      </figure>
                      <div className="client_name margin_bottom_20">
                        John Robert
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                    <div className="carousel-item testimonial_box_content">
                      <figure className="margin_bottom_15">
                        <img
                          src="assets/images/testimonial_quotes.png"
                          alt=""
                        />
                      </figure>
                      <div className="client_name margin_bottom_20">
                        John Robert
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Left and right controls --> */}
                <a
                  className="carousel-control-prev"
                  href="#testimonial_slider"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#testimonial_slider"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
        {/* <!--Build Your Website--> */}
        <section className="padding_top_60 padding_bottom_60 text-center">
          <div className="container">
            <div className="coa_block">
              <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">
                Build Your Website with Hostiko
              </h2>
              <p className="margin_bottom_40">
                From professional business to enterprise, we've got you covered!
              </p>
              <a href="#" className="learn-more">
                <div className="circle">
                  <span className="icon arrow"></span>
                </div>
                <p className="button-text">Get Started Now</p>
              </a>
            </div>
          </div>
        </section>
        {/* <!--Ends Here--> */}
      </main>
    </>
  );
};
export default Home;
