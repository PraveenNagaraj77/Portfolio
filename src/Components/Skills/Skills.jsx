import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaBootstrap, FaGitAlt, FaGithub, FaCode, FaCloud, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <h2 className="text-3xl text-white text-center font-bold mb-10">Skills</h2>
      <div className="container w-full mx-auto text-center flex flex-col md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 justify-center flex-row md:flex-wrap">
          {activeTab === 'Frontend' && (
            <div className='flex justify-center  mb-5  md:mb-0 md:flex-wrap'>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-orange-500"><FaHtml5 /></div>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500"><FaCss3Alt /></div>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-yellow-500"><FaJs /></div>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500"><SiTailwindcss /></div>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-blue-400"><FaBootstrap /></div>
              <div className="m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500"><FaReact /></div>
            </div>
          )}
          {activeTab === 'Backend' && (
            <div className='flex w-full justify-center flex-row  md:flex-wrap'>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-green-500"><FaNodeJs /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-gray-700"><SiExpress /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-green-500"><SiMongodb /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-blue-500"><FaDatabase /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-red-500"><FaJava /></div>
            </div>
          )}
          {activeTab === 'Tools' && (
            <div className='flex w-full justify-center flex-row md:flex-wrap'>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-red-600"><FaGitAlt /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-white"><FaGithub /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-purple-900"><FaCode /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-orange-600"><FaEnvelope /></div>
              <div className="m-4 text-4xl sm:text-5xl md:text-9xl text-blue-500"><FaCloud /></div>
            </div>
          )}
        </div>
        <div className="max-w-xl mx-auto mt-6 md:mt-0">
          <div className="flex justify-center space-x-4">
            <button
              className={`py-2 px-4 ${activeTab === 'Frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
              onClick={() => handleTabClick('Frontend')}
            >
              Frontend
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'Backend' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
              onClick={() => handleTabClick('Backend')}
            >
              Backend
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'Tools' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
              onClick={() => handleTabClick('Tools')}
            >
              Tools
            </button>
          </div>
          <div className="mt-6">
            {activeTab === 'Frontend' && (
              <div>
                <h2 className="text-xl text-green-500 font-bold mt-10 mb-4">Frontend Technologies</h2>
                <ul className='text-white justify-start font-semibold'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TailwindCss</li>
                  <li>Bootstrap</li>
                  <li>ReactJs</li>
                  {/* Add more frontend technologies here */}
                </ul>
              </div>
            )}
            {activeTab === 'Backend' && (
              <div>
                <h2 className="text-xl text-green-500  font-bold mt-10 mb-4">Backend Technologies</h2>
                <ul className='text-white justify-start font-semibold'>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>Java</li>
                  {/* Add more backend technologies here */}
                </ul>
              </div>
            )}
            {activeTab === 'Tools' && (
              <div>
                <h2 className="text-xl text-green-500 font-bold mt-10 mb-4">Development Tools</h2>
                <ul className='text-white justify-start font-semibold'>
                  <li>Git</li>
                  <li>Github</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  {/* Add more development tools here */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

