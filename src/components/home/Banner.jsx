import { IoChevronForward } from "react-icons/io5";

const Banner = () => {
  return (
    <div
      className="h-[20rem] overflow-hidden text-tertiary flex justify-center items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="">
        <h2 className="text-4xl font-bold text-center ">Home Tech Support </h2>
        <br />
        <span className="flex mx-auto w-fit items-center gap-2">
          <p>Home</p>
          <IoChevronForward size={12} />
          <p>Home Tech Support</p>
        </span>
      </div>
    </div>
  );
};

export default Banner;
