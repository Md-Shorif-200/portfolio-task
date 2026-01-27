import React from "react";
import { SectionSubtitle } from "../shared/SectionSubtitle";
import { TbHome } from "react-icons/tb";

export default function Banner() {
  return (
    <section className="w-full bg-red-500">
      <header className="w-full h-[106px] flex justify-between items-center  bg-[rgba(18,20,20,1)] px-10 ">
        <SectionSubtitle Icon={TbHome} label="Home" />

        <button className="secondary_btn capitalize text_primary_color text-[16px] font-bold rounded-[50px] ">tack to me</button>
      </header>

      <main></main>
    </section>
  );
}
