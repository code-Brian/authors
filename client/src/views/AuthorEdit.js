import {useEffect, useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'
import {AuthorForm} from '../components/AuthorForm'

export const AuthorEdit = () => {
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(oneAuthor => setAuthor(oneAuthor.data))
    }, [])

    const submitHandler = (e, authorData) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name: authorData
        })
        .then(() => {navigate("/home")})
        .catch(error => {
            const errorRes = error.response.data.errors
            for(const error of Object.keys(errorRes)){
                setErrors([...errors, errorRes[error].message])
            }
        })
    }
    return (
        <div className="bg-slate-500 w-1/2 mx-6 mt-3 p-5 rounded flex flex-col justify-center items-center">
            <div>
                {
                    errors.map((item, index) => (
                        <p className="text-red-800 font-bold" key={index}>{item}</p>
                        ))
                }
            </div>
            <AuthorForm submit={submitHandler} author={author}/>
            <Link className="hover:text-blue-300" to="/home">Back to Authors List</Link>
        </div>
    )
}
