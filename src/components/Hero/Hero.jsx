import profile from "../../assets/profile.jpeg"

const Hero = () => {
  return (
    <div className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8">
        {/* Text */}
        <div
          className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 pb-10 md:p-0
         "
        >
          <h1 className="text-3xl lg:text-6xl font-semibold">Delicious Meals Await You </h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus deleniti vel perferendis ipsa, blanditiis impedit
            voluptatum inventore quisquam corrupti aut?
          </p>
          <div className="flex gap-8 justify-center md:justify-start items-center">
            <button className="primary-btn hover:scale-110 duration-200">
              Food Menu
            </button>
            <button className="secondary-btn text-black hover:scale-110 duration-200">
              Book Table
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start md:items-center">
          <img
            src={profile}
            alt=""
            className="rounded-full w-80 h-80 img-shadow mx-auto md:mx-0 max-w-[500px] animate-spin-slow"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
