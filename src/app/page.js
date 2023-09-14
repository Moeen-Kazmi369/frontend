import Blog_Posts from "@/components/Home/Blog_Posts";
import Features_Section from "@/components/Home/Features_Section";
import Guarantee_Section from "@/components/Home/Guarantee_Section";
import Hero_banner from "@/components/Home/Hero_banner";
import Hosting_Features_Plans from "@/components/Home/Hosting_Features_Plans";
import Hosting_Plans from "@/components/Home/Hosting_Plans";
import Testimonial_Section from "@/components/Home/Testimonial_Section";
import React from "react";
const Home = () => {
  return (
    <>
      <main>
        <Hero_banner/>
        <Hosting_Plans/>
        <Hosting_Features_Plans/>
        <Guarantee_Section/>
        <Features_Section/>
        <Blog_Posts/>
        <Testimonial_Section/>
      </main>
    </>
  );
};
export default Home;