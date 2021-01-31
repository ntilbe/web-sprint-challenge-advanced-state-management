import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSmurf } from "../actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    filter: drop-shadow(0rem 0rem .25rem black);
  }
`;

function Profile(props) {
  const { id } = useParams();
  useEffect(() => {
    if (id !== props.smurfId) {
      props.selectSmurf(parseInt(id));
    }
  }, []);
  return (
    <Container>
      {props.smurf ? (
        <>
          <img
            alt="smurf pic"
            src="https://www.how-to-draw-cartoons-online.com/image-files/smurf-picture-12.gif"
          />
          <h1>{props.smurf.name}</h1>
          <p>age: {props.smurf.age}</p>
          <p>height: {props.smurf.height}</p>
        </>
      ) : (
        <h1>Smurf not found!</h1>
      )}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    smurf: state.smurfs.find((smurf) => {
      return smurf.id === state.selectedSmurfId;
    }),
    smurfId: state.selectedSmurfId,
  };
}

export default connect(mapStateToProps, { selectSmurf })(Profile);