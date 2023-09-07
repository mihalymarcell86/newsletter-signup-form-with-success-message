import SubmitForm from "./SubmitForm";
import illustration_mobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustration_desktop from "../assets/images/illustration-sign-up-desktop.svg";
import list_icon from "../assets/images/icon-list.svg";
import style from "../styles/Signup.module.scss";

export default function Signup() {
  return (
    <main className={style.main}>
      <picture className={style.illustration}>
        <source srcSet={illustration_desktop} media="(min-width: 928px)" />
        <img src={illustration_mobile} alt="" />
      </picture>
      <div>
        <section className={style.text}>
          <h1 className={style.heading}>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className={style.list}>
            <img src={list_icon} alt="" />
            <p>Product discovery and building what matters</p>
            <img src={list_icon} alt="" />
            <p>Measuring to ensure updates are a success</p>
            <img src={list_icon} alt="" />
            <p>And much more!</p>
          </div>
        </section>
        <SubmitForm />
      </div>
    </main>
  );
}
