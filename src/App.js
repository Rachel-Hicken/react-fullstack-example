import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import EditableLabel from 'react-inline-editing';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pet_names: [],
      new_pet_name: '',
      new_pet_species_id: 1,
      new_pet_age: '',
      // update_pet_name: '',
      // update_pet_age: ''
    }
    this.viewPets = this.viewPets.bind(this);
    this.addPet = this.addPet.bind(this);
    this.updatePet = this.updatePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.petSpeciesHandler = this.petSpeciesHandler.bind(this);
    this.petAgeHandler = this.petAgeHandler.bind(this);
    this.updateNameHandlerFocusOut = this.updateNameHandlerFocusOut.bind(this);
    this.updatePetAgeHandlerFocusOut = this.updatePetAgeHandlerFocusOut.bind(this);
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
    axios.post('/pet/add', {
      pet_name: this.state.new_pet_name,
      species_id: this.state.new_pet_species_id,
      pet_age: this.state.new_pet_age
    }).then(res => {
      // this.setState({
      //   pet_names: res.data
      // })
    })
  }

  updatePet(id) {
    // console.log(this.state.pet_name, this.state.pet_age)
    // console.log(id)
    axios.put(`/pet/update/${id}`, { pet_name: this.state.pet_name, pet_age: this.state.pet_age }).then(res => {
      this.setState({
        pet_names: res.data
      })
    }).catch((e) => { console.log(e) });
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
    console.log(this.state.pet_name)
  }

  petSpeciesHandler(value) {
    this.setState({
      new_pet_species_id: value
    });
    console.log(this.state.pet_age)
  }

  petAgeHandler(value) {
    this.setState({
      new_pet_age: value
    });

  }

  updateNameHandlerFocusOut(value) {
    this.setState({
      pet_name: value
    });
    console.log(this.state.new_pet_name)
  }

  updatePetAgeHandlerFocusOut(value) {
    this.setState({
      pet_age: value
    });

  }

  render() {
    let pets = this.state.pet_names.map(el => {
      return (
        <div key={el.pet_id + 'newId'} className="pets">
          <ul className="petList">
            <EditableLabel
              text={el.pet_name}
              labelClassName="editField"
              labelFontSize="20px"
              onFocusOut={this.updateNameHandlerFocusOut} />
            <EditableLabel
              text={el.pet_age}
              labelClassName="editField"
              labelFontSize="20px"
              onFocusOut={this.updatePetAgeHandlerFocusOut}/>
            {/* <p>{el.pet_id}</p> */}
            {/* <p>{el.pet_name}</p> */}
            <p>Species: {el.species_name}</p>
            {/* <p>{el.pet_age}</p> */}
            {/* <button className="edit_button">Edit</button> */}
            <button onClick={()=>this.updatePet(el.pet_id)}>Save</button>
            <button className="delete_button" onClick={()=> this.deletePet(el.pet_id)}>Delete</button>
          </ul>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>My Pets:</h1>
        {pets}
        <div className="addFields">
          <input placeholder="Pet Name" onChange={(e)=>this.nameHandler(e.target.value)} />
          <input placeholder="Pet Species Id 1-8" onChange={(e) => this.petSpeciesHandler(e.target.value)}/>
          <input placeholder="Pet Age in Years" onChange={(e) => this.petAgeHandler(e.target.value)}/>
          <button onClick={() => this.addPet()}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
