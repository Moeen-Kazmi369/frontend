import React from 'react'

const Hosting_Plans = () => {
  return (
    <>
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
    </>
  )
}

export default Hosting_Plans;