import { ProgressBar } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#4d66a9"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass={s.loader}
    />
  );
};

export default Loader;



