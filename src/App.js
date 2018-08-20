import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import InputApp from './Components/InputApp';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: "",
    }
  }
  
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }


  
  render() {
    return (
      <div className="App">
        <div class="Header"> 
          <div className="LeftHalf">
            <h1>HTML Markdown</h1>
          </div>
          <div className="RightHalf">
            <h1>Using React</h1>
          </div>
        </div>
        <InputApp input={this.state.inputValue} handleInput={this.handleChange}/>
        <ReactMarkdown className="Output" source={this.state.inputValue} />
      </div>
    );
  }
}

export default App;