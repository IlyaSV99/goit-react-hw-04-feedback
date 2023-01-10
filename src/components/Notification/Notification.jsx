import PropTypes from 'prop-types';
import css from './Notification.module.css';

function Notification({ message }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
