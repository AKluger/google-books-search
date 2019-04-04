import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
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
    searchField: ""
  };

  componentDidMount() {
    // this.loadBooks();
    API.search(this.state.searchField)
    .then(res => this.setState({ books: res }))
    .catch(err => console.log(err));
  }

//   handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    // event.preventDefault();

//   };


render(){

    return(

        <div>yo</div>
    )
}

}


export default Books;