import {useState, useEffect} from 'react'

export const AuthorForm = (props) => {
    const {author, submit} = props
    const [name, setName] = useState("")

    useEffect(() => {
        setName(author ? author.name : "")
    },[author])

    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col items-center w-96 rounded">
            <h2 className="font-bold text-lg">Author</h2>
            <form onSubmit={e=>(submit(e,name))} className="mx-auto p-2 flex flex-col content-center justify-center w-80">
                <div className="flex items-center justify-between">
                    <label className="mr-2">Name:</label>
                    <input className="mb-1 px-2 border rounded" type="text" name="name" value={name || ""} onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <input className="self-center mt-3 w-32 bg-zinc-400 hover:bg-zinc-200 hover:text-black hover:cursor-pointer text-gray-50 px-2 border rounded" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
