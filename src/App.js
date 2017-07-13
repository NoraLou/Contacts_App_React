import React, { Component } from 'react';
import './App.css';



class ContactList extends React.Component {
   render() {

    const people = this.props.contacts
    return <ol>
      {people.map( person =>  
        <li key={person.name}>{person.name}</li>
      )}
      </ol>
   }
}

class App extends Component {
  render() {
    return (
      <div className = "App">
        <ContactList contacts={[
          { name: "Michael"}, 
          { name: "Debbie"},
          { name: "Harry"},  
        ]}/>
        <ContactList contacts={[
          { name: "Imani"}, 
          { name: "Lou"},
          { name: "Siobhan"}, 
        ]}/>
      </div>
    )
  }
}

export default App;
