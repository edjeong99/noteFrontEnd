import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DownloadCSV from './DownloadCSV';
import { downloadNotesToCSV } from '../util';
import { setSearchBoolean } from '../actions';
import barcelonaImage from '../image/barcelona.jpg';

// SideMenu component handles left side menu
const SideMenu = props => {
  return (
    <div className='sideMenu'>
      <h2>
        {' '}
        Ed's
        <br /> Notes
      </h2>
      <Link to='/'>
        <button onClick={() => props.setSearchBoolean(false)}>
          Home / View Notes
        </button>
      </Link>
      <Link to='/addNote'>
        <button> Add a Note</button>
      </Link>

      <DownloadCSV
        notes={props.notes}
        downloadCSV={() => {
          downloadNotesToCSV(props.notes);
        }}
      />

      <img src={barcelonaImage} alt='Barcelona' width='150' />
    </div>
  );
};

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(
  mapStateToProps,
  { setSearchBoolean }
)(SideMenu);
