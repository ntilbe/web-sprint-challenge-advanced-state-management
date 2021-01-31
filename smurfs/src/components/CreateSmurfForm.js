import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const initialState = {
  name: "",
  age: "",
  height: "",
};

export function SmurfForm(props) {
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    const newSmurf = {
      name: values.name,
      age: values.age,
      height: `${values.height}cm`,
    };
    props.addSmurf(newSmurf);
    setValues(initialState);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          min="0"
          name="age"
          id="age"
          value={values.age}
          onChange={handleChange}
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          min="0"
          name="height"
          id="height"
          value={values.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default connect(null, { addSmurf })(SmurfForm);