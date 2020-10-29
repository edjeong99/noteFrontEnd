import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Card, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 170px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 1px solid black; */
  margin: 10px;
  border-radius: 15%;
  /* background: #e6e9ed; */
`;

const DisplayNoteCard = props => {
  const handleCopy = () => {
    const copiedNote = {
      title: props.note.title,
      textBody: props.note.textBody
    };

    props.submitAdd(copiedNote);
  };

  const handleDelete = () => {
    props.submitDelete(props.note.id);
  };

  return (
    <CardDiv>
      <Link to={`/Notes/${props.note.id}`} style={{ textDecoration: 'none' }}>
        {/* <h3> {props.note.title} </h3>
        <p> {props.note.textBody}</p> */}

        <Card
          style={{
            // width: '200px',
            height: '170px',
            margin: '10px',
            overflow: 'hidden',
            fontFamily: 'Roboto',
            color: 'black',
            width: '150px',
            backgroundColor: '#F5F5F5',
            border: 'none'
          }}
        >
          <Card.Content style={{ paddingTop: '4px', width: '150px' }}>
            <Card.Header
              as='h4'
              style={{
                height: '40px',
                overflow: 'hidden',
                padding: '10px ',
                borderBottom: '1px solid black',
                fontSize: '1.6rem'
              }}
            >
              {props.note.title}
            </Card.Header>
            <p
              style={{
                height: '60px',
                overflow: 'hidden'
                // fontSize: '1.1rem'
              }}
            >
              {' '}
              {props.note.textBody}
            </p>
          </Card.Content>
        </Card>
      </Link>
      <div className='iconGroup'>
        <Icon link size='big' color='teal' name='copy' onClick={handleCopy} />
        <Icon
          link
          size='big'
          color='red'
          name='delete'
          onClick={handleDelete}
        />
      </div>
    </CardDiv>
  );
};

export default DisplayNoteCard;
