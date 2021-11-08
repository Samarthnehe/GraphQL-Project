import React,{useState} from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

function BookList(props) {

    const [selected,setSelected] = useState(null);

    const displayBooks = () =>{
        
        var data = props.data;
        if(data.loading){
            return (
                <div>Loading books..</div>
            );
        }
        else{
            return data.books.map((book)=>{
                return(
                    <li className="list_of_books" key={book.id} onClick={()=>setSelected(book.id)}>{ book.name }</li>
                )
                   
            })
        }

    }
    return (
        <div className="books">
            <ul className="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    )
}

export default graphql(getBooksQuery)(BookList);
