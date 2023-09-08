import React from 'react'
import Image from 'next/image';
const Hero_banner = () => {
  return (
    <>
     {/* <!--Hero Banner Section--> */}
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
                    <Image
                      src="/assets/images/hero_banner_img.svg"
                      width={500}
                      height={500}
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {/* <!--End Slider Section--> */}
    </>
  )
}

export default Hero_banner;