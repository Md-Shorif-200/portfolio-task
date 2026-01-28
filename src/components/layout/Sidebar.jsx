import Image from "next/image";
import React from "react";

const profile_img = "/profile-img.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";




export default function Sidebar() {
  return (
    <section className="w-full h-180  bg_primary_color">
      {/* header */}
      <header className=" w-full flex items-center  bg-[rgba(18,20,20,1)] py-5">

              <div className = 'w-[20%]' ></div>
              <div className = 'w-[80%]' >
                    <h1 className="text-[28px] text_secondary_color font-bold">
          Daryl <span className="text_primary_color">Smith</span>{" "}
        </h1>
        <p className="text-[rgba(194,194,194,1)] text-[16px] font-normal">
          UI/UX designer
        </p>
              </div>
    
      </header>

      <main className="w-full  flex   ">
        {/* navigation icon */}
        <div className="navigation w-[20%]  flex flex-col justify-center items-center gap-10 ">
          <Image
            src="/navigation-logo/home.svg"
            width={32}
            height={32}
            alt="navigation-home-icon"
          />
          <Image
            src="/navigation-logo/profile-about.svg"
            width={32}
            height={32}
            alt="navigation-profile-about-icon"
          />
          <Image
            src="/navigation-logo/portfolio.svg"
            width={32}
            height={32}
            alt="navigation-portfolio-icon"
          />
          <Image
            src="/navigation-logo/blog.svg"
            width={32}
            height={32}
            alt="navigation-blog-icon"
          />
          <Image
            src="/navigation-logo/contact.svg"
            width={32}
            height={32}
            alt="navigation-contact-icon"
          />
        </div>

        {/* profile img and social icon */}
        <div className="profile w-[80%] ">
          <div className="profile_img relative w-full h-125 bg-[#000000] ">
            <Image src={profile_img} fill alt="profile-image" />
          </div>

          <div className="social_icons_box w-full   flex justify-center items-center gap-8 py-4">
            <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
              <FaFacebookF className="text-[16px] text-[#C5C5C5]" />
            </div>
            <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
              <FaLinkedinIn className="text-[16px] text-[#C5C5C5]" />
            </div>
            <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
              <FaPinterestP className="text-[16px] text-[#C5C5C5]" />
            </div>
            <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
              <FaInstagram className="text-[16px] text-[#C5C5C5]" />
            </div>
            <div className="w-8 h-8 bg-[rgba(18,20,20,1)] rounded-full flex justify-center items-center ">
              <FaTwitter className="text-[16px] text-[#C5C5C5]" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
