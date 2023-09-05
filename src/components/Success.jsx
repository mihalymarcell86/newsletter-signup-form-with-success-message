import success_icon from "../assets/images/icon-success.svg";
import style from "../styles/Success.module.scss";

export default function Success() {
  return (
    <main className={style.main}>
      <img src={success_icon} alt="" className={style.icon} />
      <h1 className={style.heading}>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <strong className={style.bold}>ash@loremcompany.com</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button className={style.button}>Dismiss message</button>
    </main>
  );
}
