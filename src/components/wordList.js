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

    if (this.apiRetrievedWords())
      jsx = <h1 className='display-2'>waiting for api</h1>;

    if (this.apiReturnedNoWords())
     jsx = <h1 className='display-2'>no words</h1>;

     if (this.apiReturnedWords())
      jsx = word.map(x => (
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

  apiRetrievedWords() {
    return this.props.word[0] === 'initial_state';
  }

  apiReturnedNoWords() {
    return this.props.word.length == 0
  }

  apiReturnedWords() {
    const { word } = this.props;

    return word.length > 0 && word[0] !== 'initial_state'
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