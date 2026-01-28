export default function SkillsSection() {
  const skills = [
    { name: "UI/UX Design", level: "95%" },
    { name: "Photography", level: "90%" },
    { name: "Creativity", level: "80%" },
    { name: "Team Work", level: "95%" },
    { name: "Web Design", level: "95%" },
  ];

  return (
    <section className=" w-full  h-full px-6 lg:px-10 pt-20">
      <div className="xl:w-[646px] h-full">
        <h2 className="section_title">Skills</h2>
        
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              {/* Skill Label and Percentage */}
              <div className="flex justify-between items-center mb-2">
                <span className="skill_name">
                  {skill.name}
                </span>
                <span className=" text-[16px] lg:text-[20px] text_primary_color       font-medium  ">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full skills_progressbar_bg h-2 lg:h-3">
                {/* Active Progress Bar */}
                <div 
                  className="bg-[#f1a43a] h-2 lg:h-3 rounded-[25px] " 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}