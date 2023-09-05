import style from "../styles/SubmitForm.module.scss";

export default function SubmitForm() {
  return (
    <form className={style.form}>
      <label className={style.label}>Email address</label>
      <input
        type="email"
        placeholder="email@company.com"
        className={style.input}
      ></input>
      <button className={style.button}>Subscribe to monthly newsletter</button>
    </form>
  );
}
