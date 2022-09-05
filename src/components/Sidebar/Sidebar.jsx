import PropTypes from 'prop-types';
import s from './Sidebar.module.css';

function Sidebar({ menu, logo }) {
  return (
    <>
      {logo}
      <ul>
        {menu.map(item => (
          <li key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  )
}

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired),
  logo: PropTypes.string.isRequired,
}

export default Sidebar
