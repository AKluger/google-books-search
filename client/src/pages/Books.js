import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Row, Container } from "../components/Grid/Grid";
import { Input, FormBtn} from "../components/BookSearch"
import API from "../utils/API";
// import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    search: "Learn Java"
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };



  render() {

    const { updateSearch } = this.props;
    return (
      <Container fluid>
        <Row>
          <div className="col-md-8 offset-md-2">
            <Jumbotron />
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search Here"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </div>
          <div className="md-8 offset-md-2 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
          </div>
        </Row>
      </Container>
    )
  }

}


export default Books;