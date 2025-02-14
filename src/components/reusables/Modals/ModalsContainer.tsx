import HelpModal from "./HelpModal";
import TokenSelectModal from "./ImportWalletModal";
import QRCodeModal from "./QRCodeModal";

const ModalsContainer = () => {
  return (
    <>
      <TokenSelectModal />
      <QRCodeModal />
      <HelpModal />
    </>
  );
};

export default ModalsContainer;
