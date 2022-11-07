import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {AuthorDeleteButton} from '../components/AuthorDeleteButton'

export const AuthorList = (props) => {
    const {authors, setAuthors, removeFromDom} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => {
            console.log(response)
            setAuthors(response.data)
        })
        .catch((err) => {console.log(err)})
    }, [])

    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col items-center w-96 rounded">
            <ul>
                {
                    authors?.map((author, index) => 
                        <li key={index} className="border rounded p-2 mb-2">
                            <p><Link to={`/authors/${author._id}`} className="font-bold hover:text-gray-300">{author.name}</Link></p>
                            <Link to={`/authors/edit/${author._id}`} className="text-sm bg-green-300 p-1 border border-black rounded hover:bg-green-500 hover:font-bold hover:text-red-900">Edit {author.name}</Link>
                            <AuthorDeleteButton authorId={author._id} successCallBack={()=>removeFromDom(author._id)}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
