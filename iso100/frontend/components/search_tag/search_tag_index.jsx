import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.5s'
};


class SearchTagIndex extends Component {
  constructor(props) {
    super(props);

    this.tagId = this.props.match.params.tagId;
  }

  componentDidMount(){
    this.props.requestPhotosByTag(this.props.match.params.tagId);
    this.props.requestTag(this.props.match.params.tagId);
  }

  renderPhotos(){
    const photoList = this.props.photos.map((photo, idx) => (
      <li key={idx} className="user-page-photos">
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
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}>
      {photoList}
    </Masonry>
  );
  }

  render(){
    if (this.props.photos[0] && this.props.tag[0]) {
      return(
        <div className="background-color-search">
          <div className="search-results">
            <div className="search-header">
              Search Results for Tag:
              <div className="tag-name">
                {this.props.tag[0].name}
              </div>
            </div>
            {this.renderPhotos()}
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

export default SearchTagIndex;
