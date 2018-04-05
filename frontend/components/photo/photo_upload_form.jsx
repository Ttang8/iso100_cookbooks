import React, { Component } from 'react';
import { Link, matchPath } from 'react-router-dom';
import HomeContainer from '../home/home_container';
import UserPageContainer from '../user_page/user_page_container';

class PhotoUploadForm extends Component {
  constructor (props) {
    super (props);

    this.state = {
      title: "",
      description: "",
      image_url: "",
      thumbnail_url: "",

    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleUpload (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, (errors, image) => {
        console.log(image);
        if (errors) {
        } else {
          this.setState({image_url: image[0].secure_url, thumbnail_url: image[0].thumbnail_url});
        }
      }
    );
  }

  handleSubmit (event) {
    event.preventDefault();
    const photo = this.state;
    this.props.createPhoto({photo})
    .then(()=> this.props.closeModal());
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  render () {
    return (
      <div>
        <div>
          <div className="errors">
            {this.renderErrors()}
          </div>

          <form className="upload-photo-form" onSubmit={this.handleSubmit}>
            <div className="upload-photo-button">
              <button className="gray-fade" onClick={this.handleUpload}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                &nbsp;Upload Image
              </button>
              <img className="thumbnail-image"src={this.state.thumbnail_url}></img>
            </div>

            <div className="inputs">
              <input placeholder="Title - required" type="text" value={this.state.title} onChange={this.update('title')}></input>
            </div>
            <div className="inputs">
              <textarea placeholder="Description" type="text" value={this.state.description} onChange={this.update('description')}>
              </textarea>
            </div>
            <input className="login-button modal-button" type="submit" value="Submit"></input>
          </form>
          <div className="close-button" >
            <button onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>

    );
  }
}

export default PhotoUploadForm;
