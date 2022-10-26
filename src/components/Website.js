import React from "react";
import {
  FaMoon,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDumpster,
} from "react-icons/fa";
import { useState } from "react";
import Code from "../img/code.png";
import Des from "../img/design.png";
import Con from "../img/consulting.png";
import Dev from "../img/dev-ed-wave.png";
import Web1 from "../img/web1.png";
import Web2 from "../img/web2.png";
import Web3 from "../img/web3.png";
import Web4 from "../img/web4.png";
import Web5 from "../img/web5.png";
import Web6 from "../img/web6.png";

const Website = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : " "}>
      <div className="py-2 bg-white dark:bg-slate-900">
        {/* Navbar */}
        <nav className="flex justify-between">
          <h1 className="px-10 text-teal-500 font-semibold uppercase text-2xl ">
            Developedbyed
          </h1>
          <ul className="flex items-center px-10 gap-5">
            <FaMoon
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
            <li className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-md text-white px-2 py-1">
              Resume
            </li>
          </ul>
        </nav>
        {/* end of navbar */}
        {/* hero */}
        <div className="mt-32 text-center ">
          <h1 className="text-5xl font-bold mb-5">Dimitri Marco</h1>
          <p className="font-semibold text-xl mb-5">Developer and Designer.</p>
          <p className="text-gray-600 md:text-xl max-w-lg mx-auto">
            Freelancer providing service for programing and you need. Join me
            down below and let's get cracking!
          </p>
          <ul className="flex justify-center mx-auto m-5 text-5xl gap-6 text-gray-600">
            <li className="">
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-80 h-80 mx-auto rounded-xl relative">
            <img src={Dev} />
          </div>
        </div>
        {/* End of hero */}
        {/* Card  */}
        <div className="px-5 ">
          <h1 className="text-5xl m-5">Service I Offer</h1>
          <p className="text-gray-500 px-5">
            Since the beginning of my journey as a freelancer developer, I've
            don't remote works agenciseconsuluted
            <span className="text-teal-500">
              for start and collaborated with talanted peopleto create digetal
              for
            </span>
            <span className="text-teal-500">
              I offer frm a wie rage of service, brand design including
              programing and teaching.
            </span>
          </p>
          <div className="lg:flex gap-10">
            <div className="mx-auto items-center   text-center mt-5 h-60 w-80 shadow-2xl bg-gray-300 rounded-lg">
              <img src={Des} className="w-40 mx-auto" />
              <p className="">Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
            <div className="mx-auto items-center   text-center mt-5 h-60 w-80 shadow-2xl bg-gray-300 rounded-lg">
              <img src={Code} className="w-40 mx-auto" />
              <p className="">Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
            <div className="mx-auto items-center   text-center mt-5 h-60 w-80 shadow-2xl bg-gray-300 rounded-lg">
              <img src={Con} className="w-40 mx-auto" />
              <p className="">Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
        {/* End of Card */}
        {/* Portolilfo */}
        <div className="px-5 m-10">
          <h1 className="text-5xl  mb-5">Portolilfo</h1>
          <p className="text-gray-500">
            Since the beginning of my journey as a freelancer developer, I've
            don't remote work for
            <span className="text-teal-500">
              agenciseconsuluted forstart and collaborated with talanted
              peopleto
            </span>
            for both business ans consumer use. I offer frm a wie rage of
            service, brand design including programing and teaching.
          </p>
        </div>
        {/* End of Portolilfo */}
        <div className="px-5 grid lg:grid-cols-3 gap-10 md:grid-row">
          <img className="rounded-2xl" src={Web1} />
          <img className="rounded-2xl" src={Web2} />
          <img className="rounded-2xl" src={Web3} />
          <img className="rounded-2xl" src={Web4} />
          <img className="rounded-2xl" src={Web5} />
          <img className="rounded-2xl" src={Web6} />
        </div>
      </div>
    </div>
  );
};
export default Website;
