import { useEffect, useState } from "react";
import {
  calculateTimeLeft,
  formatterValuesWithTwoDigits,
} from "../../utils/utils";

import "./styles.scss";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className="counter">
      <div className="counter-item">
        <span className="label">Dias</span>
        <span className="value">
          {formatterValuesWithTwoDigits(timeLeft.days)} :
        </span>
      </div>

      <div className="counter-item">
        <span className="label">Horas</span>
        <span className="value">
          {formatterValuesWithTwoDigits(timeLeft.hours)} :
        </span>
      </div>

      <div className="counter-item">
        <span className="label">Minutos</span>
        <span className="value">
          {formatterValuesWithTwoDigits(timeLeft.minutes)} :
        </span>
      </div>

      <div className="counter-item">
        <span className="label">Segundos</span>
        <span className="value">
          {formatterValuesWithTwoDigits(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};
