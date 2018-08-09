import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pet_names: []
    }
  }
  componentDidMount() {
    
  }
  render() {
    let pets = this.state.pet_names.map(el => {
      return (
        <div key={el.pet_id}>
          <ul>
            <li>{el.pet_name}</li>
            <li>{el.pet_species}</li>
            <li>{el.pet_age}</li>
            <button className="edit_button">Edit</button>
            <button className="delete_button">Delete</button>
          </ul>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>My Pets:</h1>
      </div>
    );
  }
}

export default App;
