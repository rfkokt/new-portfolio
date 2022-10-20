import React from "react";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rifkiokta105@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#00ADB5]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <HiPhone className="text-[#00ADB5] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+6289635112452</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <HiEnvelope className="text-[#00ADB5] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">rifkiokta105@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <HiMapPin className="text-[#00ADB5] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">123 Duta Kranji, Bekasi</p>
          </div>
        </div>

        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="space-x-2 hidden md:flex">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput md:hidden"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput md:hidden"
            type="email"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#00ADB5] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
