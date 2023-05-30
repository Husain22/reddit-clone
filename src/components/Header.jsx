import { useState } from "react";
import { Search, SideBar } from ".";
import { BsReddit } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-around items-center shadow-lg h-16 px-4 relative">
      <div className="flex items-center">
        <BsReddit size={30} color="#3d5af1" />
        <h1 className="ml-2">
          <span className="text-blue">Reddit</span> Client
        </h1>
      </div>
      <Search />
      <div />
      <div className="sm:hidden hover:cursor-pointer" onClick={toggleSidebar}>
        <MdMenu size={30} color="#3d5af1" />
      </div>
      {isOpen && (
        <>
          <div
            className="sm:hidden fixed inset-0 z-10 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <div className="sm:hidden absolute top-0 right-0 w-64 min-w-fit z-20">
            <SideBar />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
