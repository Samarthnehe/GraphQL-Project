import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`


const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
const addBooksMutation = gql`
    mutation($name:String!,$genre:String!,$authorid:ID!){
        addBooks(name:$name,genre:$genre,authorid:$authorid){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id:ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                books{
                    name
                    id
                }
            }
        }
    }
`
export {getAuthorsQuery, getBooksQuery, addBooksMutation, getBookQuery}
