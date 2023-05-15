import React from "react";
import ProfilePic from "../assets/Mayuri.jpeg";


const Profile = () => {
  const skills = [
    "React",
    "Redux",
    "Javascript",
    "NodeJS",
    "ExpressJs",
    "MySql",
    "GraphQL",
    "Tailwindcss",
    "HTML",
    "CSS",
  ];
  return (
    <>
      <div className="grid grid-cols-6">
        <div class="h-32 lg:h-40 bg-gradient-to-r from-cyan-500 to-blue-500 col-span-4 col-start-2 border-gray-400 rounded-md">
          <img
            src={ProfilePic}
            alt="Mayuri"
            className="mt-8 rounded-full p-4 w-36 lg:w-56"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 mt-16 lg:mt-28">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold">Mayuri Ladhane</h1>
          <h1>
            Associate Software Engineer at CNT Labs | Javascript | ReactJS |
            NodeJS
          </h1>
          <h1 className="text-gray-500 mt-2">Pune,Maharashtra,India</h1>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">Skills</h1>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <h1
                key={skill}
                className="bg-cyan-600 text-white rounded-2xl w-fit px-2 m-2"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">About</h1>
          <ul>
            <li className="m-1 p-1">
              1. A skilled developer with a strong focus on programming using
              React, Node.js, and Express.js. With a keen eye for design and
              functionality, experienced in creating interactive and responsive
              web applications that are visually appealing and user-friendly.{" "}
            </li>

            <li className="m-1 p-1">
              2. I am proficient in writing clean, efficient code and following
              best practices for frontend development. I have expertise in
              integrating APIs and data sources using tools like Axios and
              GraphQL.
            </li>

            <li className="m-1 p-1">
              3. I work collaboratively with my team to implement project
              requirements and provide feedback to improve the application. I am
              committed to staying current with the latest technologies and
              trends in frontend development.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">Experience</h1>
          <div className="p-4">
            <h1 className="text-lg font-extrabold text-gray-900">
              Associate Software Engineer
            </h1>
            <h1 className="text-sm font-semibold text-gray-900">
              Condé Nast Technology Labs
            </h1>
            <h1 className="text-gray-500 text-sm">09/2021 - Present</h1>
            <h1 className="text-gray-500 text-sm">Banglore,Karnataka,India</h1>
          </div>
          <div className="p-4">
            <h1 className="text-lg font-extrabold text-gray-900">Intern</h1>
            <h1 className="text-sm font-semibold text-gray-900">
              Raja Software Labs
            </h1>
            <h1 className="text-gray-500 text-sm">02/2021 - 04/2021</h1>
            <h1 className="text-gray-500 text-sm">Pune,Maharashtra,India</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2 mb-12">
          <h1 className="text-2xl font-extrabold my-4"> Connect </h1>
          <div className="inline-flex">
          <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="linkedin"></img>
          <a href="https://corsproxy.io/?https://linkedin.com/in/mayuri-ladhane" className="pl-2"></a>
          </div>
          <div className="inline-flex">
          <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedin"></img>
          <a href="https://corsproxy.io/?https://linkedin.com/in/mayuri-ladhane" className="pl-2"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
