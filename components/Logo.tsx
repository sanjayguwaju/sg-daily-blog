import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://res.cloudinary.com/dvtw2zpbt/image/upload/v1678214213/sgSanjayGuwaju_cpxf0k.jpg"
        alt="logo"
      />
      {/* <>{renderDefault(props)}</> */}
    </div>
  );
};

export default Logo;
