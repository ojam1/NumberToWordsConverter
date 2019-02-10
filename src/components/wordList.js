import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { resetWordState } from '../actions/words';

class WordList extends Component {
  constructor(props) {
    super(props)
  }

  renderWordList() {
    const { word } = this.props;

    let jsx;

    if (word[0] === 'initial_state')
      jsx = <h1 className='display-2'>waiting for api</h1>;

    if (word.length == 0)
     jsx = <h1 className='display-2'>no words</h1>;

     if (word.length > 0 && word[0] !== 'initial_state')  jsx = word.map(x => (
      <h1 className='display-2'>{x}</h1>
    ));

    return jsx;
  }

  render() {
    const { resetWordState } = this.props;

    return (
      <div className='d-flex align-items-center flex-column'>
        <h1 className='display-4 text-center'>Words</h1>
        <div className='pre-scrollable'>
          {this.renderWordList()}
        </div>
        <NavLink className='btn btn-primary m-5 p-2 w-75' onClick={() => {resetWordState()}} to='/'>
          Go Back
        </NavLink>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    word: state.word
  };
};

export default connect(
  mapStatetoProps,
  { resetWordState }
)(WordList);