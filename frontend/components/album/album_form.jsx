import React, { Component } from 'react';


class AlbumForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
  }

  handleSubmit (event) {
    event.preventDefault();
    const album = this.state;
    this.props.createAlbum({album})
    .then(()=>this.props.closeModal());
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
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

  render () {
    return(
      <div>
        <div className="errors">
          {this.renderErrors()}
        </div>
        <form className="upload-photo-form" onSubmit={this.handleSubmit}>
          <div>
            Create An Album
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

    );
  }

}

export default AlbumForm;
