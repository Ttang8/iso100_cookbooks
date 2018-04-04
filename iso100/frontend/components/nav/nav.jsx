import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import Modal from 'react-modal';

class Nav extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleLogout(event){
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  handleUsernameClick() {
    if (this.props.history.location.pathname === `/userpage/${this.props.currentUser.id}`) {
      window.location.reload();
    } else {
      this.props.history.push(`/userpage/${this.props.currentUser.id}`);
    }
  }

  createLink () {
    if (this.props.currentUser) {
      return (
        <div className="search-and-upload">
          <button onClick={this.openModal}>
            <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
      );
    } else {
      return "";
    }
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }

  render(){
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      username = username[0].toLocaleUpperCase() + username.slice(1);
      return(
        <div className="upload-link">
          <div >
            {this.createLink()}
          </div>
          <div className="welcome-user">
            <button className="only-fade-gray" onClick={this.handleUsernameClick} >
              <h2>{username}</h2>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="login-button" onClick={this.handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
                Logout</button>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              shouldCloseOnOverlayClick={false}
              contentLabel="UploadFormModal"
              className="session-modal"
            >
              <PhotoUploadFormContainer closeModal={this.closeModal}/>
            </Modal>
        </div>
      );
    } else {
      return(
        <nav>
          <Link className="login-button" to="/login">
            <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;
            Log In</Link>
          &nbsp;or&nbsp;
          <Link className="signup-button" to="/signup">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>&nbsp;
            Sign Up</Link>
        </nav>
      );
    }
  }
}

export default withRouter(Nav);
