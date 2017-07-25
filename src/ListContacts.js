import React, { Component} from 'react'


// {person.name}
class ListContacts extends Component {
	render(){ 
		console.log("this.props" , this.props)
		return (
			<ol className='contact-list'>
				{this.props.contacts.map(person =>
				 ( 
				 	<li key={person.id} className="contact-list-item">
				 		<div className= "contact-avatar" style= {{
				 			backgroundImage :`url(${person.avatarURL})`
				 		}}></div>
				 		<div className="contact-details">
				 			<p>{ person.name }</p>
				 			<p>{ person.email }</p>
				 		</div>
				 	</li>
				 ))}
			</ol>
		)
	}
}


export default ListContacts