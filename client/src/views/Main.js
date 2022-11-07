import {useState} from 'react'
import {Link} from 'react-router-dom'

import {AuthorList} from '../components/AuthorList'

export const Main = () => {
    const [authors, setAuthors] = useState([])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-slate-500 mt-3 p-3 flex flex-col items-center w-96 rounded">
                <h2 className="font-bold text-lg">Favorite Authors</h2>
                <Link className="mt-1 text-sm border border-black rounded p-1 text-green-100 hover:text-green-500 bg-blue-700" to="/authors/new">Add an Author</Link>
            </div>
            <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        </div>
    )
}
