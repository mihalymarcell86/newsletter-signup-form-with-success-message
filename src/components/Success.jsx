import success_icon from "../assets/images/icon-success.svg";
import style from "../styles/Success.module.scss";
import Button from "./UI/Button";
import propTypes from "prop-types";

export default function Success({ emailState, submit }) {
  const [email, setEmail] = emailState;

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    submit(false);
  }

  return (
    <main className={style.main}>
      <img src={success_icon} alt="" className={style.icon} />
      <h1 className={style.heading}>Thanks for subscribing!</h1>
      <p className={style.paragraph}>
        A confirmation email has been sent to{" "}
        <strong className={style.bold}>{email}</strong>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <form onSubmit={handleSubmit}>
        <Button>Dismiss message</Button>
      </form>
    </main>
  );
}

Success.propTypes = {
  emailState: propTypes.array.isRequired,
  submit: propTypes.func.isRequired,
};
