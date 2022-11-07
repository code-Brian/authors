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
            const errorResponse = error.response.data.errors
            const errorArray = []
            for (const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray)
        })
    }
    return (
        <div className="bg-slate-500 w-1/2 mx-6 mt-3 p-5 rounded flex flex-col justify-center items-center">
            <div>
                {errors.map((err,index) => <p key={index}>{err}</p>)}
            </div>
            <AuthorForm submit={submitHandler} author={author}/>
            <Link className="hover:text-blue-300" to="/home">Back to Authors List</Link>
        </div>
    )
}
