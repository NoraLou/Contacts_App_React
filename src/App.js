import React, { Component } from 'react';
import ListContacts from './ListContacts.js'

class App extends Component {

  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContacts = (contact) => {
      this.setState((state) => ({
        contacts : this.state.contacts.filter((obj) => obj.id !== contact)
      }))
    }


  render() {
    return (
      <div>
        <ListContacts onDeleteContact = {this.removeContacts} contacts = {this.state.contacts}/>
      </div>
    )
  }
}

export default App;
