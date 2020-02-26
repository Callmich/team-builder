import React, {useState} from 'react';
import './App.css';

const Form = props => {
  console.log("Props!", props)
  const [person, setPerson] = useState({
    name: "",
    email: "",
    job: ""
  })

  return (
    <form>
      <label htmlFor="name">Name  </label>
      <input
        id="name"
        type="text"
        name="name"
      />
      <br/>
      <label htmlFor="job">Job   </label>
      <input
        id="job"
        type="text"
        name="job"
      />
      <br/>
      <label htmlFor="email">Email </label>
      <input
        id="email"
        type="text"
        name="email"
      />


    </form>
  );
}

export default Form;