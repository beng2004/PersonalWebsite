import React from "react";

interface Experience {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: string[];
}

interface DescriptionProps {
  experience: Experience;
}

const Description: React.FC<DescriptionProps> = ({ experience }) => {
  const { date, title, subtitle, description, skillsUsed } = experience;

  return (
    <div className="mb-8  flex justify-center items-center h-full text-center">
      <div className=" w-full px-4"> {/* Adjusted width using max-w-4xl */}
        <h3 className="text-4xl font-semibold my-2 py-1 tracking-tight">{title}</h3>
        <p className="text-2xl my-6 text-neutral-400 font-light">{subtitle}</p>
        <div className="w-full px-4">
          <p className="max-w-sm mx-auto text-lg mt-8 my-2 py-2 font-light tracking-normal">{description}</p> {/* Centered text */}
        </div>
        <div className="mt-2 flex flex-wrap justify-center mb-4"> {/* Centered skills */}
          {skillsUsed.map((skill, index) => (
            <span
              key={index}
              className="bg-primary-200 text-primary-800 text-sm px-4 rounded-full mt-4"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
