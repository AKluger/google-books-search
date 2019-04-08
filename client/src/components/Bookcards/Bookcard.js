import React from 'react';
import './BookCard.css';

// maps books for both search and saved pages, type of button decided in ternary on book having mongo _id or google id
function BookCard(props) {

    return (
        <div className="col-lg-12">
            {props.books.map(book => (
                <div className="card mt-4"
                    key={
                        book._id
                            ? book._id
                            : book.googleBookId
                    }>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <div>
                            <img src={book.image}
                                className="align-self-center mr-3" alt="book cover" />
                            <div>
                                <h6 className="mt-2">{book.authors.join(",")}</h6>
                                <p className="mb-0">{book.description}</p>
                            </div>
                        </div>
                        <a className="btn btn-beige mr-1 mt-2" href={book.link} target="_blank"
                            rel="noopener noreferrer">View Book</a>
                        <button className={props.buttonClass}
                            onClick={props.buttonAction}
                            id={
                                book._id
                                    ? book._id
                                    : book.googleBookId
                            }
                        >
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookCard;