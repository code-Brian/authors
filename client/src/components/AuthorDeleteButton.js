import axios from 'axios'

export const AuthorDeleteButton = (props) => {
    const {authorId, successCallBack} = props

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then( response => successCallBack())
        .catch(err => console.log(err))
    }

    return (
        <button className="ml-3 text-sm bg-red-300 p-1 border border-black rounded hover:bg-red-500 hover:font-bold hover:text-green-200" onClick={deleteAuthor}>Delete</button>
    )
}
