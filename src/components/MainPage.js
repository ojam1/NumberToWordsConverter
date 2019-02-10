import React, { Component } from 'react';
import { connect } from 'react-redux';

import { storeNumbers } from '../actions/numbersToProcess';
import { allWords } from '../actions/words';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ''
    };
  }

  render() {
    const { storeNumbers } = this.props;
    const { numbers } = this.state

    return (
      <div className='d-flex align-items-center flex-column'>
        <h1 className='display-4 mt-1 pt-1'>{numbers}</h1>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column pb-1'>
            <button
              className='btn btn-outline-primary m-1 mw-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '1' })}
            >
              1
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '4' })}
            >
              4 ghi
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '7' })}
            >
              7 pqrs
            </button>
          </div>
          <div className='d-flex flex-column pb-1'>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '2' })}
            >
              2 abc
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '5' })}
            >
              5 jkl
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '8' })}
            >
              8 tuv
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '0' })}
            >
              0
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: '' })}
            >
              clear
            </button>
          </div>
          <div className='d-flex flex-column pb-1'>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '3' })}
            >
              3 def
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '6' })}
            >
              6 mno
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ numbers: numbers + '9' })}
            >
              9 wxyz
            </button>
          </div>
        </div>
        <button
          type='button'
          className='btn btn-primary m-5 p-2 w-75'
          onClick={() => storeNumbers(numbers)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { storeNumbers }
)(MainPage);
