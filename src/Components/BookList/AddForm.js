import React, { Component } from "react";
import Book from "./Book";
import { LuSubtitles } from "react-icons/lu";
import { PiPencilLineLight } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";

export default class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
  }

  addBook(e) {
    e.preventDefault();
    let newBook = {
      id: this.state.books.length + 1,
      title: this.state.title,
      author: this.state.author,
      year: this.state.year,
    };
    this.setState({
      books: [...this.state.books, newBook],
    });

    this.setState({ title: "", author: "", year: "" });
  }
  getTitlteValue(e) {
    this.setState({ title: e.target.value });
  }
  getAuthorValue(e) {
    this.setState({ author: e.target.value });
  }
  getYearValue(e) {
    this.setState({ year: e.target.value });
  }

  render() {
    return (
      <>
        <form id="book-form" onSubmit={(e) => this.addBook(e)}>
          <div className="form-group">
            <label htmlFor="title">
              <LuSubtitles />
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={(e) => {
                this.getTitlteValue(e);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">
              <PiPencilLineLight />
              Author
            </label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={(e) => {
                this.getAuthorValue(e);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">
              <AiOutlineCalendar />
              Year
            </label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={(e) => {
                this.getYearValue(e);
              }}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books &&
              this.state.books.map((book) => <Book {...book} />)}
          </tbody>
        </table>
      </>
    );
  }
}
