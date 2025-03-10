import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: ''
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      message: target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
        <p>Remaining characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
