import { screen, render, fireEvent } from "@testing-library/react";
import { SmurfForm } from "./CreateSmurfForm";
import React from "react";

it("Displays the form and can write stuff", () => {
  render(<SmurfForm />);
  const name = screen.getByLabelText(/name/i);
  const age = screen.getByLabelText(/age/i);
  const height = screen.getByLabelText(/height/i);
  fireEvent.change(name, { target: { value: "test" } });
  fireEvent.change(age, { target: { value: "12" } });
  fireEvent.change(height, { target: { value: "7" } });
});