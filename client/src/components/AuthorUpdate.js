import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {AuthorForm} from '../components/AuthorForm'
import {AuthorDeleteButton} from '../components/AuthorDeleteButton'

export const AuthorUpdate = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            setAuthor(response.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = authorParam => {
        axios.put(`http://localhost:8000/authors/${id}`, authorParam)
        .then(response => {
            console.log(response)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col justify-center items-center w-96 rounded">
            {
                loaded && (
                    <>
                        <AuthorForm onSubmitProp={updateAuthor} initialName={author.name}/>
                        <AuthorDeleteButton authorId={author._id} successCallBack={()=>navigate('/home')}/>
                    </>
                )
            }
            <Link to={'/home'} className="font-bold hover:text-gray-300">Home</Link>
        </div>
    )
}
