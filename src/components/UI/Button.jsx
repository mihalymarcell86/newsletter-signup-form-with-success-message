import style from "../../styles/Button.module.scss";
import PropTypes from "prop-types";

export default function Button({ children }) {
  return (
    <button
      className={style.button}
      onMouseOut={(e) => e.target.blur()}
      onPointerUp={(e) => e.target.blur()}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
