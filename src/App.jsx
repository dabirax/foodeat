import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/topList";
import Banner from "./components/Banner/Banner";
import CusService from "./components/CusService/CusService";

import Profile from "./assets/profile.jpeg";
const bgStyle = {
  backgroundImage: `url(${Profile})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: " cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/30 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <CusService/>
      </div>
    </div>
  );
}

export default App;
