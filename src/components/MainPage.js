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
        <h1 className='display-4 mt-1 pt-1'>{this.state.text}</h1>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column pb-1'>
            <button
              className='btn btn-outline-primary m-1 mw-33 rounded-circle'
              onClick={() => this.setState({ text: this.state.text + '1' })}
            >
              1
            </button>
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
              onClick={() => this.setState({ text: this.state.text + '7' })}
            >
              7 pqrs
            </button>
          </div>
          <div className='d-flex flex-column pb-1'>
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
              onClick={() => this.setState({ text: this.state.text + '5' })}
            >
              5 jkl
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
              onClick={() => this.setState({ text: this.state.text + '0' })}
            >
              0
            </button>
          </div>
          <div className='d-flex flex-column pb-1'>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ text: this.state.text + '3' })}
            >
              3 def
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ text: this.state.text + '6' })}
            >
              6 mno
            </button>
            <button
              type='button'
              className='btn btn-outline-primary m-1 w-33 rounded-circle'
              onClick={() => this.setState({ text: this.state.text + '9' })}
            >
              9 wxyz
            </button>
          </div>
        </div>
      </div>
    );
  }
}
