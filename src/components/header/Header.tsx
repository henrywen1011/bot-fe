import React from "react";
import styles from "./Header.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Button from "../reusables/Button";
import CButton from "../reusables/CButton";

const Header: React.FC = () => {
  return (
    <div
      className={`${styles.headerContainer} relative bg-black overflow-hidden`}
    >
      <Navbar />
      <div className="w-full h-auto flex justify-center p-2">
        <Outlet />
      </div>
      <div className="flex w-full border-t border-t-[#ffffff6c] justify-center">
        <div className="w-full justify-between flex items-center p-4 px-10 max-w-[80rem] font-medium">
          <span className="flex text-white items-center gap-4">
            <p>Version: c992d7b</p>
            <CButton outline>Connect Wallet</CButton>
            {/* <Button customStyles="bg-[#14f195] rounded-[0.5rem] p-2 px-4 text-base text-black font-medium">
              Connect Wallet
            </Button> */}
          </span>
          <span className="flex gap-4 text-white">
            <i className="fa-brands text-2xl fa-medium"></i>
            <i className="fa-brands text-2xl fa-telegram"></i>
            <i className="fa-brands text-2xl fa-x-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
