'use client'
import { useGlobalState } from "./GlobalStateProvider";

const HamburgerMenu = () => {
  const {isOpenMenu,setIsOpenMenu}=useGlobalState();
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={(e) =>{
        e.preventDefault();
        setIsOpenMenu(!isOpenMenu)
      }}
    >
      <div
        className={` ${genericHamburgerLine} ${
          isOpenMenu
            ? "rotate-45 bg-black translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 bg-white group-hover:opacity-100"
        }`}
      />
      <div
        className={` ${genericHamburgerLine} ${
          isOpenMenu ? "opacity-0 bg-black" : "opacity-50 bg-white group-hover:opacity-100"
        }`}
      />
      <div
        className={` ${genericHamburgerLine} ${
          isOpenMenu
            ? "-rotate-45 -translate-y-3 opacity-50 bg-black group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100 bg-white"
        }`}
      />
    </button>
  );
};
export default HamburgerMenu;