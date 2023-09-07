import style from "../styles/SubmitForm.module.scss";
import Button from "./UI/Button";

export default function SubmitForm() {
  return (
    <form className={style.form}>
      <label className={style.label}>Email address</label>
      <input
        type="email"
        placeholder="email@company.com"
        className={style.input}
      ></input>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}
