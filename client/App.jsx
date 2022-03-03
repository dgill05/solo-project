import React, { Component } from 'react';
import './styles.css'
class App extends Component {
	constructor(){
		super();
		this.state = {

		};
	}

	handleClick(){
    console.log("click");
		//fetch req sending back-end, save in db, 
		fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ test: 'hi' }),
		})
		.then(response => response.json())
		.then(data => {
  		console.log('Success:', data);
		})
		.catch((error) => {
  	console.error('Error:', error);
});
  }

	render(){

		console.log("hey",this.props);
		return( 
			<div>
				<h1>To Do Listss</h1>
				<input type="text" name="toDoEntry"/>
				<div className='flex-container'>
					<button onClick = {this.handleClick}>Submit</button>
				</div>
			</div>
			)
	}
};

export default App;