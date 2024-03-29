import { ReactNode } from "react";
import Footer from "@/containers/Footer/page";
import Navbar from "@/containers/Navbar/page";
import Image from "next/image";
import MainTemplate from "@/template";
import Homecontent from "@/containers/Homecontent/page";

interface Props {
  children: ReactNode;
}

const Mainrender: React.FC<Props> = ({ children }) => {
  return (
    <MainTemplate
      children={
          <Homecontent />

      }
    />
  );
};

export default Mainrender;
