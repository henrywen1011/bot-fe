import clx from "classnames";
import CButton from "../CButton";
import styles from "./index.module.scss";

const ButtonGroup: React.FC<{
  titles: string[];
  onClick: (id: number) => Promise<void>;
  selectedIdx: number;
  big?: boolean;
  small?: boolean;
}> = ({ titles = [], onClick, selectedIdx, big = false, small = false }) => {
  return (
    <div className={clx(styles.btn_group_container)}>
      {titles.map((_title, _id) => (
        <CButton
          tiny={small}
          big={big}
          filled
          primary={_id === selectedIdx}
          active={_id === selectedIdx}
          onClick={() => onClick(_id)}
        >
          {_title}
        </CButton>
      ))}
    </div>
  );
};

export default ButtonGroup;
