import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        // ketika animasi hanya ingin 1x khusus img
        // viewport={{once: true}}
        src="https://images.unsplash.com/photo-1534694895098-4b226f923532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem
          corporis voluptates dolorum ad dolore suscipit culpa omnis ipsa?
          Dignissimos tempore facere quam qui est fugit, expedita placeat
          adipisci maiores?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veritatis, illum animi ex mollitia iste, laboriosam esse nisi
          maxime consequuntur magni numquam fugiat reiciendis optio fugit earum.
          Quia itaque illo veritatis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Magni praesentium, iure eius cum ad molestias
          consectetur sequi ex, voluptatibus ducimus mollitia pariatur in neque!
          Doloremque ratione illum non et. Sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque doloribus illo aliquid id amet
          nihil provident maiores porro in iste officiis voluptates rem eum
          assumenda, fugiat ad mollitia expedita corporis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis, beatae ullam autem minus
          quam sunt earum dicta quas tenetur, molestiae eligendi facere
          reprehenderit ipsam porro dolores quisquam obcaecati aut ipsa?
        </p>
      </div>
    </motion.div>
  );
}