import style from "../../styles/Button.module.scss";
import PropTypes from "prop-types";

export default function Button({ children }) {
  return <button className={style.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
