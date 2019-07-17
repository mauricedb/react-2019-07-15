import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import PersonContainer from "./PersonContainer";

describe("The PersonContainer", () => {
  afterEach(cleanup);

  test("Can render my name", () => {
    const { getByText } = render(<PersonContainer />);

    expect(getByText("Maurice de Beijer")).not.toBeNull();
  });

  test("Can change my name", () => {
    const { getByText, getByLabelText } = render(<PersonContainer />);

    const firstNameElement = getByLabelText("Firstname:");
    fireEvent.change(firstNameElement, { target: { value: "Jack" } });

    expect(getByText("Jack de Beijer")).not.toBeNull();
  });

  test("Can save", () => {
    const onSave = jest.fn(() => {});
    const { getByText } = render(<PersonContainer onSave={onSave} />);

    fireEvent.click(getByText("Save"));

    expect(onSave).toHaveBeenCalled();
  });
});
