import React from "react";

interface TimerProps {
  amount: number;
  detail: string;
}

export const TimerComponent = ({ amount, detail }: TimerProps) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-32 h-32  text-2xl md:text-4xl mt-4">
        <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>

        <div className="absolute text-gray-50 z-10 font-bold md:text-7xl">
          {amount.toString().padStart(2, "0")}
        </div>
      </div>
      <p className="text-lg mt-3 font-semibold text-gray-500  md:text-2xl ">
        {detail}
      </p>
    </div>
  );
};
