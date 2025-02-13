import useGlobalContext from "@hooks/useGlobalContext";
import styles from "./index.module.scss";
import clx from "classnames";
import useBodyScrollLock from "@hooks/useBodyScrollLock";
import CButton from "../CButton";

const ButtonGroup: React.FC<{items: }> = () => {
  const { isPageLoading } = useGlobalContext();

  return (
    <div className={clx(styles.btn_group_container)}>
      <CButton ></CButton>
    </div>
  );
};

export default ButtonGroup;
