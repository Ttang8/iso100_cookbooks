import React, { Component } from 'react';
import CommentFormContainer from '../comment/comment_form_container';
import TagFormContainer from '../tag/tag_form_container';
import { Link, withRouter} from 'react-router-dom';

class PhotoDetailView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      album_id: "",
      buttonDisplay: "Add to Album"
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidMount () {
    this.props.requestPhoto(this.props.photoId);
    this.props.requestAlbums();
  }

  displayAlbumName(){
    let albumName;
    this.props.albums.forEach((album)=> {
      if (album.id === this.props.photo.album_id) {
        albumName = album.title;
      }
    });
    return albumName || 'None';
  }

  handleDelete(event){
    event.preventDefault();
    this.props.deletePhoto(this.props.photo);
    this.props.history.goBack();
  }

  handleSubmit(event){
    event.preventDefault();
    let photo = Object.assign({}, this.props.photo, this.state);
    this.props.updatePhoto(photo);
  }

  handleChange(event){
    this.setState({album_id: event.target.value, buttonDisplay: "Add to Album"});
  }

  userAlbums(){
    let arr =[];
    this.props.albums.forEach((album)=>{
      if (album.user_id === this.props.photo.user_id) {
        arr.push(album);
      }
    });

    const userAlbumList = arr.map((album)=>{
      return(
        <option key={album.id} value={album.id} >{album.title}</option>
      );
    });
    return userAlbumList;
  }

  toggleAddDisplay(){
    this.setState({buttonDisplay: "Added"});
  }

  displayEdits(){
    return (
      <div className="photo-edit-and-delete">
        <form onSubmit={this.handleSubmit} className="add-album-form">
          <select className="albums-select" value={this.state.album_id} onChange={this.handleChange} >
            <option disabled >--Select Album--</option>
            {this.userAlbums()}
            <option value={null}>none</option>
          </select>
          <button type="submit" onClick={this.toggleAddDisplay} value="Submit">{this.state.buttonDisplay}</button>
        </form>
        <button className="delete-button" onClick={this.handleDelete}>Delete Photo</button>
      </div>
    );
  }

  handleBack(){
    this.props.history.goBack();
  }

  handleDeleteTag(event){
    event.preventDefault();
    this.props.deleteTag(event.currentTarget.value)
    .then(this.props.requestPhoto(this.props.photoId));
  }

  renderTags(){
    let tags = this.props.photo.tags.map((tag, idx)=>{
      return(
        <li key={idx} className="tags-li">
          <div>
            <Link to={`/search/${tag.id}`}>
              {tag.name}&nbsp;
            </Link>
          </div>
          <div>
            {this.props.photo.user_id === this.props.currentUser.id ? <button value={tag.id} type="button" onClick={this.handleDeleteTag}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button> : ""}
          </div>
        </li>
      );
    });
    return tags;

  }

  renderErrors(){
    return(
      <ul className="errors-color">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    if (this.props.photo) {
      return (
        <div className="photo-detail-view-container">
          <div className="photo-detail-view">
            <div className="back-button">
              <button onClick={this.handleBack}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;
                Go Back
              </button>
            </div>
            {this.props.photo.user_id === this.props.currentUser.id ? this.displayEdits() : ""}
            <img className="group" src={this.props.photo.image_url}></img>
            <div className="selected-album">Selected Album
              <p>{this.displayAlbumName()}</p>
            </div>
          </div>
          <div>
            <ul className="photo-tags">
              <li className="tags-title">Tags: </li>
              {this.props.photo.tags ? this.renderTags() : ""}
            </ul>
          </div>
          <div className="photo-detail-container">
            <div className="photo-detail-user-information">
              <Link className="username-show-page"to={`/userpage/${this.props.currentUser.id}`}>
                {this.props.photo.username}
              </Link>
            <div/>
            <div className="photo-detail-title">
              {this.props.photo.title}
            </div>
            <div className="photo-detail-description">
              {this.props.photo.description}
            </div>
            <div className="comment-form-container">
              <CommentFormContainer requestPhoto={this.props.requestPhoto} currentUser={this.props.currentUser} comments={this.props.photo.comments} photoId={this.props.photo.id}/>
            </div>
          </div>
            <div className="photo-detail-tags">
              {this.props.photo.user_id === this.props.currentUser.id ? <TagFormContainer requestPhoto={this.props.requestPhoto} tags={this.props.photo.tags} photoId={this.props.photoId}/> : ""}
            </div>
          </div>
        </div>
      );
    } else {
    return (
      <div></div>
    );
  }
  }
}

export default PhotoDetailView;
