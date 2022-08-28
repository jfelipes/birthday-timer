import type { NextPage } from "next";
import { Header } from "./components/Header";
import { TimerContainer } from "./components/TimerContainer";
import { Footer } from "./components/Footer";

const PERSONAL_BIRTH_DATE = new Date(2001, 4 - 1, 24); // Date months receive a range between [0-11]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <TimerContainer birthDate={PERSONAL_BIRTH_DATE} />
      <Footer
        day={PERSONAL_BIRTH_DATE.getDate()}
        month={PERSONAL_BIRTH_DATE.getMonth()}
        year={PERSONAL_BIRTH_DATE.getFullYear()}
      />
    </div>
  );
};

export default Home;
