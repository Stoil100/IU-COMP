import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
