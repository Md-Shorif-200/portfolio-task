import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'

const  img_1 = '/portfolio-img/img-1.webp'
const  img_2 = '/portfolio-img/img-2.webp'
const  img_3 = '/portfolio-img/img-3.webp'
const  img_4 = '/portfolio-img/img-4.webp'
const  img_5 = '/portfolio-img/img-5.webp'
const  img_6 = '/portfolio-img/img-6.webp'
const  img_7 = '/portfolio-img/img-7.webp'

export default function Portfolio() {
  return (
    <section className=" w-full h-full px-6 lg:px-10  pt-10 lg:pt-20">
      <div className="xl:w-[646px] h-full">
  
        
        {/* Title */}
        <h2 className="section_title mt-8 mb-5">Portfolio</h2>

        {/*  Tabs */}
        <div className=" w-full  xl:h-[60px]  mb-5 portfolio_tab flex flex-wrap justify-start  items-center gap-1 lg:gap-3 px-1 lg:px-2">
          <button className=" px-2 lg:px-3 py-1 lg:py-2 text-[16px] font-normal border-b-2 text-[#f1a43a] border-[#f1a43a]transition-all cursor-pointer ">All</button>
          <button className="portfolio_tab_btn ">Graphic Design</button>
          <button className="portfolio_tab_btn ">Mobile App</button>
          <button className="portfolio_tab_btn ">Photography</button>
          <button className="portfolio_tab_btn ">UI/UX Design</button>
        </div>

   
        <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-4 lg:gap-6">

              <div className='design_project_1'> 
                   {/* Item 1 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/5] md:aspect-auto mb-5">
                <div className='w-full h-[321px] '>
                 <Image 
              src={img_1} 
              alt="Figma Mockup" 
              fill
              
            />
             </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Figma Mockup</h3>
              <p className="text-gray-400 text-sm">Figma mockup PSD editable</p>
            </div>
          </div>


           {/* Item 2 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer mb-5">
                <div className='w-full h-[447px] '>
                 <Image 
              src={img_2} 
              alt="Brand Design" 
              fill
              
            />
             </div> 
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Brand Design</h3>
              <p className="text-gray-400 text-sm">Packaging mockup</p>
            </div>
          </div>



   {/* Item 3  */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer md:row-span-2 mb-5">
         <div className='w-full h-[204px] '>
                 <Image 
              src={img_3} 
              alt="Mobail App " 
              fill
              
            />
             </div> 
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">App Mockup</h3>
              <p className="text-gray-400 text-sm">Modern mobile UI design</p>
            </div>
          </div>


              </div>


              <div className='design_project_2'> 
                 {/* Item 4 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer mb-5">
             <div className='w-full h-[248px] '>
                 <Image 
              src={img_4} 
              alt="Smart Watch" 
              fill
              
            />
             </div>
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Product Photography</h3>
              <p className="text-gray-400 text-sm">Smart watch showcase</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer mb-5">
        <div className='w-full h-[220px] '>
                 <Image 
              src={img_5} 
              alt="Smart Watch" 
              fill
              
            />
             </div> 
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Mug Design</h3>
              <p className="text-gray-400 text-sm">Custom ceramic mug</p>
            </div>
          </div>
          


          {/* Item 6 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer mb-5">
        <div className='w-full h-[220px] '>
                 <Image 
              src={img_6} 
              alt="Smart Watch" 
              fill
              
            />
             </div> 
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Mug Design</h3>
              <p className="text-gray-400 text-sm">Custom ceramic mug</p>
            </div>
          </div>



          {/* Item 5 */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer mb-5">
        <div className='w-full h-[260px] '>
                 <Image 
              src={img_7} 
              alt="Smart Watch" 
              fill
              
            />
             </div> 
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-md font-bold text_secondary_color ">Mug Design</h3>
              <p className="text-gray-400 text-sm">Custom ceramic mug</p>
            </div>
          </div>




              </div>
             
          
        

         

       

          

        </div>
        </div>
         
  
    </section>
  )
}


