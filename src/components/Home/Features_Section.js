import React from 'react'
import Image from 'next/image';
const Features_Section = () => {
  return (
    <>
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
                        <Image
                          src="/assets/images/featured_img01.png"
                          width={500}
                          height={500}
                          alt=""
                        />
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
                        <Image
                          src="/assets/images/featured_img03.png"
                          width={500}
                          height={500}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-9 no_padding order_2">
                    <div className="featured_box text-right">
                      <div className="featured_box_heading">
                        Maximum Security
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
                        <Image
                          src="/assets/images/featured_img05.png"
                          height={500}
                          width={500}
                          alt=""
                        />
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
                        <Image
                          src="/assets/images/featured_img02.png"
                          width={500}
                          height={500}
                          alt=""
                        />
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
                        <Image
                          src="/assets/images/featured_img04.png"
                          width={500}
                          height={500}
                          alt=""
                        />
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
                        <Image
                          src="/assets/images/featured_img06.png"
                          width={500}
                          height={500}
                          alt=""
                        />
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
    </>
  )
}

export default Features_Section;