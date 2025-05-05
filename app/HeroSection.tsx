import TestScene from "@/src/components/app/canvas/TestScene";
import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaMessage, FaWhatsapp } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="h-dvh grid grid-cols-1 md:grid-cols-2">
      {/* LEFT: Header */}
      <header className="flex items-center p-4 md:px-12">
        <div className="py-12">
          <span className="text-sm font-light">WEB DEVELOPER</span>
          <h1 className="text-4xl font-bold">
            Hi I'm <span className="text-teal-500">Dimas Fahmi</span>
          </h1>
          <p className="mt-4 font-primary text-white/70 font-light">
            I'm a passionate developer with a strong interest in web
            technologies. I'm always excited to collaborate or connect with
            fellow developers—let's build something great together!
          </p>

          <div className="mt-12 flex gap-2 items-center">
            <button className="px-4 py-2 rounded-full border border-teal-500 text-teal-500 flex items-center gap-2 font-primary hover:bg-teal-800 hover:border-teal-800 cursor-pointer transition-all duration-300 hover:text-white">
              <FaMessage />
              Contact Me
            </button>

            <button className="p-3 rounded-full border border-teal-500 text-teal-500 flex items-center gap-2 font-primary hover:bg-teal-800 hover:border-teal-800 cursor-pointer transition-all duration-300 hover:text-white">
              <FaWhatsapp />
            </button>
            <button className="p-3 rounded-full border border-teal-500 text-teal-500 flex items-center gap-2 font-primary hover:bg-teal-800 hover:border-teal-800 cursor-pointer transition-all duration-300 hover:text-white">
              <FaTelegramPlane />
            </button>
            <button className="p-3 rounded-full border border-teal-500 text-teal-500 flex items-center gap-2 font-primary hover:bg-teal-800 hover:border-teal-800 cursor-pointer transition-all duration-300 hover:text-white">
              <FaInstagram />
            </button>
          </div>
        </div>
      </header>

      {/* RIGHT: 3D Models */}
      <figure className="flex items-center justify-center">
        <TestScene />
      </figure>
    </section>
  );
};

export default HeroSection;
