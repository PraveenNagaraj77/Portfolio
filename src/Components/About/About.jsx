import React from 'react';
import photo from '../../assets/profile.jpg'


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center mt-4">About Me</h2>
      <div className="container mx-auto text-center flex flex-col items-center  sm:flex-col md:flex-row">    

        <div className="flex  items-center">
          <img src={photo} alt="Your Photo" className=" p-2 w-80  justify-center mr-10 lg:w-96 md:w-50  ml-10  mx-auto cursor-pointer rounded " />
        </div>

        <div className='flex-col justify-center flex-1 lg:ml-10 md:w-auto ml-5 p-3  '>
        <p className="text-lg max-w-2xl mx-auto text-center md:text-start  ">
            <span className='text-green-500 font-bold  '>I'm Praveen</span><br />
        Completed Master Degree in VIT University. Having an experience of One year in IT Industry and I am passionate about working in the field of Technology. I always find ways to improve myself and Adapting with the latest technology to groom myself. I possess with perseverance so as to achieve organizational Goal while being resourceful , innovative and flexible and Gain my Knowledge and Experience.
        </p>
        <button className='mt-4 px-3 py-3 text-white bg-purple-700 hover:bg-purple-950 rounded-xl'>Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default About;
