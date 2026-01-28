import React from "react";
import { SectionSubtitle } from "../shared/SectionSubtitle";
import { TbHome } from "react-icons/tb";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEdit,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { RxDownload } from "react-icons/rx";

export default function Banner() {
  return (
    <section className=" banner_section w-full  sm:h-140 h-180">
      <header className="w-full h-26.5 flex justify-between items-center  bg-[rgba(18,20,20,1)] px-6 lg:px-10  border-l border-[#353535]">
        <SectionSubtitle Icon={TbHome} label="Home" />

        <button className="secondary_btn capitalize text_primary_color text-[14px] lg:text-[16px] font-bold rounded-[50px] hover:bg-[#f1a43a] ">
          tack to me
        </button>
      </header>

      {/* --- banner content--- */}
      <main className=" w-full pl-6 lg:pl-10 py-10  flex  justify-between relative">
        <div className="w-[80%]">
          <span className="text-[16px] text_primary_color font-bold leading-5.25 uppercase ">
            Introduction
          </span>

          <h2 className=" text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text_secondary_color my-2 capitalize ">
            I&apos;m  a Creative Developer & <br />
            <span className="text-white">UI/UX Design Expert</span>
          </h2>

          <div className="flex gap-3 text_secondary_color text-[14px] lg:text-[16px] mt-2 mb-6">
            <span>24 years</span>
            <span>/</span>
            <span>Robert Smith</span>
            <span>/</span>
            <span>UK London</span>
          </div>

          <p className="text-[14px] lg:text-[16px] font-light lg:leading-[23px] text-[rgba(198,198,198,1)] mb-10 text-justify ">
            Prolific, full stack web developer with a passion for metrics and
            beating former best-yets. Prototyped 25 new product features per
            year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>

          {/* Download CV Button */}
  
            <button className="primary_btn mb-6 lg:mb-0">
              <span className="text-[14px] lg:text-[16px]   font-bold text_secondary_color ">
                Download CV
              </span>
              <RxDownload className=" text-[20px] lg:text-[24px] text_secondary_color font-bold  " />
            </button>
       
        </div>

        {/*  Language  */}
        <div className="w-[20%] absolute right-0 lg:bottom-4  flex flex-col gap-4 items-center">
          <span className="[writing-mode:vertical-lr] text-[rgba(165,165,165,1)] text-[14px] lowercase  mb-4">
            © design by themefisher developed by gethugothemes
          </span>

          <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
            <div className="text-[14px] text-[#C5C5C5]" > Fr </div>
          </div>

           <div className="w-8 h-8 bg-[#F6AA3A] rounded-full flex justify-center items-center " >
                                 <div className="text-[14px] text-[#C5C5C5]" > En </div>
                             </div>


        </div>
      </main>
    </section>
  );
}
