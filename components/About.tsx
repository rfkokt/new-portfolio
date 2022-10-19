/* eslint-disable react/no-unescaped-entities */
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
        src={
          "https://cdn.sanity.io/images/qtkilkn2/production/635b29a4bc95eff5f3c1710b8863087dcaa39c62-768x1024.jpg"
        }
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Solution-driven professional excelling in highly collaborative work
          environment, finding solutions to challenges and focused on customer
          satisfaction. Proven experience developing consumer-focused web sites
          using HTML, CSS, and JavaScript. Experience building products for
          desktop, phone and mobile app users, meeting highest standards for web
          design, user experience, best practices, usability and speed.
          Responding to challenges by designing and developing solutions and
          building web applications aligned to customer's services. Translating
          solutions into code and working across many different APIs,
          third-party integrations and databases.
        </p>
      </div>
    </motion.div>
  );
}
