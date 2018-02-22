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
        // text.json();
        return response.json();
      })
      .then(payload => {
        console.log(JSON.stringify(payload, null, 2));
        this.setState({ text: payload.toString() });
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  render() {
    return <h1 className="Title-title">{this.state.text}</h1>;
  }
}

export default Title;
