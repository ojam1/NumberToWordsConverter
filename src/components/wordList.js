import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class WordList extends Component {
  constructor() {
    super()
  }

    render() {
    return (
      <div className='d-flex align-items-center flex-column'>
        <h1 className='display-4 text-center'>Words</h1>
        <div className='pre-scrollable'>
          <h1>Words</h1>
        </div>
        <NavLink className='btn btn-primary m-5 p-2 w-75' onClick={() => {resetWordState()}} to='/'>
          Go Back
        </NavLink>
      </div>
    );
  }
}

export default connect(
  null, null
)(WordList);
