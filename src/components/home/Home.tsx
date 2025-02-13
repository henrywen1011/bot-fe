import styles from "./home.module.scss";
import CButton from "@components/reusables/CButton";
import QRCode from "react-qr-code";
import SVGIcon from "@components/reusables/SVGIcon";
import { ICON_NAMES, ICON_SIZE } from "@constants/config";
import useGlobalContext from "@hooks/useGlobalContext";
import { getReducedText, handleCopy } from "@utils/string";
import { useWallet } from "@solana/wallet-adapter-react";
import CInput from "@components/reusables/CInput";
import { useState } from "react";
import ButtonGroup from "@components/reusables/ButtonGroup";
import { MODAL_IDS } from "@constants/types";

const Home = () => {
  const { openModal } = useGlobalContext();
  const { publicKey } = useWallet();
  const [caEdit, setCAEdit] = useState(false);
  const [botStarted, setBotStarted] = useState(false);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [bundleIdx, setBundleIdx] = useState(0);
  const speedItems = ["Turtle", "Slow", "Medium", "High", "Hyper"];
  const bundleItems = ["0.1", "0.25", "0.5", "1"];

  const handleUpdateCA = () => {
    setCAEdit(!caEdit);
    if (!caEdit) return;
  };

  const clickSpeedItem = async (id: number) => {
    setSpeedIdx(id);
  };

  const clickBundleItem = async (id: number) => {
    setBundleIdx(id);
  };

  const openQRCodeModal = () => {
    if (publicKey)
      openModal(MODAL_IDS.QR_CODE, {
        text: `https://solscan.io/account/${publicKey.toBase58()}`,
      });
  };

  return (
    <div className={styles.container}>
      {publicKey && (
        <div className={styles.container__group}>
          <div className={styles.form_card}>
            <div className="flex md:flex-row flex-col-reverse gap-5">
              <div className="flex-1">
                <div className={styles.field}>
                  <span className={styles.field_label}>Deposit Address:</span>
                  <div className="flex gap-3 items-center">
                    <span>{getReducedText(publicKey?.toString(), 12, 12)}</span>
                    <CButton
                      tiny
                      onClick={() => handleCopy(publicKey.toBase58())}
                    >
                      <SVGIcon name={ICON_NAMES.COPY} size={ICON_SIZE.SMALL} />
                    </CButton>
                  </div>
                </div>
                <div className={styles.field}>
                  <span className={styles.field_label}>Sol Balance:</span>
                  <span>0</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.field_label}>$ODWH Balance:</span>
                  <span>100K</span>
                </div>
              </div>
              <div
                className="p-3 bg-[#fff] self-center cursor-pointer"
                onClick={openQRCodeModal}
              >
                <QRCode
                  value={`https://solscan.io/account/${publicKey.toBase58()}`}
                  size={150}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container__group}>
        <div className={styles.form_card}>
          <div className={`${styles.field_row} border-b border-[#fff3]`}>
            <span className="whitespace-nowrap">Your current CA:</span>
            {caEdit ? (
              <CInput
                containerClassName="max-w-[400px]"
                disabled={!caEdit}
                fill
              />
            ) : (
              <span>
                {publicKey ? (
                  <div className="flex items-center">
                    <span className="pr-2">
                      {getReducedText(publicKey?.toString(), 12, 12)}{" "}
                    </span>
                    <CButton
                      tiny
                      onClick={() => handleCopy(publicKey.toBase58())}
                    >
                      <SVGIcon name={ICON_NAMES.COPY} size={ICON_SIZE.SMALL} />
                    </CButton>
                  </div>
                ) : (
                  "none"
                )}
              </span>
            )}

            <CButton small outline onClick={handleUpdateCA}>
              {caEdit ? "Update" : "Edit"}
            </CButton>
          </div>

          <div className={`${styles.field_col} border-b border-[#fff3]`}>
            <span className="whitespace-nowrap">Your current speed:</span>
            <ButtonGroup
              small
              titles={speedItems}
              selectedIdx={speedIdx}
              onClick={clickSpeedItem}
            />
            <div className="text-[#c2c2c2]">
              Speed options are an estimate as to how long 1 sol will last.
              <br />
              Times will vary depending on network congestion and buy amounts.
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#c2c2c2]">
                Turtle: 1 SOL will last for 24 hours
              </span>
              <span className="text-sm text-[#c2c2c2]">
                Slow: 1 SOL will last for 8 hours
              </span>
              <span className="text-sm text-[#c2c2c2]">
                Medium: 1 SOL will last for 4 hours
              </span>
              <span className="text-sm text-[#c2c2c2]">
                High: 1 SOL will last for 2 hours
              </span>
              <span className="text-sm text-[#c2c2c2]">
                Hyper: 1 SOL will last for 30 minutes
              </span>
            </div>
          </div>
          <div className={`${styles.field_col} border-b border-[#fff3]`}>
            <span className="whitespace-nowrap">Max bundle size (SOL):</span>
            <ButtonGroup
              small
              titles={bundleItems}
              selectedIdx={bundleIdx}
              onClick={clickBundleItem}
            />
          </div>
          <div className={styles.field_col}>
            <div className="text-[#c2c2c2]">
              You can pause bot and adjust speed/ buy amount at any time and
              restart bot. You can not withdraw your sol after bot starts. You
              can top off bot with sol at any time
            </div>
            <CButton
              onClick={() => {
                setBotStarted(!botStarted);
              }}
              filled
              primary={!botStarted}
              warn={botStarted}
            >
              {botStarted ? "Stop Bot" : "Start Bot"}
            </CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
