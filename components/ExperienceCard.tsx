/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://lh3.googleusercontent.com/fife/AAbDypBqQPufZBAI2oseHiyk3_KxIWnhAWWcnSmq3Mb4q7tsKcox-E1OHrA-xDrW92JfOaI9zaGJV-wCleu55LR_b3VlfR-h7oS8KdOgseK6TKQjlOWvd7x94697vTmZvt9HLr-X0IM6v_j0SJ7wElWq4NGEI8MGq4qPgkpJRJEo3XLDdkMa7yCyzUGR-dv1oaN2h55gYgVc9sMGYPOmZCy6_RDa9hsdoDTW4YUcvnC9YHw0zozod3-8mLB_tP-hvPTWJ2sC7GSl5NYplmrlQ2rdmVed3IGhecqbmmyWfGHh6tgA0ySkAJ_U_3F15-uEq-3FlWhdhvkY5pllC8d95FqDgSSgTNTgqMJ2x8TAwAMXmbZm8jUaZUxo5_VlaBq6P1bEX1l1Z4_Bntb5twCDE9jTKgm6F3Jb1LwKzSkG2KGfhxV6B03jaeCRd2ppwnTX_A2ILisN4KghdoJ9UsOjExiNQA7wSG-0Om4hGKi5RZVDRGPirmIgROEWFT5hUsQKsPPF3sDX5ouVfrv3CKY3CaGABxPy8_009NYB_38KbSpqsw51KvI8n9mI9Sh7dmWcq7c9gmhKvRHKoIbj-BVMtv-J6xgd1COseScUpXKrUomaxqnLKAOBNh1exkG9GfDQNWdixBVeI7OWcKs2cTswwrYdX22Wwg23Ah5yREvmnYFPbcEZ1IkQ7QjfpudXPQOQtYrQmd-i67PvH6f24WO-ZvjDWOubp2I6hTfckQ2DjOTq4LStdRAW47JJ-DfSjWeGoIIyBWAllkGWAnzEkMzZ1NrF3b1JkD-Ow5s5TYOU0HVsvrmE9uRWQHWjgx0hY9YZkfAm7irM-AQJnzg-nV0CdBHk-hy1aM5b0o6svzcQAQN8pxsPA9X3RLIaXFjC6pJGNh1qp7ZVjvl29zzT5YgUZTVCML53ab5cNKLo0qVkOWyDeeVyeWkH3pXvvy5QS14=w1281-h919"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of RDEV</h4>
        <p className="font-bold text-2xl mt-1">RDEV</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
