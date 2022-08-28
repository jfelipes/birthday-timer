import React from "react";

interface BirthDateProps {
  day: number;
  month: number;
  year: number;
}

const DEFAULT_FOOTER_MESSAGE = "Nascido em ";

export const Footer = ({ day, month, year }: BirthDateProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 font-bold md:text-4xl uppercase font-poppins">
        {DEFAULT_FOOTER_MESSAGE}
        {day.toString().padStart(2, "0")}/
        {(month + 1).toString().padStart(2, "0")}/{year}
      </h1>
    </header>
  );
};
