import style from "../styles/SubmitForm.module.scss";
import Button from "./UI/Button";
import propTypes from "prop-types";
import { isEmpty, isEmail } from "validator";
import { useState } from "react";

export default function SubmitForm({ emailState, submit }) {
  const [email, setEmail] = emailState;
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  function handleBlur(e) {
    setTouched(true);
    validate(e.target.value);
  }

  function validate(val) {
    if (isEmpty(val)) setError("This is field is required");
    else if (!isEmail(val)) setError("Valid email required");
    else setError(null);
  }

  function handleChange(e) {
    const val = e.target.value;
    setEmail(val);
    if (touched) validate(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate(e.target[0].value);
    setTouched(true);
    if (touched && !error) submit(true);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit} noValidate>
      <div className={style.label_container}>
        <label className={style.label}>Email address</label>
        {error && <p className={style.error_message}>{error}</p>}
      </div>
      <input
        type="email"
        placeholder="email@company.com"
        className={`${style.input} ${error ? style.input_error : ""}`}
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}

SubmitForm.propTypes = {
  emailState: propTypes.array.isRequired,
  submit: propTypes.func.isRequired,
};
