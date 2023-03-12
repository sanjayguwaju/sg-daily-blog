import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://res.cloudinary.com/dvtw2zpbt/image/upload/v1678214213/sgSanjayGuwaju_cpxf0k.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          href="https://www.sanjayguwaju.com.np"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-3 text-sm md:text-base bg-[#8F00FF] text-[#FFF] hover:bg-[#483248] transition-all duration-[350ms] ease-out flex items-center rounded-lg text-center"
        >
          Sanjay's Portfolio Link
        </Link>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
