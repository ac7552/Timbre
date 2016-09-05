import React from 'react';
import { Link, hashHistory } from 'react-router';
import {withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    username: "",
    password: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);


}

componentWillReceiveProps(newProps){
  if(newProps.logggedIn){
    this.props.router.replace("/");
  }
}

componentDidUpdate(){
  // debugger;
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => {
      // e.preventDefault();
      this.setState({[field]: e.currentTarget.value });
    };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}


render(){
  return (
    <div className="login-form-container-outter-box">
      <div className="login-form-container-inner-box">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to Timbre!
        <br/>
        Please { this.props.formType } or { this.navLink() }

        <div className="login-form">
          <br />
          <label> Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input" />
          </label>

          <br />
          <label> Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input" />
          </label>

          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div> 
  );
}


}

export default withRouter(SessionForm);
