import { useState } from "react";
import styles from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Button from "@components/reusables/Button";
import CButton from "@components/reusables/CButton";
import multisender from "@assets/multisender.png";
import solana from "@assets/solana.png";
import {
  useWalletMultiButton,
  useWalletDisconnectButton,
} from "@solana/wallet-adapter-base-ui";

const Navbar = () => {
  const { publicKey } = useWallet();
  const { setVisible: setModalVisible } = useWalletModal();
  const { onButtonClick: disconnectSolWallet } = useWalletDisconnectButton();
  const { buttonState, onConnect } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOptions, toggleOptionsView]: any = useState({
    mainnet: false,
    products: false,
  });

  const tabs = [
    { name: "Multisend", link: "/", scrollElement: "", active: false },
    { name: "Verification", link: "/", scrollElement: "", active: false },
    { name: "FAQ", link: "/", scrollElement: "", active: false },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleOptions = (payload: string) => {
    toggleOptionsView({ ...showOptions, [payload]: !showOptions[payload] });
  };

  const handleConnectWallet = (e: any) => {
    switch (buttonState) {
      case "no-wallet":
        setModalVisible(true);
        break;
      case "has-wallet":
        if (onConnect) {
          onConnect();
        }
        break;
    }
  };

  return (
    <>
      <div
        className={`absolute ${
          showOptions.mainnet || showOptions.products
            ? "w-screen h-screen"
            : null
        } z-[2]`}
        onClick={() => toggleOptionsView({ mainnet: false, products: false })}
      ></div>
      {/* Desktop Navbar */}
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>
          <img
            src={multisender}
            className={styles.logo}
            alt="multisender logo"
          />
          <div className="flex flex-col justify-between">
            <h2 className={styles.logoText}>Multisender</h2>
            <img src={solana} className="w-[4rem]" alt="solana" />
          </div>
        </div>
        <span className={styles.navLinks}>
          <span className="relative flex gap-1">
            <span className="flex items-center gap-2">
              <p
                onClick={() => handleOptions("products")}
                className={styles.link}
              >
                Products
              </p>
              <i className="fa-solid text-white fa-chevron-down"></i>
            </span>
            {showOptions.products && (
              <span className={styles.productsDropdown}>
                <p className={styles.dropdownItem}>Classic Multisender ↗</p>
                <p className={styles.dropdownItem}>TON Multisender ↗</p>
                <p className={styles.dropdownItem}>TRON Multisender ↗</p>
                <p className={styles.dropdownItem}>NFT Multisender ↗</p>
                <p className={styles.dropdownItem}>Massdrop Multisender ↗</p>
              </span>
            )}
          </span>
          {tabs.map((tab, index) => (
            <p
              onClick={() => navigate(tab.link)}
              className={styles.link}
              key={index}
            >
              {tab.name}
            </p>
          ))}
        </span>
        <span className="flex gap-4 items-center">
          <CButton onClick={handleConnectWallet} outline>
            Connect Wallet
          </CButton>
          {/* <Button customStyles={styles.walletButton}>Select Wallet</Button> */}
          <div className="flex flex-col relative">
            <span
              onClick={() => handleOptions("mainnet")}
              className={styles.mainnetButton}
            >
              Mainnet
              <i className="fa-solid text-white fa-chevron-down"></i>
            </span>
            {showOptions.mainnet && (
              <span className="flex flex-col gap-2 absolute z-[3] top-[3rem] p-2 px-4 min-w-[8rem] rounded-[0.8rem] border text-white font-medium border-[#14F195]">
                <p className={styles.dropdownItem}>Mainnet</p>
                <p className={styles.dropdownItem}>Devnet</p>
              </span>
            )}
          </div>
        </span>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbar}>
        <Button customStyles={styles.menuButton} onClick={toggleMobileMenu}>
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="p-8 flex flex-col gap-6">
          {tabs.map((tab, index) => (
            <p
              onClick={() => navigate(tab.link)}
              key={index}
              className={tab.active ? "text-yellow-500" : "text-white"}
            >
              {tab.name}
            </p>
          ))}
        </div>
      </div>

      {/* Overlay to close the menu */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
