import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  createButton(number, letters) {
    return (
      <button
        type='button'
        className='btn btn-outline-primary m-1 mw-33 rounded-circle'
        onClick={() => this.setState({ text: this.state.text + number})}
      >{number} {letters}</button>
    )
  }

  render() {
    return (
      <div className='d-flex align-items-center flex-column'>
        <h4 className='h4'>
        {this.state.text}</h4>
        <div className='pb-1'>
          {this.createButton(1)}
          {this.createButton(2, 'abc')}
          {this.createButton(3, 'def')}
        </div>
        <div className='pb-1'>
          {this.createButton(4, 'ghi')}
          {this.createButton(5, 'jkl')}
          {this.createButton(6, 'mno')}
        </div>
        <div className='pb-1'>
          {this.createButton(7, 'pqrs')}
          {this.createButton(8, 'tuv')}
          {this.createButton(9, 'wxyz')}
        </div>
        <div className='pb-1'>
          {this.createButton(0)}
        </div>
      </div>
    );
  }
}
