import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const Data={
    name: 'default',
    usn:'default',
    College:'default',
    Age:0,
    Gender:'default',

  }
  const [input,setInput]=useState(Data);

  
const handleNameChange = event =>{
  const newObj={
    name: event.target.value,
    usn: input.usn,
    College: input.College,
    Age: input.Age,
    Gender: input.Gender,
  }
  setInput(newObj)

}
const handleUsnChange = event =>{
  const newObj={
    name: input.name,
    usn: event.target.value,
    College: input.College,
    Age: input.Age,
    Gender: input.Gender,
  }
  setInput(newObj)

}
const handleCollegeChange = event =>{
  const newObj={...input,
    
    name: event.target.value,
  }
  setInput(newObj)

}

  // function handleNameChange(event) {
  //   input=setInput(event.target.value);
  //   Data.name=input;
  // }
  // function handleUsnChange(event) {
  //   input=setInput(event.target.value);
  //   Data.usn=input;
  // }
  // function handleCollegeChange(event) {
  //   input=setInput(event.target.value);
  //   Data.College=input;
  // }
  // function handleAgeChange(event) {
  //   input=setInput(event.target.value);
  //   Data.Age=input;
  // }
  // function handleGenderChange(event) {
  //   input=setInput(event.target.value);
  //   Data.Gender=input;
  // }
  // function handleSubmit(){
    

  // }
  
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form>
        <input name="Name" onChange={handleNameChange}/> 
        {/* <input name="USN"onChange={handleUsnChange}/>
        <input name="College"onChange={handleCollegeChange}/>
        <input name="Age"onChange={handleAgeChange}/>
        <input name="Gender"onChange={handleGenderChange}/>
        <button onClick={handleSubmit}>Submit</button> */}
        <button type='submit' placeholder='Show name' onClick={}></button>
        </form>
        {/* <p>{Data}</p> */}
       <p></p>
    </div>
  );
}

export default App;
