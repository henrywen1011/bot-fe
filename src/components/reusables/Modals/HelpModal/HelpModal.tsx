import CModal from "@components/reusables/CModal";
import { MODAL_IDS, MODAL_SIZE } from "@constants/types";
import useGlobalContext from "@hooks/useGlobalContext";

const HelpModal = () => {
  const { modals, closeModal } = useGlobalContext();

  return (
    <CModal
      isOpen={modals[MODAL_IDS.HELP]?.opened}
      size={MODAL_SIZE.BIG}
      title="🚀 Whales Hybrid Volume Bot 🚀"
    >
      <div className="w-full flex flex-col text-[14px]">
        <span className="text-[16px] font-medium pb-3">
          Trying to get your token trending or just need some volume on the
          cheap? We got you.
        </span>
        <div className="flex flex-col gap-2 pl-5">
          <span>
            🔥 Forget the 3-4 SOL our competitors charge to start a bot!
          </span>
          <span>🚀 You can fire our bot up with just 0.1 SOL!</span>
          <span>💰 Raydium AMM tokens only.</span>
          <span>
            📲 Use the bot here or on Telegram at T.me/Whales_Hybrid_Bot
          </span>
          <span>
            ⚠️ Requirements to use on Telegram may be different than the website
          </span>
        </div>

        <span className="text-[16px] font-medium pt-7 pb-3">How It Works…</span>
        <div className="flex flex-col gap-2 pl-5">
          <span>
            💡 Our bot splits your deposit into two separate bots for a more
            organic boost:
          </span>
          <span>
            🔹 Bot 1: Micro buys with multiple wallets, sells bundle with one
            wallet.
          </span>
          <span>
            🔹 Bot 2: Bigger buys, with different wallets, sells bundle with one
            wallet.
          </span>
          <span>🔥 You can choose the bot speed and max buy amount.</span>
        </div>

        <span className="text-[16px] font-medium pt-7 pb-3">
          Whales Hybrid Bot Benefits:
        </span>
        <div className="flex flex-col gap-2 pl-5">
          <span>✅ Boost Transactions</span>
          <span>✅ Boost Volume</span>
          <span>✅ Boost Makers</span>
          <span>✅ Makes More Buys Than Sells</span>
          <span>✅ Makes More Buyers Than Sellers</span>
          <span>🚀 Fire it up today & make an impact on your stats! 🚀</span>
        </div>
      </div>
    </CModal>
  );
};

export default HelpModal;
