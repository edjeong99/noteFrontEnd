import DisplayNoteCard from './DisplayNoteCard';
import React, { Component } from 'react';
import SearchNote from './SearchNote';
import { SideMenu } from './';
import { searchFunc } from '../util';
import authenticate from '../util/authenticate';
import { serverSearchFunc } from '../actions';
// below 3 codes should be removed once things work
// there are used to get notes without login
import { fetchNotes } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// DisplayNoteList component is presentational component that manage display of list of note
class DisplayNoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isSearched: false,
    };
    this.displayedNotes = [];
  }

  componentDidMount() {
    console.log('DisplayNoteList ComponentMount ');
    if (authenticate()) {
      this.setState({
        displayedNotes: this.props.notes,
      });
      console.log('NoteList user authenticated ');
      console.log(this.displayedNotes);
    } else {
      console.log('noteList user NOT authenticated');
      this.props.history.push('/');
    }

    // above firebase authenticate is not working correctly
    // need to check local to see if user is logged in

    localStorage.secret_token
      ? console.log('NoteList user localStrage is true ')
      : this.props.history.push('/');
  }
  // for now just set user as user ID 2
  //   this.props.handleLogin(2);
  //   this.props.fetchNotes(2);
  //   this.setState({
  //     displayedNotes: this.props.notes
  //   });
  // }
  // to see if "View Your Notes" is clicked.  I use the props.isSearched boolean.
  // Toggle isSearched in redux state to decide whether all notes should be displayed, or
  // notes with search result should be displayed
  // componentDidUpdate checks if isSearched has changed.
  componentDidUpdate(prevProps) {
    if (prevProps.isSearched !== this.props.isSearched) {
      this.setState({
        isSearched: this.props.isSearched,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      isSearched: true,
    });
    this.props.handleSearchBoolean(true);
  };

  resetNotes = () => {
    setTimeout(
      this.setState({
        displayedNotes: this.props.notes,
      }),
      1500
    );
  };

  render() {
    // below code is temporary.  remove when publishing
    if (this.state.displayedNotes === []) this.resetNotes();

    if (this.state.isSearched) {
      // using server side search func
      // below has bug.  displayedNotes won't get updated in time so older version of
      // displayedNotes will be used.
      // either use state to trigger render when update is complete
      // or put render inside of "then"
      serverSearchFunc(this.state.query).then((notes) => {
        console.log('in DisplayNoteList Func  then notes = ', notes);

        this.displayedNotes = notes;
      });

      console.log(
        'in DisplayNoteList Func  displayNotes = ',
        this.displayedNotes
      );

      // using client side search func
      // this.displayedNotes = searchFunc(this.state.query, this.props.notes);
    } else this.displayedNotes = [...this.props.notes];

    return (
      <div className="App">
        <SideMenu />
        <div className="NoteListContainer">
          <div className="NoteListTop">
            <h3> Your Notes </h3>
            <SearchNote
              notes={this.state.notes}
              query={this.state.query}
              handleInputChange={this.handleInputChange}
              onSubmit={this.handleOnSubmit}
            />
          </div>
          <div className="noteList">
            {this.displayedNotes.map((note) => (
              <DisplayNoteCard
                key={note.id}
                note={note}
                submitAdd={this.props.submitAdd}
                submitDelete={this.props.submitDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes }
  )(DisplayNoteList)
);
