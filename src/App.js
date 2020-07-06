import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  lengthTextHandler = (event) => {
    this.setState({ userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const  input =  this.state.userInput.split('');
    input.splice(index, 1);
    const updatedInput = input.join('');
    this.setState({userInput: updatedInput});
  };

  render() {
    const charList = this.state.userInput.split('').map( (char, index) => {
      return <Char 
        character={char} 
        key={index}
        clicked={()=> this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input 
          type="text" 
          onChange={this.lengthTextHandler}
          value={this.state.userInput}></input>
        <p>{this.state.userInput.length}</p>
        <Validation inputLenght={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
