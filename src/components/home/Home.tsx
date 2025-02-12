import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import AddressTextArea from "./AddressTextArea";
import CButton from "../reusables/CButton";
import CInput from "../reusables/CInput";
import { BUTTON_TYPES } from "../../constants/types";

const Home = () => {
  const [tokenType, toggleTokenType] = useState("SOL");
  const [showOptions, toggleOptionsView]: any = useState(false);

  const handleTokenType = (payload: string) => {
    toggleTokenType(payload);
    toggleOptionsView(false);
  };

  const navigate = useNavigate();
  const tokensString =
    localStorage.getItem("tokens") || '["ABC", "DEF", "GHK"]';
  const [tokens, toggleTokens] = useState(JSON.parse(tokensString));
  const tokenInput: any = useRef(null);
  const [tokendAddress, setTokenAddress] = useState("");

  return (
    <div className={styles.container}>
      <div
        className={`fixed ${showOptions ? "w-screen h-screen" : null} z-[2]`}
        onClick={() => toggleOptionsView(false)}
      ></div>
      <div className={styles.relativeContainer}>
        <p>Token Type</p>
        <div
          className={styles.selectBox}
          onClick={() => toggleOptionsView(!showOptions)}
        >
          {tokenType}
          <i className="fa-solid fa-chevron-down text-white absolute right-2 top-1/2 transform -translate-y-1/2"></i>
        </div>

        {showOptions && (
          <span className={styles.options}>
            <p
              onClick={() => handleTokenType("SOL")}
              className={styles.options_item}
            >
              SOL
            </p>
            <p
              onClick={() => handleTokenType("SPL Token")}
              className={styles.options_item}
            >
              SPL Token
            </p>
          </span>
        )}
      </div>

      {tokenType === "SPL Token" && (
        <div className={styles.tokensList}>
          <p className="font-medium">Token Address</p>
          <CInput
            placeholder="Enter your token address"
            value={tokendAddress}
            onChange={(value) => setTokenAddress(value)}
            bordered
            fill
            large
          />

          <div className="flex w-full gap-2 flex-wrap">
            {tokens.map((token: any, index: number) => (
              <CButton
                key={index + token}
                small
                primary
                onClick={() => setTokenAddress(token)}
                type={BUTTON_TYPES.PILLED}
                className="text-white"
              >
                {token.slice(0, 4) +
                  "..." +
                  token.slice(token.length - 4, token.length)}
              </CButton>
              // <div
              //   key={index}
              //   onClick={() => setTokenAddress(token)}
              //   className={styles.token}
              // >
              //   {token.slice(0, 4) +
              //     "..." +
              //     token.slice(token.length - 4, token.length)}
              // </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.relativeContainer}>
        <div className="flex justify-between">
          <p className="font-medium">List of Addresses in CSV</p>
          <span className={styles.csvButton}>
            <p>Example</p>
            <i className="fa-regular fa-file"></i>
          </span>
        </div>
        <AddressTextArea />
        <div className="flex justify-between">
          <p className="font-medium"></p>
          <span className={styles.uploadButton}>
            <p>Upload CSV</p>
            <i className="fa-solid fa-upload"></i>
          </span>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <CButton
          filled
          big
          primary
          onClick={() => {
            navigate("summary", { state: { token: tokendAddress } });
          }}
        >
          Proceed
        </CButton>
        {/* <button
          onClick={() =>
            navigate("summary", { state: { token: tokenInput.current.value } })
          }
          className={styles.button}
        >
          Proceed
        </button> */}
      </div>
    </div>
  );
};

export default Home;
