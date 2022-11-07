import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

export const AuthorDetails = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            console.log(response.data)
            setAuthor(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-slate-400 border rounded p-2 mb-2 w-96">
            <h2 className="font-bold">Author Details</h2>
            <p>{author.name}</p>
            <p>This is where my details would be... If I <span className="italic">had</span> any!</p>
            <Link to={'/home'} className="font-bold hover:text-gray-300">Home</Link>
        </div>
    )
}