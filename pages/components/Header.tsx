import React from "react";

const DEFAULT_HEADER_MESSAGE = "Estarei fazendo aniversário em:";

export const Header = () => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 font-bold md:text-4xl uppercase">
        {DEFAULT_HEADER_MESSAGE}
      </h1>
    </header>
  );
};
