import Banner from "@/components/sections/Banner";
import Portfolio from "@/components/sections/Portfolio";
import Resume from "@/components/sections/Resume/Resume";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <section className='w-full  bg_primary_color'>
        <Banner/>
         <Resume/>
          <Skills/>
           <Portfolio/>
    </section>
  )
}
