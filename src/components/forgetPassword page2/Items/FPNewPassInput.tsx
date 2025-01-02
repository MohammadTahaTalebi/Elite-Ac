import { Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPNewPassInput = () => {

  return (
    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-base font-DannaBold text-black pb-1.5"> رمزعبور جدید</label>
      <Field data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.input} name="newPassword" placeholder="رمزعبور خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPNewPassInput }