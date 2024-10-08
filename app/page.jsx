import Hero from "./components/Hero";
import Infoboxes from "./components/Infoboxes";
import HomeProperties from "./components/HomeProperties";
import connectDB from "@/config/database";

const HomePage = () => {
  connectDB();
  return (
    <>
      <Hero />
      <Infoboxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
