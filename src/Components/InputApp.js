import React, { Component } from 'react';

class InputApp extends Component {

        render() {
          return (
            <div className="InputApp">
              <h3>Input:</h3>
            <textarea name="textarea" rows="10" cols="50" value={this.props.input} onChange={this.props.handleInput}>Write something here</textarea>
            </div>
          );
        }   
}

export default InputApp;
