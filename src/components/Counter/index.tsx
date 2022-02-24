import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../utils/utils';

import './styles.scss';

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className="counter">
      <div className="counter-item">
        <span className="value">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="label">Dias</span>
      </div>

      <div className="counter-item">
        <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="label">Horas</span>
      </div>

      <div className="counter-item">
        <span className="value">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="label">Minutos</span>
      </div>

      <div className="counter-item">
        <span className="value">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="label">Segundos</span>
      </div>
    </div>
  );
};
