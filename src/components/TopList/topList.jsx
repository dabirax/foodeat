import React from "react";
import Profile from "../../assets/profile.jpeg";

const FoodData = [
  {
    image: Profile,
    rating: "⭐⭐⭐⭐⭐",
    price: "₦4999.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, earum",
  },
  {
    image: Profile,
    rating: "⭐⭐⭐⭐⭐",
    price: "₦4999.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, earum",
  },
  {
    image: Profile,
    rating: "⭐⭐⭐⭐⭐",
    price: "₦4999.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, earum",
  },
];
const topList = () => {
  return (
    <div className="container py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>

      {/* card section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img src={Profile} alt="" className="w-56 h-56 rounded-full" />
          <p>⭐⭐⭐⭐⭐</p>
          <p>₦4999.99</p>
          <p>Food Name</p>
        </div>
        <div>
          <img src={Profile} alt="" className="w-56 h-56 rounded-full" />
          <p>⭐⭐⭐⭐⭐</p>
          <p>₦4999.99</p>
          <p>Food Name</p>
        </div>
        <div>
          <img src={Profile} alt="" className="w-56 h-56 rounded-full" />
          <p>⭐⭐⭐⭐⭐</p>
          <p>₦4999.99</p>
          <p>Food Name</p>
        </div>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FoodData.map((item, index) => {
          return (
            <div key={index} className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300">
              <img
                src={item.image}
                className=" w-60 h-60 sm:w-40 sm:h-40 rounded-full object-cover mx-auto  img-shadow"
                alt=""
              />
              <div className="space-y-2">
                <p className="text-red-500">{item.rating}</p>
                <p className="text-lg font-semibold">{item.name}</p>
                <p>{item.desc}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default topList;
