import React from "react";
import { SectionSubtitle } from "../../shared/SectionSubtitle";
import { PiGraduationCapBold } from "react-icons/pi";
import Image from "next/image";

const Resume_Shape = '/Resume_Shape (1).png'

export default function Education() {
  return (
    <section className="">
    
      <div className="my-8">
        <SectionSubtitle Icon={PiGraduationCapBold} label="Work History" />
      </div>

      {/* Resume work history  Content */}

      <main className="  relative ">
     
       {/* resume shape */}
  <div classNameName="absolute left-0 top-0 z-0">
    <div classNameName="relative w-[15px] h-[425px]">
      <Image
        src={Resume_Shape}
        alt="Resume-Shape"
        fill
        classNameName=""
      />
    </div>
  </div>
        
          <div className=" ml-6">
            <div className="mb-10 ">
              <span className="resume_badge">2016-2022</span>

              <div className="resume_card mb-10">
                <h3 className="text-[18px] font-bold   text_primary_color capitalize ">
                  UI/UX Designer 
                </h3>
                <p className="text-[12px] text-[rgba(143,143,143,1)] font-light  mt-2 mb-3 ">
                  Website Design
                </p>
                <hr className="border-gray-800 mb-4" />
                <p className="text-[16px] font-normal text_secondary_color  ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>

            <div className=" ">
              <span className="resume_badge">2012-2016</span>

              <div className="resume_card">
                <h3 className="text-[18px] font-bold   text_primary_color capitalize ">
                  Junior Web Designer
                </h3>
                <p className="text-[12px] text-[rgba(143,143,143,1)] font-light  mt-2 mb-3 ">
                  Product Design
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
