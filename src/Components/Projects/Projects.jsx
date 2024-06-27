import React, { useState } from 'react';
import ProjectData from './ProjectData'; // Import ProjectData from the separate file

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const filteredProjects = ProjectData.filter(project => {
    if (activeTab === 'Projects') return true;
    return project.tags.includes(activeTab);
  });

  return (
    <section id="projects" className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-white"data-aos="fade-up">Recent Works</h2>
      <div className="flex space-x-4 mb-8"data-aos="fade-up">
        <button
          onClick={() => setActiveTab('Projects')}
          className={`py-2 px-4 rounded ${activeTab === 'Projects' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-200'}`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('Fullstack')}
          className={`py-2 px-4 rounded ${activeTab === 'Fullstack' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-200'}`}
        >
          Fullstack
        </button>
        <button
          onClick={() => setActiveTab('MERN Stack')}
          className={`py-2 px-4 rounded ${activeTab === 'MERN Stack' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-200'}`}
        >
          MERN Stack
        </button>
      </div>
      <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
        {filteredProjects.map(project => (
          <div key={project.id} className="group bg-gray-800 shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-300">
            <div className="p-6">
              <div>
                <h3 className="text-2xl text-center font-semibold text-white mb-2">{project.title}</h3>
              </div>
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="p-2 w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="p-2">
                <p className="text-gray-300 text-center mb-4">{project.description}</p>
              </div>
              <div className="flex justify-center gap-3">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-center w-20 rounded bg-purple-700 px-2 py-3 hover:text-black">Live</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-center w-20 rounded bg-purple-700 px-2 py-3 hover:text-black">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
