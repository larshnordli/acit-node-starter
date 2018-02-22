import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  constructor() {
    super();
    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    fetch(`/react`, {
      accept: 'application/json',
    })
      .then(response => {
        return response.json();
      })
      .then(payload => {
        this.setState({ text: payload });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <h1 className="Title-title">{this.state.text}</h1>;
  }
}

export default Title;
