import {useState} from 'react';
import './App.css';


const Person=(props)=>{
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>LastName:{props.lastName}</h1>
      <h1>Age:{props.age}</h1>
    </>
  )
}
const App = ()=> {
  const [counter,setCounter] =useState(0);
  const name="revanth";
  const isnothing=false;
  return (
    <div className="App">
      {/* <h1>Hello, {name}!</h1> */}
      {/* <h1>Hello, {isnothing ? name : 'someone'}!</h1> */}
      {/* {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) :(
        <h2>no name</h2>
      )

      } */}
      {/* <Person/> */}

      {/* 
          ->There some thing called props which is used to change data dynamically.
          ->If you use Person component for 3 times the app will show same data which was assigned to variables in person component.
          ->So, to overcome that we use props.
          ->Props is used to pass data from parent component to child component.
          ->Below is a small example of how to use props.
      */}
      {/* <Person name="John" lastName="Doe" age={30} />
      <Person name="Mary" lastName="Doe" age={26} />  */}

      {/* 
          ->state in react is a plain javascript
            object used by react to represent a 
            piece of information about the component's 
            current situation it is completely managed by the component 
      */}



      <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
