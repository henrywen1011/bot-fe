import AddressTextArea from "@components/home/AddressTextArea";
import QRCode from "react-qr-code";
import CModal from "@components/reusables/CModal";
import { MODAL_IDS, MODAL_SIZE } from "@constants/types";
import useGlobalContext from "@hooks/useGlobalContext";
import { useEffect } from "react";

const QRCodeModal = () => {
  const { modals, closeModal } = useGlobalContext();

  const handleCloseModal = () => {
    closeModal(MODAL_IDS.QR_CODE);
  };

  const handleConfirmModal = () => {
    closeModal(MODAL_IDS.QR_CODE);
  };

  return (
    <CModal isOpen={modals[MODAL_IDS.QR_CODE]?.opened} size={MODAL_SIZE.SMALL}>
      <div className="pt-[50px]">
        <div className="p-3 bg-[#fff] self-center">
          <QRCode value={modals[MODAL_IDS.QR_CODE]?.params?.text} size={300} />
        </div>
      </div>
    </CModal>
  );
};

export default QRCodeModal;
