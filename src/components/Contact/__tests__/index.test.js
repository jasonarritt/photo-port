import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  // baseline test
  it("renders", () => {
    render(<ContactForm />);
  });
  // snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("ContactForm")).toHaveTextContent("Contact me");
    expect(getByTestId("Submit")).toHaveTextContent("Submit");
  });
});
