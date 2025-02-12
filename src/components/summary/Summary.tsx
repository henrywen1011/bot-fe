import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./summary.module.scss";
import CButton from "../reusables/CButton";

const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token;

  const summaryData = [
    { label: "Total number of addresses", value: 33 },
    { label: "Total number of multisend needed", value: 2 },
    { label: "Total number of tokens to be sent", value: 561 },
    { label: "Total amount of SOL to send with tx fee", value: "0.11541 SOL" },
    { label: "Your token balance", value: 712448849.7389794 },
    { label: "Your SOL balance", value: "11.8783479318 SOL" },
  ];

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const tokens = JSON.parse(localStorage.getItem("tokens") || "[]");

  const handleAddToken = () => {
    localStorage.setItem("tokens", JSON.stringify([...tokens, token]));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Token Summary</h2>

      <div className={styles.summaryGrid}>
        {summaryData.map((item, index) => (
          <div key={index} className={styles.summaryItem}>
            <p>{item.label}</p>
            <p className={styles.summaryValue}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className={styles.warningContainer}>
        <i className="fa-solid fa-exclamation p-2 rounded-full border border-white h-8 w-8 flex justify-center items-center" />
        <div className={styles.warningText}>
          <p>
            Verify that the app <span className="font-medium">network</span>{" "}
            matches the network set in the wallet.
          </p>
          <p>
            Ensure you <span className="font-medium">sign</span> the transaction
            under the <span className="font-medium">account</span> connected to
            the app.
          </p>
        </div>
      </div>

      <div className={styles.sendButtonContainer}>
        <CButton filled big primary onClick={() => {}}>
          Send
        </CButton>
        {/* <button onClick={handleAddToken} className={styles.sendButton}>
          Send
        </button> */}
      </div>
    </div>
  );
};

export default Summary;
