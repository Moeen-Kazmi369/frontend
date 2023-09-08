import React from 'react'
import Image from 'next/image';
const Hosting_Features_Plans = () => {
  return (
    <>
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
                  <Image
                    src="/assets/images/welcome_section_img.svg"
                    width={500}
                    height={500}
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
    </>
  )
}

export default Hosting_Features_Plans;