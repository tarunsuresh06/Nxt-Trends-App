import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = data => {
    this.setState({errorMsg: data.error_msg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="responsive-container">
          <img
            className="login-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="login-form-container" onSubmit={this.onSubmitLogin}>
            <img
              className="form-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <label className="form-label-text" htmlFor="userInput">
              USERNAME
            </label>
            <input
              className="form-input"
              placeholder="Username"
              type="text"
              value={username}
              id="userInput"
              onChange={this.onChangeUserName}
            />

            <label className="form-label-text" htmlFor="passwordInput">
              PASSWORD
            </label>
            <input
              className="form-input"
              placeholder="Password"
              type="password"
              value={password}
              id="passwordInput"
              onChange={this.onChangePassword}
            />

            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
