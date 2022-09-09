const { Component } = require('react');

class TutorsForm extends Component {
  state = {
    name: '',
    phone: '',
    isRemote: false,
    checkedClass: '',
  };

  handleChangeIsRemote = event => {
    this.setState(prevState => ({
      isRemote: !prevState.isRemote,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleVChangeButtons = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleVChangeButtons}
            />
          </label>
          <label>
            <input
              name="phone"
              type="phone"
              placeholder="Phone"
              onChange={this.handleVChangeButtons}
            />
          </label>
          <br />
          <label name="isRemote" placeholder="Is Remote">
            Is Remote
            <input
              onChange={this.handleChangeIsRemote}
              name="isRemote"
              type="checkbox"
              placeholder="Is Remote"
              checked={this.state.isRemote}
            />
          </label>
          <br />
          <label name="checkedClassReact" placeholder="React">
            React
            <input
              onChange={this.handleVChangeButtons}
              name="checkedClass"
              type="radio"
              value="React"
              placeholder="checkedClass"
              checked={this.state.checkedClass === 'React'}
            />
          </label>
          <br />
          <label name="checkedClassJavaScript" placeholder="JavaScript">
            JavaScript
            <input
              onChange={this.handleVChangeButtons}
              name="checkedClass"
              type="radio"
              value="JavaScript"
              placeholder="checkedClass"
              checked={this.state.checkedClass === 'JavaScript'}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default TutorsForm;
