import React from 'react'

const Page = () => {
  return (
    <main>
        {/* <!--Hero Banner Section--> */}
<section className="hero_banner_img padding_top_60 padding_bottom_60">
    <div className="banner_content">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 padding_top_100 contact_page_banner_content_box order02 mobile_text_center">
                    <h1 className="font_size_48 line_height_60 color_222 margin_bottom_20 ">Contact Us</h1>
                    <p className="font_size_18 line_height_30 color_5a5f69 margin_bottom_50 ">Hostiko is a global provider company of web hosting and
                        related services in all over the world.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center text-center">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                            <div className="contact_box">
                                <div className="contact_box_image01"></div>
                                <div className="contact_box_name margin_top_10">Call Us</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                            <div className="contact_box">
                                <div className="contact_box_image02"></div>
                                <div className="contact_box_name margin_top_10">Email Us</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                            <div className="contact_box">
                                <div className="contact_box_image03"></div>
                                <div className="contact_box_name margin_top_10">Live Chat</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 order01 contact_page_img">
                    <figure><img src="assets/images/sub_banner_img07.svg" alt="" className="img-fluid"/></figure>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--End Slider Section--> */}
{/* <!--Contact Details Section--> */}
<section className="padding_top_60 padding_bottom_60 text-center">
    <div className="container">
        <h2 className="margin_bottom_70 font_size_36 line_height_48 color_222">Mailing Address</h2>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact_us_box mobile_margin_box">
                    <div className="contact_us_box_heading margin_bottom_15">Address</div>
                    <p>121 King Street,<br/>
                        Melbourne Victoria 3000<br/>
                        Australia.</p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact_us_box mobile_margin_box">
                    <div className="contact_us_box_heading margin_bottom_15">Phone</div>
                    <ul className="contact_us_box_list">
                        <li>Phone: <a href="tel:(123) 123-456789">(123) 123-456789</a></li>
                        <li>Help: <a href="tel:(123) 123-456789">(123) 123-456789</a></li>
                        <li>Intl: <a href="tel:(123) 123-456789">(123) 123-456789</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact_us_box">
                    <div className="contact_us_box_heading margin_bottom_15">Email</div>
                    <ul className="contact_us_box_list">
                        <li><a href="mailto:support@hostikocom">support@hostikocom</a></li>
                        <li><a href="mailto:info@hostiko.com">info@hostiko.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--Ends Here--> */}
{/* <!--Contact Form--> */}
<section className="padding_bottom_60 padding_top_60 text-center">
    {/* <!--Container--> */}
    <div className="container">
        {/* <!--Section Heading--> */}
        <h2 className="margin_bottom_20 font_size_36 line_height_48 color_222">Contact Form</h2>
        <p className="margin_bottom_50">Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur.</p>
        <form action="" id="contactpage">
            <div className="row">
                <div className="col"></div>
                <div className="col-xl-10 col-lg-10">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <input type="text" className="contact_fields w-100 margin_bottom_25 fname" id="fname" name="fname" placeholder="First Name" required/>
                            <input type="email" className="contact_fields w-100 margin_bottom_25 email" id="email" name="email" placeholder="Email" required/>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <input type="text" className="contact_fields w-100 margin_bottom_25 lname" id="lname" name="lname" placeholder="Last Name" />
                            <input type="number" className="contact_fields w-100 margin_bottom_25 phone" id="phone" name="phone" placeholder="Phone Number"/>
                        </div>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="contact_fields w-100 margin_bottom_50" placeholder="Your Message"></textarea>
                    <button href="#" className="learn-more" id="submit" name="submit">
                        <div className="circle">
                            <span className="icon arrow"></span>
                        </div>
                        <p className="button-text">Get Started Now</p>
                    </button>
                    <div id="form_result"></div>
                </div>
                <div className="col"></div>
            </div>
        </form>
    </div>
</section>
{/* <!--Ends Here--> */}
    </main>
  )
}

export default Page