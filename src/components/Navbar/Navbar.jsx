import profile from "../../assets/profile.jpeg";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <p className="text-lg uppercase font-semibold">
            food <span className="uppercase text-red-500">eat</span>
          </p>
        </div>
        {/* Menu */}
        <div className="flex justify-center items-center gap-6">
          <ul className=" gap-8 hidden sm:flex ">
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul>
          {/* Login */}
          <div className="flex gap-4 item-center">
            <img src={profile} alt="" className="w-10 h-10 rounded-full object-cover" />
            <MdKeyboardDoubleArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
