import PropTypes from 'prop-types';
import s from './Card.module.css';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import noImage from '../../assets/no-image.svg';

function Card({ imgUrl = noImage }) {
  return (
    <div>
      <img src={imgUrl} alt="custom img" />
      <p>Університет</p>
      <p>МІТ</p>
      <ul>
        <li><FaEdit /></li>
        <li><FaTrashAlt /></li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  imgUrl: PropTypes.string,
}

export default Card
