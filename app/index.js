import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			date:''
		}
	}
	onKeyDown =(e) =>{
		let date = this.state[e.target.name]
		let data =e.target.value
		if(e.keyCode ==8){
			data =data.split('')
			data.pop()
			data = data.join('')
			this.setState({[e.target.name]:data})
		}
	} 
	handleChange = (e)=>{ 
		let date = this.state[e.target.name];
		let name = e.target.name
		console.log(name)
		let array =[')','!','@','#','$','%','^','&','*','(']
		let data =e.target.value
		
			data = data.split('').pop()
			if(!isNaN(data)){
				this.setState((prevState) => ({
					[e.target.name]: prevState[e.target.name]+array[data]
				}))
			}else{
				this.setState((prevState)=>({[e.target.name]:prevState[e.target.name]}))
			}	
		
	}
	render(){
		return(<div>
			Hello World guru ji
			<input name="date" type="text" onChange={this.handleChange} value={this.state.date} onKeyDown={this.onKeyDown}/>
			</div>);
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));
