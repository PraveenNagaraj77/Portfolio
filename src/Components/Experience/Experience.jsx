import React from 'react';

const experiences = [
  {
    title: "Post Graduate Engineer Trainee",
    company: "HCL Technologies, Chennai",
    duration: "August 2022 - July 2023",
    responsibilities: [
      "Facilitated data transformation into intuitive reports.",
      "Utilized Dot-net and SQL, displayed data using bar charts and pie charts.",
      "Contributed to project plans, specifications, and reports."
    ]
  },
  {
    title: "Programmer Analyst Intern",
    company: "Cognizant, Chennai",
    duration: "February 2022 - July 2022",
    responsibilities: [
      "Completed Java full stack development training.",
      "Worked on Java Angular project (Pet Clinic Spring Boot Application)."
    ]
  },
  {
    title: "Intern",
    company: "Tech-Citi Software Consulting Private Limited, Bangalore",
    duration: "June 2020 - July 2020",
    responsibilities: [
      "Developed E-cab Booking System, a web development project for cab bookings."
    ]
  }
];




const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-white"data-aos="fade-up">Work Experience</h2>
      <div data-aos="flip-up"  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-2/3 lg:w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
            <p className="text-xl text-gray-400">{exp.company}</p>
            <p className="text-lg text-gray-500 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-400">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-gray-400">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
