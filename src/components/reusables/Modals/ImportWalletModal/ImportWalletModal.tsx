import AddressTextArea from "@components/home/AddressTextArea";
import CButton from "@components/reusables/CButton";
import CModal from "@components/reusables/CModal";
import { MODAL_IDS } from "@constants/types";
import useGlobalContext from "@hooks/useGlobalContext";

const ImportWalletModal = () => {
  const { modals, closeModal } = useGlobalContext();

  const handleCloseModal = () => {
    closeModal(MODAL_IDS.IMPORT_WALLET);
  };

  const handleConfirmModal = () => {
    closeModal(MODAL_IDS.IMPORT_WALLET);
  };

  return (
    <CModal
      isOpen={modals[MODAL_IDS.IMPORT_WALLET]?.opened}
      title="Import Wallet"
    >
      <div className="w-full flex flex-row flex-start">
        <span>Private key list, enter one per line</span>
      </div>
      <AddressTextArea />
      <div className="flex gap-5">
        <CButton warn onClick={handleCloseModal}>
          Cancel
        </CButton>
        <CButton primary onClick={handleConfirmModal}>
          Confirm
        </CButton>
      </div>
    </CModal>
  );
};

export default ImportWalletModal;
