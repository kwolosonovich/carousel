import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function () {
  const { getByTestId, queryByAltText } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // expect the first image to show, but not the second
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  // expect right arrow to show, but not the left arrow
  expect(rightArrow).not.toHaveClass("hidden");
  expect(leftArrow).toHaveClass("hidden");


  // move forward in the carousel
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();

  // expect right and left arrows to be shown
    expect(rightArrow).not.toHaveClass("hidden");
  expect(leftArrow).not.toHaveClass("hidden");


  // move forward in the carousel (second to third)
  fireEvent.click(rightArrow);

  // expect the third image to show, but not the second
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();

  // expect the right arrow to be hidden and left arror to be shown 
  expect(rightArrow).toHaveClass("hidden");
    expect(leftArrow).not.toHaveClass("hidden");
});


// snoke test
it("renders without crashing", () => {
  render( < Carousel / > );
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});