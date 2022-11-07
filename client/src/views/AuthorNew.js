import {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import {AuthorForm} from '../components/AuthorForm'

export const AuthorNew = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const submitHandler = (e, authorData) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", {
            name: authorData
        })
        .then(() => {
            navigate("/home")
        })
        .catch(error => {
            const errorRes = error.response.data.errors
            for(const error of Object.keys(errorRes)){
                setErrors([...errors, errorRes[error].message])
            }
        })
    }

    return (
        <div className="bg-400-slate w-96 flex flex-col justify-center items-center">
            <h1>Add an Author</h1>
            <div>
                {
                    errors.map((item, index) => (
                        <p className="text-red-800 font-bold" key={index}>{item}</p>
                        ))
                }
            </div>
            <Link to={'/home'}>Home</Link>
            <AuthorForm submit={submitHandler}/>
        </div>
    )
}
