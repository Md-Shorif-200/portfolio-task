
import Image from 'next/image';


const colOneData = [
  {
    id: 1,
    image: '/blog/img-1.webp',
    date: 'February 12, 2023',
    title: 'The artist vocation is to send light into the human heart',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Andrew S. David'
  },
  {
    id: 2,
    image: '/blog/img-3.webp',
    date: 'October 24, 2023',
    title: 'There are countless variations of Lorem Ipsum, the most famous',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Daryl Dixon'
  },
  {
    id: 3,
    image: '/blog/img-5.webp',
    date: 'January 10, 2023',
    title: 'UI Interactions of the week',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Daryl Dixon'
  }
];

const colTwoData = [
  {
    id: 4,
    image: '/blog/img-2.webp',
    date: 'March 15, 2023',
    title: 'The mission of art is to represent nature not to imitate her',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Tandi Ayah'
  },
  {
    id: 5,
    image: '/blog/img-4.webp',
    date: 'June 18, 2023',
    title: 'The principles of true art is not to portray, but to evoke',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Vivek Lyon'
  },
  {
    id: 6,
    image: '/blog/img-6.webp',
    date: 'July 04, 2023',
    title: 'Party Jokes: Shocking But Unnecessary',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    author: 'Lydia Noah'
  }
];




export default function Blog() {
  const blog_card_1 = (item) => (
    <div key={item.id} className="bg-[#0a0a0a] text-white overflow-hidden mb-8">
      <div className="relative w-full h-[320px]">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-[rgba(116,116,116,1)] text-[12px] font-normal my-1">{item.date}</p>
        <h3 className="text-[18px] font-bold text_secondary_color my-2 ">
          {item.title}
        </h3>
        <p className="text-[rgba(151,151,151,1)] text-[14px] my-3 ">
          {item.desc}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] text-[#f1a43a]"></span>
          <p className="text-xs text-gray-300">Posted by {item.author}</p>
        </div>
      </div>
    </div>
  );
  const blog_card_2 = (item) => (
    <div key={item.id} className="bg-[#0a0a0a] text-white overflow-hidden mb-8">
      <div className="relative w-full h-[240px]">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-[rgba(116,116,116,1)] text-[12px] font-normal my-1">{item.date}</p>
        <h3 className="text-[18px] font-bold text_secondary_color my-2 ">
          {item.title}
        </h3>
        <p className="text-[rgba(151,151,151,1)] text-[14px] my-3 ">
          {item.desc}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] text-[#f1a43a]"></span>
          <p className="text-xs text-gray-300">Posted by {item.author}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full h-full px-6 lg:px-10 pt-10 lg:pt-20  ">
    <div className="xl:w-[646px] h-full">
            <h2 className="section_title">Blog</h2>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
        
        {/* Column 1 */}
        <div className="flex-1">
          {colOneData.map((item) => blog_card_1(item))}
        </div>

        {/* Column 2  */}
        <div className="flex-1">
          {colTwoData.map((item) => blog_card_2(item))}
        </div>

      </div>
    </div>
    </section>
  );
}
