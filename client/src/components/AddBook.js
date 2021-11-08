import React,{useState} from 'react'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {getAuthorsQuery, addBooksMutation, getBooksQuery} from '../queries/queries';


function AddBook(props) {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const displayAuthors = () =>{
        
        var data = props.getAuthorsQuery;
        if(data.loading){
            return (
                <div>Loading authors..</div>
            );
        }
        else{
            return data.authors.map((author)=>{
                console.log(author.id);
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }

    }

    const submitForm = (e) =>{
        e.preventDefault();  
        props.addBooksMutation({
            variables:{
                name:name,
                genre:genre,
                authorid:authorId
            },
            refetchQueries:[{query:getBooksQuery}]
        });

    }

    return (
        <div className="add-book">
            <form onSubmit={(e)=>submitForm(e)}>
                <div className="field">
                    <label><b>Book Name</b></label>
                    <input onChange={(e)=>setName(e.target.value)} type="text"></input>
                </div>
                <div className="field">
                    <label><b>Genre</b></label>
                    <input onChange={(e)=>setGenre(e.target.value)} type="text"></input>
                </div>
                <div className="field">
                    <label><b>Author</b></label>
                    <select onChange={(e)=>setAuthorId(e.target.value)}>
                        <option>Select Author</option>
                        {displayAuthors()}
                    </select>
                </div>

                <button>+</button>
            </form>
        </div>
    )
}

export default compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBooksMutation,{name:"addBooksMutation"})
)(AddBook);
