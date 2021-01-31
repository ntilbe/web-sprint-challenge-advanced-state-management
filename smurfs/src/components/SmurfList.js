import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .smurf {
    padding: 2rem;
    box-shadow: 0rem 0rem 0.125rem 0rem black;
    margin-top: 0.5rem;
  }
`;

function Smurf(props) {
  const { push } = useHistory();

  function handleClick(e) {
    e.preventDefault();
    push(`/${props.smurf.id}`);
  }

  return (
    <section className="smurf" onClick={handleClick}>
        <h2>{props.smurf.name}</h2>
        <p>age: {props.smurf.age}</p>
        <p>height: {props.smurf.height}</p>
    </section>
  );
}

function SmurfList(props) {
  return (
    <Container>
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf} key={smurf.id} />;
      })}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
  };
}

export default connect(mapStateToProps, {})(SmurfList);