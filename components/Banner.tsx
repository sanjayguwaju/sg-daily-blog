const Banner = () => {
  return (
    <div
      className="flex flex-col justify-between font-bold px-10 py-5 mb-10
          lg:flex-row lg:space-x-5"
    >
      <div>
        <h1 className="text-5xl">Sanjay's Daily Blog</h1>
        <h2
          className="mt-5
              md:mt-8"
        >
          Welcome to{" "}
          <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
            technical
          </span>
          {""} blog, from all the coding related fields.
        </h2>
      </div>
      <p className=" max-w-xs md:mt-2 py-2 mt-6 font-extrabold">
        The{" "}
        <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
          {" "}
          ultimate resource
        </span>{" "}
        for programmer, CS Student, Developer and Software Engineers.
      </p>
    </div>
  );
};

export default Banner;
