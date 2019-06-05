import React, { Component } from 'react';
import './cashIn.css';

class CashIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      name: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(){
    this.setState({clicked: !this.state.clicked});
  };

  handleChange(event){
    this.setState({name: event.target.value});
  };

  handleSubmit(event){
    event.preventDefault();
    const newEntry = {
      name: this.state.name,
      score: this.props.coins
    };
    this.props.addHiScore(newEntry);
    this.setState({
      clicked: !this.state.clicked,
      name: ''
    });
  };

  render(){
    if(this.state.clicked){
      return(
        <div>
          <form autoComplete= 'off' onSubmit={this.handleSubmit}>
            <aria-label
              htmlFor='name'
              className='label'
            >
              Name
            </aria-label>
            <input
              className='form-input'
              type='text'
              id='name'
              name='name'
              onChange={this.handleChange}
            />
            <input
              className='menu-button'
              type='submit'
              value='Cash In'
            />
          </form>
        </div>
      )
    }else{
      return(
        <div>
          <button
            className='menu-button'
            onClick={this.handleClick}
          >
            Cash In
          </button>
        </div>
      )
    };
  };

};

export default CashIn;
