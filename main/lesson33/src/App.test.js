import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Todo Application Tests", () => {
  test("renders the TODO page title", () => {
    render(<App/>);
    const titleElement = screen.getByText(/TODO/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("allows entering both letters and numbers in the text input", async () => {
    render(<App/>);
    const inputElement = screen.getByPlaceholderText(/Add your task here/i);
    await userEvent.type(inputElement, "Test123");
    expect(inputElement).toHaveValue("Test123");
  });

  test("displays an error when trying to add an empty task", async () => {
    render(<App/>);
    const addButton = screen.getByText(/Add/i);
    userEvent.click(addButton);

    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent(/Task cannot be empty/i);
  });

  test("adds a new item to the list with the correct text", async () => {
    render(<App/>);
    const inputElement = screen.getByPlaceholderText(/Add your task here/i);
    const addButton = screen.getByText(/Add/i);
    await userEvent.type(inputElement, "New Task");
    userEvent.click(addButton);

    const listItem = await screen.findByText(/New Task/i);
    expect(listItem).toBeInTheDocument();
  });

  test("clears the input field after adding a task", async () => {
    render(<App/>);
    const inputElement = screen.getByPlaceholderText(/Add your task here/i);
    const addButton = screen.getByText(/Add/i);
    await userEvent.type(inputElement, "New Task");
    userEvent.click(addButton);
    await screen.findByText(/New Task/i);
    expect(inputElement).toHaveValue("");
  });

});
