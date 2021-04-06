import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.state.username && this.state.password && this.props.handleLogin({
      username: this.state.username, 
      password: this.state.password
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [`${target.name}`]: target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;