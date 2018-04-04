import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import HomeContainer from '../home/home_container';

class SessionForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      modalIsOpen: true
    };

    this.props.clearErrors();

    this.toggleModal = {toggle:true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.setState = this.setState.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount () {
    this.props.clearErrors();
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
    this.props.history.push('/');
  }

  handleSubmit(event){
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.state = {
      username: "",
      password: ""
    };
  }

  handleDemo(event){
    event.preventDefault();
    let username = 'GuestAccount';
    let password = 'password';

    for (let i = 0; i < username.length; i++) {
      setTimeout(() => this.setState({username: username.slice(0, i + 1)}), (i * 50));
    }
    for (let i = 0; i < password.length; i++) {
      setTimeout(() => this.setState({password: password.slice(0, i + 1)}), ((i + username.length) * 50));
    }
    const user = {username: 'GuestAccount', password: 'password'};
    setTimeout(() => this.props.login({user}), (1350));
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    if (!this.state.modalIsOpen) {
      this.openModal();
    }

    return(
      <div className="session-form">
        <HomeContainer />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="SessionFormModal"
          className="session-modal"
        >

        <div>
          <br />
          {this.props.formType === 'login' ? 'Log In' : 'Create Account'}</div>
        <div className="errors">
          {this.renderErrors()}
        </div>
        <form className="submitform" onSubmit={this.handleSubmit}>
          <div className="inputs">
            <input placeholder="Username" type="text" autoFocus="autofocus" value={this.state.username} onChange={this.update('username')}></input>
          </div>
          <div className="inputs">
            <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')}></input>
          </div>
          <input className="login-button modal-button" type="submit" value="Submit"></input>
          <button className="login-button modal-button" type="button" onClick={this.handleDemo}>Demo</button>
        </form>
        <div className="small-text">
          {this.props.formType === 'login' ?
            <div>Need an account?&nbsp;
              <Link className="fade-gray" to="/signup">Sign Up</Link>
            </div> :
            <div>Already have an account?&nbsp;
              <Link className="fade-gray" to="/login">Log In</Link>
            </div>}
        </div>
        <div className="close-button" >
          <button onClick={this.closeModal}>Close</button>
        </div>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;
