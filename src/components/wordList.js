import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { resetWordState } from '../actions/words';

class WordList extends Component {
  constructor(props) {
    super(props);
  }

  renderWordList() {
    const { apiData, apiLoaded } = this.props.word;

    let jsx;

    if (!apiLoaded) jsx = <h1 className='display-2'>waiting for api</h1>;

    if (this.apiReturnedNoWords())
      jsx = <h1 className='display-2'>no words</h1>;

    if (this.apiReturnedWords())
      jsx = apiData.map(word => <h1 className='display-2'>{word}</h1>);

    return jsx;
  }

  render() {
    const { resetWordState } = this.props;

    return (
      <div className='d-flex align-items-center flex-column'>
        <h1 className='display-4 text-center'>Words</h1>
        <div className='pre-scrollable'>{this.renderWordList()}</div>
        <NavLink
          className='btn btn-primary m-5 p-2 w-75'
          onClick={() => {
            resetWordState();
          }}
          to='/'
        >
          Go Back
        </NavLink>
      </div>
    );
  }

  apiReturnedNoWords() {
    const { apiData, apiLoaded } = this.props.word;

    return apiData.length == 0 && apiLoaded;
  }

  apiReturnedWords() {
    return this.props.word.apiData.length > 0;
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
