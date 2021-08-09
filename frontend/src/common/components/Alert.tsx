import { FC, useEffect, useRef } from "react";
import { AlertTypes } from "@/typing/entities";
import { useSelector } from "react-redux";
import { selectAlert } from "@/selectors";

const Alert: FC = () => {
  const alert = useSelector(selectAlert);
  let alertNode = useRef<HTMLDivElement>(null).current;

  useEffect(() => {
    switch (alert.alertType) {
      case AlertTypes.INFO:
        alertNode.classList.add("alert__info");
        setTimeout(() => {
          alertNode.classList.remove("alert__info");
        }, 2000);
        break;
      case AlertTypes.WARNING:
        alertNode.classList.add("alert__warning");
        setTimeout(() => {
          alertNode.classList.remove("alert__warning");
        }, 3000);
        break;
      case AlertTypes.ERROR:
        alertNode.classList.add("alert__error");
        setTimeout(() => {
          alertNode.classList.remove("alert__error");
        }, 4000);
        break;
    }
  }, [alert, alertNode]);

  return (
    <div
      className="alert"
      ref={(el) => {
        alertNode = el;
      }}
    >
      <h3>{alert.alertType}</h3>
      <p>{alert.message}</p>
    </div>
  );
};

export default Alert;
