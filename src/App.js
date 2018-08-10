import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pet_names: [],
      new_pet_name: '',
      new_pet_species_id: 1,
      new_pet_age: '',
      update_pet_name: '',
      update_pet_age: '',
      viewInput: false
    }
    this.viewPets = this.viewPets.bind(this);
    this.addPet = this.addPet.bind(this);
    this.updatePet = this.updatePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.petSpeciesHandler = this.petSpeciesHandler.bind(this);
    this.petAgeHandler = this.petAgeHandler.bind(this);
  }
  componentDidMount() {
    this.viewPets();
  }

  viewPets() {
    axios.get('/pets').then(res => {
      this.setState({
        pet_names: res.data
      })
    }).catch((e) => { console.log(e) })
  }

  addPet() {
    axios.post('/pet/add', {pet_name: this.state.new_pet_name, species_id: this.state.new_pet_species_id, pet_age: this.state.new_pet_age}).then(res => {})
  }

  updatePet() {
    
  }

  deletePet(id) {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      axios.delete(`/pet/delete/${id}`).then(res => {
        this.setState({
          pet_names: res.data
        })
      }).catch(() => console.log(alert("Pet was not deleted")));
    }
  }
  
  nameHandler(value) {
    this.setState({
      new_pet_name: value
    });
  }

  petSpeciesHandler(value) {
    this.setState({
      new_pet_species_id: value
    });

  }

  petAgeHandler(value) {
    this.setState({
      new_pet_age: value
    });

  }

  updateNameHandler(value) {
    this.setState({
      update_pet_name: value
    });
    console.log(this.state.new_pet_name)
  }

  updatePetAgeHandler(value) {
    this.setState({
      update_pet_age: value
    });

  }

  render() {
    let pets = this.state.pet_names.map(el => {
      return (
        <div key={el.pet_id + 'newId'}>
          <ul>
            <p>{el.pet_id}</p>
            <p>{el.pet_name}</p>
            <p>{el.species_name}</p>
            <p>{el.pet_age}</p>
            <button className="edit_button">Edit</button>
            <button onClick={this.updatePet()}
            <button className="delete_button" onClick={()=> this.deletePet(el.pet_id)}>Delete</button>
          </ul>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>My Pets:</h1>
        {pets}
        <input placeholder="Pet Name" onChange={(e)=>this.nameHandler(e.target.value)} />
        <input placeholder="Pet Species Id 1-8" onChange={(e) => this.petSpeciesHandler(e.target.value)}/>
        <input placeholder="Pet Age in Years" onChange={(e) => this.petAgeHandler(e.target.value)}/>
        <button onClick={()=>this.addPet()}>Add</button>
      </div>
    );
  }
}

export default App;
