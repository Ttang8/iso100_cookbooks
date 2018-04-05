import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import AlbumFormContainer from '../album/album_form_container';
import Modal from 'react-modal';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.5s'
};

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPhotos: true,
      displayAlbums: false,
      openAlbumModal: false,
      displayAlbumIndex: false,
      choosenAlbumId: "",
    };

    this.togglePhotos = this.togglePhotos.bind(this);
    this.toggleAlbums = this.toggleAlbums.bind(this);
    this.handleAlbumModal = this.handleAlbumModal.bind(this);
    this.toggleAlbumIndex = this.toggleAlbumIndex.bind(this);
    this.handlePicClick = this.handlePicClick.bind(this);


    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({openAlbumModal: true});
  }

  closeModal() {
    this.setState({openAlbumModal: false});
    this.props.clearErrors();
  }

  componentDidMount () {
    this.props.requestPhotos();
    this.props.requestAlbums();
  }

  handleAlbumModal() {
    this.setState({openAlbumModal: true});
  }

  handlePhotos() {
    const photoList = this.props.userPhotos.map((photo) => (
      <li key={photo.id} className="user-page-photos">
        <button value={photo.id} onClick={this.handlePicClick}>
          <div className="relative_pos">
            <div className="user-page-title-username">
              <Link to={`/photos/${photo.id}`} >
                {photo.title}
                <br />
                by&nbsp;{photo.username}
              </Link>
            </div>
            <img className="group user-page-image" src={photo.image_url}></img>
          </div>
        </button>
      </li>
    ));

    return(
      <Masonry
        className={'masonry-user-page'}
        elementType={'ul'}
        options={masonryOptions}>
      {photoList}
    </Masonry>
  );
  }

  displayCreateAlbum(){
    return (
      <button onClick={this.handleAlbumModal}>
        <div className="add-new-album create-album"  >
          <div>Create Album
            <i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i>
          </div>
        </div>
      </button>
    );
  }

  toggleAlbumIndex(event){
    event.preventDefault();
    this.setState({displayPhotos: false, displayAlbumIndex: true, displayAlbums: false, openAlbumModal: false, choosenAlbumId: event.currentTarget.value});
  }

  handleAlbums(){
    const albumList = this.props.userAlbums.map((album)=>{
      if (album.photos[0]) {
        return(
          <button key={album.id} value={album.id} onClick={this.toggleAlbumIndex}>
            <div className="add-new-album">
              <div className="album-title-absolute">
                {album.title}
                <br />
                {album.photos.length} photos
              </div>
              <img src={album.photos[0].image_url}></img>
            </div>
          </button>
        );
      } else {
      return (
        <div key={album.id} className="add-new-album">{album.title}
          <br />
          0 photos
        </div>
      );
    }});

    return (
      <div className="albums-container">
        {this.props.currentUser.id.toString() === this.props.userId ? this.displayCreateAlbum() : ""}
        {albumList}
      </div>
    );
  }


  togglePhotos(){
    this.setState({displayPhotos: true, displayAlbumIndex: false, displayAlbums: false, openAlbumModal: false});
  }

  toggleAlbums(){
    this.setState({displayPhotos: false, displayAlbumIndex: false, displayAlbums: true, openAlbumModal: false});
  }

  handlePicClick(event) {
    event.preventDefault();
    this.props.history.push(`/photos/${event.currentTarget.value}`);
  }

  handleAlbumsIndex(){
    let dup = Object.assign({}, this.state);
    let choosenAlbum;
    this.props.userAlbums.forEach((album)=>{
      if (album.id.toString() === dup.choosenAlbumId.toString()) {
        choosenAlbum = album;
      }
    });
    let albumPhotos = choosenAlbum.photos.map((photo)=>{
      return (
        <li key={photo.id} className="user-page-photos">
          <button value={photo.id} onClick={this.handlePicClick}>
            <div className="relative_pos">
              <div className="user-page-title-username">
                <Link to={`/photos/${photo.id}`} >
                  {photo.title}
                  <br />
                  by&nbsp;{photo.username}
                </Link>
              </div>
                <img className="group user-page-image" src={photo.image_url}></img>
            </div>
          </button>
        </li>
      );
    });

    return(
      <div className="choosenAlbum-title">
        {choosenAlbum.title}
        <br />
        <Masonry
          className={'masonry-user-page'}
          elementType={'ul'}
          options={masonryOptions}>
          {albumPhotos}
        </Masonry>
      </div>
  );
  }

  render () {
    return (
        <div className="backgrounds">
          <div className="user-page-container">
            <div className="user-page-user-information">
              {this.props.userPhotos[0] ? this.props.userPhotos[0].username : "" }
            </div>
            <div className="photostream-albums-bar">
              <button type="button" onClick={this.togglePhotos}>Photostream</button>
              <button type="button" onClick={this.toggleAlbums}>Albums</button>
            </div>
              {this.state.displayPhotos ? this.handlePhotos() : ""}
              {this.state.displayAlbums ? this.handleAlbums() : ""}
              {this.state.displayAlbumIndex ? this.handleAlbumsIndex() : ""}
          </div>
          <Modal
            isOpen={this.state.openAlbumModal}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={false}
            contentLabel="UploadFormModal"
            className="session-modal"
          >
            <AlbumFormContainer closeModal={this.closeModal}/>
          </Modal>
        </div>
    );
  }
}

export default UserPage;
