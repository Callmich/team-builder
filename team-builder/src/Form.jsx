import React, {useState} from 'react';
import './App.css';

const Form = props => {
  console.log("Props!", props)
  const [person, setPerson] = useState({
    name: "",
    email: "",
    job: ""
  })

  const handleChanges = e => {
    setPerson({ ...person, [e.target.name]: e.target.value});
    console.log(person);
  }

  const submitForm = e => {
    e.preventDefault();
    props.addTeamMember(person);
    setPerson({name: "", job: "", email: ""})
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name  </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={person.name}
      />
      <br/>
      <label htmlFor="job">Job   </label>
      <input
        id="job"
        type="text"
        name="job"
        onChange={handleChanges}
        value={person.job}
      />
      <br/>
      <label htmlFor="email">Email </label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={person.email}
      />
      <br/>
      <button type="submit">Add Member</button>
    </form>
  );
}

export default Form;