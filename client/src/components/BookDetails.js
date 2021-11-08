import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {

    const displayBookDetails = () =>{
        var {book} = props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item=>{
                            return (
                                <li key={item.id}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div >
                    <h4>No book selected...</h4>
                </div>
            )
        }
    }

    return (
        <div className="book-details">
           {displayBookDetails()}
        </div>
    )
}

export default graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetails);
