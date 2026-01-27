

export const SectionSubtitle = ({ Icon, label }) => {
  return (
    <div className="flex items-center gap-4  cursor-pointer">
      <div className='w-10 h-10  section_sub_title_bg text-white rounded-md flex justify-center items-center'>
     
        <Icon size={20} />
      </div>
      <span className={`text-white font-medium`}>
        {label}
      </span>
    </div>
  );
};