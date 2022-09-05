// import PropTypes from 'prop-types'
import s from './Tutor.module.css';

function Tutor({ firstName, lastName, patronymic, phone, email, city, options }) {
  return (
    <li>
      <p>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{patronymic}</span>
      </p>
      <p>
        <span>{phone}</span>
        <span>{email}</span>
        <span>{city}</span>
      </p>
      <p>{options}</p>
    </li>
  )
}

// Tutor.propTypes = {}

export default Tutor
