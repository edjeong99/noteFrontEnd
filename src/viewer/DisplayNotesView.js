import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { authenticate } from '../util';
import {
  DisplayNoteList,
  DisplayNote,
  AddNoteForm,
  DeleteNote,
  EditNote,
  Register,
  Login,
  Logout,
  Landing
} from '../components/';
import {
  setUserId,
  fetchNotes,
  addNote,
  deleteNote,
  editNote,
  setSearchBoolean
} from '../actions';

// this is view component that manage main display area
// it has most of logics and also manage all route component

class DisplayNotesView extends Component {
  componentDidMount() {
    if (authenticate()) {
      console.log('DiplayNote Viewer  this.props.userId', this.props.userId);
      this.props.fetchNotes(this.props.userId);
    }
  }

  submitAdd = note => {
    console.log('Submit Add Note', { ...note, userId: this.props.isSearched });
    this.props.addNote({ ...note, user_id: this.props.userId });
  };

  submitEdit = editedNote => {
    this.props.editNote(editedNote);
  };

  submitDelete = deleteId => {
    this.props.deleteNote(deleteId);
  };

  handleSearchBoolean = bool => {
    this.props.setSearchBoolean(bool);
  };

  handleLogin = id => {
    this.props.setUserId(id);
    this.props.fetchNotes(this.props.userId);
  };

  render() {
    return (
      <div className='displayNotesView'>
        <nav>
          <NavLink to='/login'> Login </NavLink>
          <NavLink to='/register'> Register </NavLink>
          <NavLink to='/logout'> Logout </NavLink>

          {/* <NavLink to="/logout"> Logout </NavLink> */}
        </nav>

        <Route
          path='/register'
          render={props => (
            <Register {...props} handleLogin={this.handleLogin} />
          )}
        />
        <Route
          path='/login'
          render={props => <Login {...props} handleLogin={this.handleLogin} />}
        />
        <Route path='/logout' component={Logout} />

        <Route exact path='/' render={props => <Landing />} />

        <Route
          exact
          path='/Notes'
          render={props => (
            <DisplayNoteList
              {...props}
              notes={this.props.notes}
              isSearched={this.props.isSearched}
              handleSearchBoolean={this.handleSearchBoolean}
              submitAdd={this.submitAdd}
              submitDelete={this.submitDelete}
              handleLogin={this.handleLogin}
            />
          )}
        />

        <Route
          exact
          path='/Notes/:id/edit'
          render={props => (
            <EditNote
              {...props}
              notes={this.props.notes}
              submitEdit={this.submitEdit}
            />
          )}
        />

        <Route
          exact
          path='/Notes/:id'
          render={props => (
            <DisplayNote
              {...props}
              notes={this.props.notes}
              submitAdd={this.submitAdd}
              submitDelete={this.submitDelete}
            />
          )}
        />

        <Route
          exact
          path='/Notes/:id/delete'
          render={props => (
            <DeleteNote
              {...props}
              notes={this.props.notes}
              submitDelete={this.submitDelete}
            />
          )}
        />

        <Route
          exact
          path='/addNote'
          render={props => (
            <AddNoteForm {...props} submitAdd={this.submitAdd} />
          )}
        />
      </div>
    );
  }
}

// gets the state and map them to props
const mapStateToProps = ({ fetching, notes, isSearched, userId }) => {
  return { notes, fetching, isSearched, userId };
};

export default withRouter(
  connect(mapStateToProps, {
    setUserId,
    fetchNotes,
    addNote,
    deleteNote,
    editNote,
    setSearchBoolean
  })(DisplayNotesView)
);
