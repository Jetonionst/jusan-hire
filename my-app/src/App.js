import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component { 
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  fileUploadHandler = () => {
    const fd = new FormData();
    console.log(this.state.selectedFile.name)
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:8081/api/v1/upload/image/', fd)
     .then(res => {
       console.log(res);
     })
    console.log(fd.getAll)
  }
  render() {
  return (
    <div className="App">
      <input type="file" onChange={this.fileSelectedHandler} name="file" enctype="multipart/form-data"/>
      <button onClick={this.fileUploadHandler}>Upload</button>
    </div>
  );
  }
}

export default App;
