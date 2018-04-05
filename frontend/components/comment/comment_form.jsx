import React, {Component} from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.5s'
};


class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: this.props.currentUser.username,
      comments: this.props.comments,
      photo_id: this.props.photoId,
      body: "",
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let comment = this.state;
    this.props.createComment({comment})
    .then(()=>this.props.requestPhoto(this.props.photoId))
    .then(()=> this.setState({body: ""}))
    .then(()=> this.props.clearErrors());
  }

  handleDeleteComment(event){
    event.preventDefault();
    this.props.deleteComment(event.currentTarget.value)
    .then(()=>this.props.requestPhoto(this.props.photoId))
    .then(()=> this.props.clearErrors());
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }


  renderComments() {
    let commentList = this.props.comments.map((comment, idx)=>{
      return(
        <li className="comment-chunk" key={idx}>
          <div className="comment-date">
            <div className="comment-body">
              <Link className="username-blue" to={`/userpage/${comment.user_id}`}>
                {comment.author}
              </Link>
              <div>
                {comment.time}
              </div>
            </div>
            {comment.body}
          </div>
          <div className="comment-delete-button">
            {comment.user_id === this.props.currentUser.id ? <button type="button" className="expanding-button" value={comment.id} onClick={this.handleDeleteComment}>
            <i className="fa fa-times" aria-hidden="true"></i>
            </button> : ""}
          </div>
        </li>
      );
    });

    return commentList;
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

  render(){
    return(
      <div className="comments-container">
        <Masonry
          className={'masonry-user-page'}
          elementType={'ul'}
          options={masonryOptions}>
          {this.renderComments()}
        </Masonry>
        <form className="comment-input-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="comment-form">
          </div>
          <input className="login-button comment-button" type="submit" value="Add Comment"></input>
          <input className="text-area-comment" placeholder="Add a Comment" type="text" value={this.state.body} onChange={this.update('body')}>
          </input>
        </form>
      </div>

    );

  }
}

export default CommentForm;
