import React, { useEffect, useState } from "react";
import useTypewriter from "react-typewriter-hook";
import logo from "../../assets/homelogo.png";

const Home = () => {
  const texts = ["Web Developer", "Fullstack Developer", "Software Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const typedText = useTypewriter(texts[currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[rgb(22,21,19)] flex items-center justify-center relative"
    >
      <div className="justify-center flex flex-col sm:flex-row items-center">
        <div className="text-left">
          <h1 className="text-2xl mt-16 mr-28  sm:text-3xl ml-16 md:text-4xl lg:text-6xl xl:text-6xl px-3 font-bold text-white mb-4">
            Hi,
            <br />
            I'm <span className="text-green-500">Praveen</span>
            <br />
            <span className="text-blue-500">{typedText}</span>
          </h1>
        </div>
        <div className="flex justify-center sm:ml-40">
          <img
            src={logo}
            alt="Description of the image"
            className=" w-50  mt-8 sm:w-56 mr-12 md:w-64 lg:w-full xl:w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
