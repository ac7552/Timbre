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
  this.enterGuest = this.enterGuest.bind(this);

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
			hashHistory.push("/home");
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

  enterGuest(e){
    e.preventDefault();
    if(this.props.formType === "login"){
      const user = {username: "username", password: "password123"};
      this.props.processForm({user});
    }
  }

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup" className="formLinks">Sign up instead</Link>;
		} else {
			return <Link to="/login" className="formLinks">Log in instead</Link>;
		}
	}

displayDemo(){
  if(this.props.formType === "login"){
    return  <button className="guest" onClick={this.enterGuest}>Demo</button>
  }else{
    return <div/>

  }
}

render(){
  return (
    <div>
    <div className="login-form-container-outter-box">
      <div className="login-form-container-inner-box">
      <form onSubmit={this.handleSubmit} className="login-form-box">

        {this.navLink()}
        <div className="login-form">
            <input type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.update("username")}
              className="login-input" />
              <br/>
              <br/>
            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"/>
        </div>
        <div className="enter">
          {this.displayDemo()}
          <input className="enterSite" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
  </div>
  );
}


}

export default withRouter(SessionForm);
