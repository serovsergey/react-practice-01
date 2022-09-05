import PropTypes from 'prop-types';
import s from './Paper.module.css';

function Paper({ children }) {
  return (
    <div>
      {children}
    </div>

  )
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paper
