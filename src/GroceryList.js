import { Component } from 'react';


export class GroceryList extends Component {
	state = {
		userInput: '',
		groseryList: []


	}

	onChangeEvent(e) {
		this.setState({userInput: e})
		
	}
	addItem(input) {
		let listArray = this.state.groseryList;
		listArray.push(input);
		this.setState({ GroceryList: listArray, userInput: '' })
		
	}

	render() {
		return(
			<div>

				<div>
					<input type='text'
					placeholder='What do you want to buy?'
					onChange={(e) => {this.onChangeEvent(e.target.value)}}
					value={this.state.userInput} />
				</div>
				<div>
					<button onClick={() => this.addItem(this.state.userInput)}>Add</button>
				</div>
				<ul>
					{this.state.groseryList.map((item, index) => (
						<li key={index}>{item}</li>
					))}
					
				</ul>

			</div>


		)

	}
}