import Profile from "../../assets/profile.jpeg";

const Banner = () => {
  return (
    <>
      <div className="container py-1">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img src={Profile} alt="" />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food is always delicious</h1>
            <p className="py-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              obcaecati voluptate possimus, quae facere temporibus officiis
              cumque iste, hic necessitatibus doloribus suscipit autem non
              dicta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
