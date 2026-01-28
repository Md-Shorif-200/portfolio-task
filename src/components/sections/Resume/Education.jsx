import React from "react";
import { SectionSubtitle } from "../../shared/SectionSubtitle";
import { PiGraduationCapBold } from "react-icons/pi";
import Image from "next/image";

const Resume_Shape = '/Resume_Shape (1).png'

export default function Education() {
  return (
    <section className="mb-10 lg:mb-14">
      {/* section title  */}
    
      <div className=" mt-10 lg:mt-0 mb-6  lg:my-8">
        <SectionSubtitle Icon={PiGraduationCapBold} label="Education" />
      </div>

      {/* Resume Education  Content */}

      <main className="  relative ">
     
       {/* resume shape */}
  <div className="absolute left-0 top-0 z-0">
    <div className="relative w-[15px] h-[425px]">
      <Image
        src={Resume_Shape}
        alt="Resume-Shape"
        fill
        className=""
      />
    </div>
  </div>
        
          <div className=" ml-6">
            <div className="mb-10 ">
              <span className="resume_badge">2016-2020</span>

              <div className="resume_card mb-10">
                <h3 className="text-[18px] font-bold   text_primary_color capitalize ">
                  Harvard University
                </h3>
                <p className="text-[12px] text-[rgba(143,143,143,1)] font-light  mt-2 mb-3 ">
                  B.A. and M.S., Computer Science
                </p>
                <hr className="border-gray-800 mb-4" />
                <p className="text-[16px] font-normal text_secondary_color  ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>

            <div className="mb-10 ">
              <span className="resume_badge">2014-2016</span>

              <div className="resume_card mb-10">
                <h3 className="text-[18px] font-bold   text_primary_color capitalize ">
                  Helwan University
                </h3>
                <p className="text-[12px] text-[rgba(143,143,143,1)] font-light  mt-2 mb-3 ">
                  Bachelor Degree{" "}
                </p>
                <hr className="border-gray-800 mb-4" />
                <p className="text-[16px] font-normal text_secondary_color  ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>
          </div>

             
      
      </main>
    </section>
  );
}
