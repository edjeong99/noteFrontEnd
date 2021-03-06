import React, { Component } from 'react';
import { SideMenu } from './';

class AddNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }

  handleSubmitAdd = () => {
    this.props.submitAdd(this.state);
    this.props.history.push('/Notes');
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <SideMenu />
        <div className="editNote">
          <h3>Create a New Note: </h3>
          <form onSubmit={this.handleSubmitAdd}>
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.title}
              name="title"
              size="50"
            />
            <textarea
              onChange={this.handleInputChange}
              placeholder="textBody"
              value={this.state.textBody}
              name="textBody"
            />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNoteForm;
