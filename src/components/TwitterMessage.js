import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({message: e.target.value, remainingChars: this.state.remainingChars - 1})

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" value={this.state.message}/>
        <p>You have {this.state.remainingChars} remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
