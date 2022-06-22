import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = (image, i) => {
  setCurrentPhoto({ ...image, index: i });
  setIsModalOpen(!isModalOpen);
};

afterEach(cleanup);

describe("Modal component", () => {
  const currentPhoto = {
    name: "Park bench",
    category: "landscape",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    index: 1,
  };

  // baseline test
  it("renders", ({ currentPhoto }) => {
    render(<Modal />);
  });
  // snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
