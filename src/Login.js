import React, { Component } from "react"
import { Helmet } from "react-helmet"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      remember: false
    }
    // this.validateLogin = this.validateLogin.bind(this) // might not be needed when using arrow function
    // this.handleChange = this.handleChange.bind(this)   // might not be needed when using arrow function
    // this.handleSubmit = this.handleSubmit.bind(this)   // might not be needed when using arrow function
  }

  validateLogin = () => (
    this.state.email.length > 0 && this.state.password.length > 0 // must be filled
  )

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => { // what to do after submit
    e.preventDefault()
    console.log(`
      email: ${this.state.email}
      password: ${this.state.password}
    `)
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Login Page</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Helmet>

        <br /> {/* remove when necessary */}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Email address"
                   value={this.state.email}
                   onChange={this.handleChange}
            />
            <input type="password" className="form-control" id="password" placeholder="Password"
                   value={this.state.password}
                   onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="btn btn-warning" disabled={!this.validateLogin()}>
            Submit
          </button>
        </form>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous" />
      </div>
    )
  }
}
