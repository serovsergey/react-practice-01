import PropTypes from 'prop-types';
// import s from './TutorsList.module.css';
import { nanoid } from 'nanoid';
import Tutor from './Tutor/Tutor';
import { Component } from 'react';

class TutorsList extends Component {
  state = { isShow: false };

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const { tutors } = this.props;
    return (
      <>
        <h2>Преподаватели:</h2>
        <button type="button" onClick={this.handleClick}>
          {this.state.isShow ? 'Hide tutors' : 'Show tutors'}
        </button>
        {this.state.isShow && (
          <ul>
            {tutors.map(
              ({
                firstName,
                lastName,
                patronymic,
                phone,
                email,
                city,
                options,
              }) => (
                <Tutor
                  key={nanoid(8)}
                  firstName={firstName}
                  lastName={lastName}
                  patronymic={patronymic}
                  phone={phone}
                  email={email}
                  city={city}
                  options={options}
                />
              )
            )}
          </ul>
        )}
      </>
    );
  }
}

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      patronymic: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      options: PropTypes.string.isRequired,
    })
  ).isRequired,
};
