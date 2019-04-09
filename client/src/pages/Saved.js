import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Row, Container } from "../components/Grid/Grid";
import API from "../utils/API";
import Bookcard from "../components/Bookcards/Bookcard"
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    console.log("loading books")
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          authors: [],
          description: "",
          image: "",
          link: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }



  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-md-8 offset-md-2">
            <Jumbotron className="banner">
              <h1>Your Bookshelf Awaits!</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <Bookcard
                books={this.state.books}
                buttonAction={this.deleteBook}
                buttonClass="btn mt-1 btn-beige"
                buttonText="Delete Book"
              />
            ) : (<div className="col-md-8 offset-md-2 text-center">
              <h3>No Results to Display</h3>
            </div>
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