import React from 'react'
import Image from 'next/image';
const Blog_Posts = () => {
  return (
    <>
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
                    <Image
                      src="/assets/images/blog_post_img01.png"
                      width={500}
                      height={500}
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
                        <Image
                          src="/assets/images/blog_post_img02.png"
                          width={500}
                          height={500}
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
                        <Image
                          src="/assets/images/blog_post_img03.png"
                          width={500}
                          height={500}
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
    </>
  )
}

export default Blog_Posts;