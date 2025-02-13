import useGlobalContext from "@hooks/useGlobalContext";
import styles from "./index.module.scss";
import clx from "classnames";
import useBodyScrollLock from "@hooks/useBodyScrollLock";

const PageLoader = () => {
  const { isPageLoading } = useGlobalContext();
  useBodyScrollLock(isPageLoading);

  return (
    <div
      className={clx(styles.loader_container, {
        [styles.hidden]: !isPageLoading,
      })}
    ></div>
  );
};

export default PageLoader;
