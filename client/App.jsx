import React, { Component } from 'react';
import './styles.css'
// import Form from './components/form'
// import List from './components/list'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			newTask: "",
			list:[]
		};
	}

	updateInput(key, value){
		this.setState({
			[key]: value
		})
	}

	addTask(){
		// create task with unique id
		const newTask = {
			id: 1 + Math.random(),
			value: this.state.newTask.slice()
		};

		//copy list of current items
		const list = [...this.state.list];

		//add new task to list
		list.push(newTask);

		//update state with new task and reset newTask
		this.setState({
			list,
			newTask: ""
		});
		console.log(this.state.list)
		
		// 	//fetch req sending back-end, save in db, 
		fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ sentTask: newTask.value }),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
		})
			.catch((error) => {
				console.error('Error:', error);
		});
	}

	deleteTask(id){
		const list = [...this.state.list];
		const updatedList = list.filter(item => item.id !== id);

		this.setState({list: updatedList})
		console.log(this.state)
	}
	render(){
		return ( 
			<div className='App'>
				<h1>To Do List</h1>
				<div className='flex-container'>
					<br/>
					<div>
					<input 
					type="text"
					className='task-input'
					placeholder='Enter your Task...' 
					value={this.state.newTask}
					onChange={e => this.updateInput("newTask", e.target.value)}
					/>
					<button onClick={() => this.addTask()} className="add-btn">
						Add
					</button>
					<div>
						{this.state.list.map(item => {
							return (
								<div key={item.id} className="task-div">
									{item.value}
									<button onClick={() => this.deleteTask(item.id)} className="delete-btn">
										Delete
									</button>
								</div>
								)
						})}
					</div>
					</div>
				</div>
			</div>
			)
	}
};

export default App;

	// handleClick(){
  //   console.log("click");
	// 	//fetch req sending back-end, save in db, 
	// 	fetch('/api', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ test: 'hi' }),
	// 	})
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			console.log('Success:', data);
	// 	})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 	});
  // }

	// render(){

	// 	return( 
	// 		<>
	// 			<h1>To Do List</h1>
	// 			<Form/>
	// 			<List/>
	// 		</>
	// 		)
	// }