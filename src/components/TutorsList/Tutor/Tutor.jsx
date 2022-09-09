// import PropTypes from 'prop-types'
import s from './Tutor.module.css';

function Tutor({ name, phone, isRemote, checkedClass }) {
  return (
    <li>
      <p>
        <span>{name}</span>
        <span>{phone}</span>
        <span>{isRemote ? 'remote' : 'offline'}</span>
        <span>Tutor of {checkedClass}</span>
      </p>
    </li>
  );
}

// Tutor.propTypes = {}

export default Tutor;
