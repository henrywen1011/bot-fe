import styles from "./home.module.scss";
import CButton from "@components/reusables/CButton";
import { MODAL_IDS } from "@constants/types";
import CTable from "@components/reusables/CTable";
import SVGIcon from "@components/reusables/SVGIcon";
import { ICON_NAMES, ICON_SIZE } from "@constants/config";
import useGlobalContext from "@hooks/useGlobalContext";
import { getReducedText } from "@utils/string";
import { useWallet } from "@solana/wallet-adapter-react";
import CInput from "@components/reusables/CInput";
import { useState } from "react";

const Home = () => {
  const { openModal } = useGlobalContext();
  const { publicKey } = useWallet();
  const [caEdit, setCAEdit] = useState(false);

  const walletColumns = [
    {
      name: "Address",
      selector: (row: any) => row.address,
    },
    {
      name: "SOL",
      selector: (row: any) => row.sol,
    },
    {
      name: "USD",
      selector: (row: any) => row.usd,
    },
    {
      name: "SPL",
      selector: (row: any) => row.spl,
    },
  ];

  const walletData = [
    {
      id: 0,
      address: (
        <span className="flex items-center gap-2 cursor-pointer">
          {getReducedText(publicKey?.toString(), 4, 4)}{" "}
          <SVGIcon name={ICON_NAMES.COPY} size={ICON_SIZE.SMALL} />
        </span>
      ),
      sol: "1988",
      usd: "Beetlejuice",
      spl: "1988",
    },
  ];
  const logColumns = [
    {
      name: "Time",
      selector: (row: any) => row.time,
    },
    {
      name: "Wallet Address	",
      selector: (row: any) => row.address,
    },
    {
      name: "Trading Behavior",
      selector: (row: any) => row.behavior,
    },
  ];

  const logData = [
    {
      id: 0,
      address: (
        <span className="flex items-center gap-2 cursor-pointer">
          aaaaaaaaaaa <SVGIcon name={ICON_NAMES.COPY} size={ICON_SIZE.SMALL} />
        </span>
      ),
      time: "1988",
      behavior: "Beetlejuice",
    },
  ];

  const openImportModal = () => {
    openModal(MODAL_IDS.IMPORT_WALLET);
  };

  const handleUpdateCA = () => {
    setCAEdit(!caEdit);
    if (!caEdit) return;
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        <div className={styles.form_card}>
          <div className="flex flex-row items-center gap-5">
            <span>CA</span>
            <CInput fill disabled={!caEdit} />
            <CButton small outline onClick={handleUpdateCA}>
              {caEdit ? "Update" : "EDIT"}
            </CButton>
          </div>
        </div>
      </div>
      <div className={styles.container__group}>
        <div className={styles.form_card}>
          <div>
            <CButton outline onClick={openImportModal}>
              Import Wallet
            </CButton>
          </div>
          <CTable columns={walletColumns} data={walletData} selectableRows />
        </div>
        <div className={styles.form_card}>
          <CTable columns={logColumns} data={logData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
