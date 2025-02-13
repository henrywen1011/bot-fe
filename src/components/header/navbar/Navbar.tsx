import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Button from "@components/reusables/Button";
import CButton from "@components/reusables/CButton";
import logo from "@assets/logo.png";
import solana from "@assets/solana.png";
import {
  useWalletMultiButton,
  useWalletDisconnectButton,
} from "@solana/wallet-adapter-base-ui";
import { getReducedText } from "@utils/string";
import SVGIcon from "@components/reusables/SVGIcon";
import { ICON_NAMES } from "@constants/config";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;

      if (scrollY > scrollThreshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    {
      name: "$ODWH Group",
      link: "https://t.me/OldDogWifHatMeme",
    },
    {
      name: "Pump.fun Volume Bot",
      link: "https://t.me/whales_pumpfun_bot ",
    },
    {
      name: "Airdrop Bot",
      link: "https://t.me/Whales_airdrop_bot",
    },
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

  const handleDisconnect = (e: any) => {
    if (publicKey && disconnectSolWallet) {
      disconnectSolWallet();
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
      <div className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}>
        <div className={styles.navbarItem}>
          <img src={logo} className={styles.logo} alt="multisender logo" />
          <span className="sm:text-xl text-lg">Whales Hybrid Bot</span>
        </div>

        <span className="flex gap-4 items-center">
          <span className={styles.navLinks}>
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
          {publicKey ? (
            <CButton onClick={handleDisconnect} outline>
              {getReducedText(publicKey.toBase58(), 5, 5)}
            </CButton>
          ) : (
            <CButton onClick={handleConnectWallet} outline>
              Connect Wallet
            </CButton>
          )}
          {/* <Button customStyles={styles.walletButton}>Select Wallet</Button> */}
          {/* <div className="flex flex-col relative">
            <span
              onClick={() => handleOptions("mainnet")}
              className={styles.mainnetButton}
            >
              Mainnet
              <i className="fa-solid text-white fa-chevron-down"></i>
            </span>
            {showOptions.mainnet && (
              <span className="flex flex-col gap-2 absolute z-[3] top-[3rem] p-2 px-4 min-w-[8rem] rounded-[0.8rem] border text-white font-medium border-[#8cffdd]">
                <p className={styles.dropdownItem}>Mainnet</p>
                <p className={styles.dropdownItem}>Devnet</p>
              </span>
            )}
          </div> */}
        </span>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbar}>
        <img src={logo} className={styles.logo} alt="multisender logo" />
        <Button customStyles={styles.menuButton} onClick={toggleMobileMenu}>
          <SVGIcon name={ICON_NAMES.HAMBURGER} />
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
              className={"text-[#8cffdd]"}
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
