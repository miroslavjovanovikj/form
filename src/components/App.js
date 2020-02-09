import React, {Component} from 'react';
import Form from './Form';
import '../css/App.css'
class App extends Component{
  render(){
    return(
     <div className="App">
          <Form
              name="Hello World"
           />
     </div>
    )
  }
}

export default App;
