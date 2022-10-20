import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 p-4 object-cover w-20 h-20 md:w-28 md:h-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white/80 h-20 w-20  md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="text-sm md:text-base flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100">{skill?.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
