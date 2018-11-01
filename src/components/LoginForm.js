import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    // debugger;
    console.log(e.target.name)
    console.log(this.state[e.target.name])
    this.setState({...this.state, [e.target.name]: e.target.value})
    console.log("value", e.target.value)
    e.target.value = this.state[e.target.name]
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if (this.state.username && this.state.password){
          this.props.onSubmit(e, this.state)
        }
      }
      }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
