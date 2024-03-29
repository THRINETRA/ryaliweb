import { ReactNode } from 'react';
import Footer from "@/containers/Footer/page";
import Navbar from "@/containers/Navbar/page";
// import Image from "next/image";

interface Props {
  children: ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-start justify-start w-full overflow-auto">
        
        <div className='w-full'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
    </main>
  );
}

export default MainTemplate;
