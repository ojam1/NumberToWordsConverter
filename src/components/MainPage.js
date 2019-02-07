import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div className='d-flex align-items-center flex-column'>
        <h4 className='h4'>
        {this.state.text}</h4>
        <div className='pb-1'>
          <button
            type='button'
            className='btn btn-outline-primary m-1 mw-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '1' })}
          >
            1
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '2' })}
          >
            2 abc
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '3' })}
          >
            3 def
          </button>
        </div>
        <div className='pb-1'>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '4' })}
          >
            4 ghi
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '5' })}
          >
            5 jkl
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '6' })}
          >
            6 mno
          </button>
        </div>
        <div className='pb-1'>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '7' })}
          >
            7 pqrs
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '8' })}
          >
            8 tuv
          </button>
          <button
            type='button'
            className='btn btn-outline-primary m-1 w-33 rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '9' })}
          >
            9 wxyz
          </button>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-outline-primary rounded-circle'
            onClick={() => this.setState({ text: this.state.text + '0' })}
          >
            0
          </button>
        </div>
      </div>
    );
  }
}
