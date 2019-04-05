import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Row, Container } from "../components/Grid/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    console.log("loading books")
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  render() {

    return (
      <Container fluid>
        <Row>
          <div className="col-md-12">
            <Jumbotron />
          </div>
          <div className="col-md-6 col-sm-12">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <ul>
                {this.state.books.map(book => (
                  <li key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </Row>
        <Row>
          <div className="col-md-2">
            <Link to="/">← Back to Search</Link>
          </div>
        </Row>
      </Container>
    )
  }

}


export default Books;