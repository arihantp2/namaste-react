import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Match Time Sharing Combos (18)");

  fireEvent.click(accordionHeader);

  expect(screen.getByText("Cart 0 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  const AddBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(AddBtns[0]);

  expect(screen.getByText("Cart 1 items")).toBeInTheDocument();

  fireEvent.click(AddBtns[1]);

  expect(screen.getByText("Cart 2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  expect(
    screen.getByText("Cart is Empty , Please Add Items to the cart")
  ).toBeInTheDocument();
});
