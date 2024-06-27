import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpEmail: '',
      signUpPassword: '',
    }
  }

  onEmailChange = (event) => {
    this.setState({signUpEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signUpPassword: event.target.value})
  }

  onSubmitSignUp = (event) => {
    console.log(this.state);
    fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signUpEmail,
        secret: this.state.signUpPassword
      })
    })
    .then(response => console.log(response.json()))
      .then(user => {
        console.log('Successfully registered');
        this.props.onRouteChange('home');
      })
      event.preventDefault();
  }

  onClickTermsOfUse = () => {
    // event.preventDefault();
    this.props.onRouteChange('about');
  }

  render() {
    return(
      <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0">Sign Up</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input 
                    onChange={this.onEmailChange} 
                    type="email" 
                    className="form-control rounded-4" 
                    id="floatingInput" 
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    onChange={this.onPasswordChange}
                    type="password" 
                    className="form-control rounded-4" 
                    id="floatingPassword" 
                    placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button 
                  onClick={(event) => this.onSubmitSignUp(event)}
                  className="w-100 btn btn-lg rounded-4 btn-primary" 
                  type="submit">
                  Sign up
                </button>
                <h5 className="my-4 hr-text"><span>or</span></h5>
                <div className="w-auto container text-center row column-gap-3">
                  <button className="col d-flex justify-content-center align-items-center column-gap-1 w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x " viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                    Twitter
                  </button>
                  <button className="col d-flex justify-content-center align-items-center column-gap-1 w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                    Facebook
                  </button>
                  <button className="col d-flex justify-content-center align-items-center column-gap-1 w-100 py-2 mb-2 btn btn-outline-success rounded-4" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                    Google
                  </button>
                </div>
                <small className="text-muted">By signing up, you agree to the 
                  <a 
                    onClick={(event) => this.onClickTermsOfUse(event)} 
                    className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-1">
                      terms of use.
                  </a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>