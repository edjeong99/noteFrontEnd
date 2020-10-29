import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Card, Button } from 'semantic-ui-react';

const DisplayNote = props => {
  let note;
  if (props.match.params.id) {
    let noteArr = props.notes.filter(
      item => Number(item.id) === Number(props.match.params.id)
    );
    // console.log('displayNote  noteArr = ', noteArr);
    note = noteArr[0];
    // console.log('displayNote  note = ', note);
  } else {
    alert('wrong note ID');
    props.history.push('/');
  }

  const handleCopy = () => {
    const copiedNote = {
      title: note.title,
      textBody: note.textBody
    };

    props.submitAdd(copiedNote);
  };

  const handleEdit = () => {
    props.history.push(`/Notes/${props.match.params.id}/edit`);
  };

  const handleDelete = () => {
    props.submitDelete(note.id);
    props.history.push('/');
  };

  const displayItem = note ? (
    <div className='noteDisplay'>
      <section className='noteTitle'>
        <h2> {note.title} </h2>
        <div className='titleIcon'>
          <Icon
            link
            size='large'
            color='teal'
            name='copy'
            onClick={handleCopy}
          />
          <Icon
            link
            size='large'
            color='teal'
            name='edit'
            onClick={handleEdit}
          />
          <Icon
            link
            size='large'
            color='red'
            name='delete'
            onClick={handleDelete}
          />
        </div>
      </section>
      <p> {note.textBody} </p>
    </div>
  ) : (
    <h3> Loading... </h3>
  );

  return (
    <div className='displayNote'>
      {/* <nav className='displayNoteNav'> */}
      {/* <NavLink to={`/Notes/${props.match.params.id}/edit`}> Edit </NavLink>
        <NavLink to={`/Notes/${props.match.params.id}/delete`}>Delete</NavLink> */}
      {/* </nav> */}

      {displayItem}
    </div>
  );
};

export default DisplayNote;
