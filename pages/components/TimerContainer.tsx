import { useEffect, useState } from "react";
import { TimerComponent } from "./TimerComponent";

interface BirthDateProps {
  birthDate: Date;
}

/**
 * Calculates the difference between current time and the target date!
 *
 * @param targetDate A date object for the target date!
 *
 * @returns The difference in seconds
 */
const calculateTimeLeft = (targetDate: Date) => {
  const now = new Date();
  const nextBirthdayDate = new Date(
    now.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
  );

  if (now.getTime() > nextBirthdayDate.getTime())
    nextBirthdayDate.setFullYear(nextBirthdayDate.getFullYear() + 1);

  return (+nextBirthdayDate - +now) / 1000;
};

export const TimerContainer = ({ birthDate }: BirthDateProps) => {
  const [differenceInSeconds, setDifferenceInSeconds] = useState(
    calculateTimeLeft(birthDate)
  );

  useEffect(() => {
    const timer = setInterval(
      () => setDifferenceInSeconds(calculateTimeLeft(birthDate)),
      1000
    );

    return () => clearTimeout(timer);
  });

  const timerComponents = [
    {
      amount: Math.floor(differenceInSeconds / (60 * 60 * 24)),
      detail: "Dias",
    },
    {
      amount: Math.floor((differenceInSeconds / (60 * 60)) % 24),
      detail: "Horas",
    },
    {
      amount: Math.floor((differenceInSeconds / 60) % 60),
      detail: "Minutos",
    },
    {
      amount: Math.floor(differenceInSeconds % 60),
      detail: "Segundos",
    },
  ];

  return (
    <div className="mt-2 md:mt-20 rounded-xl grid grid-cols-2 gap-1 py-6 px-10 md:flex md:items-center md:justify-between md:px-6 md:py-8">
      {timerComponents.map((timerComponent, id) => (
        <TimerComponent
          key={id}
          amount={timerComponent.amount}
          detail={timerComponent.detail}
        />
      ))}
    </div>
  );
};
