import { FC } from "react";
import style from "./spiner.module.css";

const Spiner: FC = () => {
  return <span className={style.loader}></span>;
};
export default Spiner;
