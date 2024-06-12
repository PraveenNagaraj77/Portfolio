import React, { useState } from "react";
import "../../Components/Skills/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaCloud,
  FaEnvelope,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <h2 className="text-3xl text-white text-center font-bold mb-10">
        Skills
      </h2>
      <div className="container w-full mx-auto text-center flex flex-col md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 justify-center flex-row md:flex-wrap">
          {activeTab === "Frontend" && (
            <div className="flex justify-center mb-5 md:mb-0 md:flex-wrap">
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-orange-500">
                <FaHtml5 />
              </div>
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500">
                <FaCss3Alt />
              </div>
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-yellow-500">
                <FaJs />
              </div>
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500">
                <SiTailwindcss />
              </div>
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-blue-400">
                <FaBootstrap />
              </div>
              <div className="icon m-4 text-3xl sm:text-5xl md:text-9xl text-blue-500">
                <FaReact />
              </div>
            </div>
          )}
          {activeTab === "Backend" && (
            <div className="flex w-full justify-center flex-row md:flex-wrap">
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-green-500">
                <FaNodeJs />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-gray-700">
                <SiExpress />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-green-500">
                <SiMongodb />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-blue-500">
                <FaDatabase />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-red-500">
                <FaJava />
              </div>
            </div>
          )}
          {activeTab === "Tools" && (
            <div className="flex w-full justify-center flex-row md:flex-wrap">
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-red-600">
                <FaGitAlt />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-white">
                <FaGithub />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-purple-900">
                <FaCode />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-orange-600">
                <FaEnvelope />
              </div>
              <div className="icon m-4 text-4xl sm:text-5xl md:text-9xl text-blue-500">
                <FaCloud />
              </div>
            </div>
          )}
        </div>
        <div className="max-w-xl mx-auto mt-6 md:mt-0">
          <div className="flex justify-center space-x-4">
            <button
              className={`py-2 px-4 ${
                activeTab === "Frontend"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleTabClick("Frontend")}
            >
              Frontend
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "Backend"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleTabClick("Backend")}
            >
              Backend
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "Tools"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded`}
              onClick={() => handleTabClick("Tools")}
            >
              Tools
            </button>
          </div>
          <div className="mt-6">
            {activeTab === "Frontend" && (
              <div>
                <h2 className="text-xl text-green-500 font-bold mt-10 mb-4">
                  Frontend Technologies
                </h2>
                <div className="w-full md:w-1/2 md:ml-16 ">
                  <ul className="text-white font-semibold">
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>HTML</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-orange-500 h-4 rounded-full progress-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>CSS</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full progress-bar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>JavaScript</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-yellow-500 h-4 rounded-full progress-bar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>TailwindCss</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Bootstrap</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-purple-500 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>ReactJs</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full progress-bar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    {/* Add more frontend technologies here with corresponding percentages */}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "Backend" && (
              <div>
                <h2 className="text-xl text-green-500  font-bold mt-10 mb-4">
                  Backend Technologies
                </h2>
                <div className="w-full md:w-1/2 md:ml-16">
                  <ul className="text-white font-semibold">
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Node.js</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-green-500 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Express.js</span>
                        <span>50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-gray-700 h-4 rounded-full progress-bar"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>MongoDB</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-green-500 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>SQL</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full progress-bar"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Java</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-red-500 h-4 rounded-full progress-bar"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    {/* Add more backend technologies here with corresponding percentages */}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "Tools" && (
              <div>
                <h2 className="text-xl text-green-500 font-bold mt-10 mb-4">
                  Development Tools
                </h2>
                <div className="w-full md:w-1/2 md:ml-16">
                  <ul className="text-white font-semibold">
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Git</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-red-600 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Github</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-gray-700 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>VS Code</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full progress-bar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>Postman</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-orange-500 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex justify-between">
                        <span>API Integration</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-purple-600 h-4 rounded-full progress-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                    {/* Add more development tools here with corresponding percentages */}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
