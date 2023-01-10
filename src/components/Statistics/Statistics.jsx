import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good:
        <span className={css.label} style={{ color: 'black' }}>
          {good}
        </span>
      </li>
      <li className={css.item}>
        Neutral:
        <span className={css.label} style={{ color: 'black' }}>
          {neutral}
        </span>
      </li>
      <li className={css.item}>
        Bad:
        <span className={css.label} style={{ color: 'black' }}>
          {bad}
        </span>
      </li>
      <li className={css.item}>
        Total:
        <span className={css.label}>{total}</span>
      </li>
      <li className={css.item}>
        Positive feedback:
        <span className={css.label}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
