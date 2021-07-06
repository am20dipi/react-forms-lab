import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280
    };
  
  }

  handleCharacterChange = (event) =>{
    this.setState({
      leftChars: 280 - this.state.maxChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.leftChars} onChange={event => this.handleCharacterChange(event)}name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
