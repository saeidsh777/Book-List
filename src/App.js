import React, { Component } from "react";
import Header from "./Components/Header/Header";
import AddForm from "./Components/BookList/AddForm";

export default class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Header></Header>
        <AddForm></AddForm>
      </div>
    );
  }
}
