/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Rifki Okta Pratama",
      "Guy-who-loves-Games.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/fife/AAbDypBqQPufZBAI2oseHiyk3_KxIWnhAWWcnSmq3Mb4q7tsKcox-E1OHrA-xDrW92JfOaI9zaGJV-wCleu55LR_b3VlfR-h7oS8KdOgseK6TKQjlOWvd7x94697vTmZvt9HLr-X0IM6v_j0SJ7wElWq4NGEI8MGq4qPgkpJRJEo3XLDdkMa7yCyzUGR-dv1oaN2h55gYgVc9sMGYPOmZCy6_RDa9hsdoDTW4YUcvnC9YHw0zozod3-8mLB_tP-hvPTWJ2sC7GSl5NYplmrlQ2rdmVed3IGhecqbmmyWfGHh6tgA0ySkAJ_U_3F15-uEq-3FlWhdhvkY5pllC8d95FqDgSSgTNTgqMJ2x8TAwAMXmbZm8jUaZUxo5_VlaBq6P1bEX1l1Z4_Bntb5twCDE9jTKgm6F3Jb1LwKzSkG2KGfhxV6B03jaeCRd2ppwnTX_A2ILisN4KghdoJ9UsOjExiNQA7wSG-0Om4hGKi5RZVDRGPirmIgROEWFT5hUsQKsPPF3sDX5ouVfrv3CKY3CaGABxPy8_009NYB_38KbSpqsw51KvI8n9mI9Sh7dmWcq7c9gmhKvRHKoIbj-BVMtv-J6xgd1COseScUpXKrUomaxqnLKAOBNh1exkG9GfDQNWdixBVeI7OWcKs2cTswwrYdX22Wwg23Ah5yREvmnYFPbcEZ1IkQ7QjfpudXPQOQtYrQmd-i67PvH6f24WO-ZvjDWOubp2I6hTfckQ2DjOTq4LStdRAW47JJ-DfSjWeGoIIyBWAllkGWAnzEkMzZ1NrF3b1JkD-Ow5s5TYOU0HVsvrmE9uRWQHWjgx0hY9YZkfAm7irM-AQJnzg-nV0CdBHk-hy1aM5b0o6svzcQAQN8pxsPA9X3RLIaXFjC6pJGNh1qp7ZVjvl29zzT5YgUZTVCML53ab5cNKLo0qVkOWyDeeVyeWkH3pXvvy5QS14=w1281-h919"
        alt="Logo Image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
