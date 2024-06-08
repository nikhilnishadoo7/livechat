import { useState } from "react"

export default function(){
    const[username,setusername] = useState('');
    const[password,setpassword]= useState('');
    return (
        <div className="bg-blue-40 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input 
                value={username} onChange={ev => setusername(ev.target.value)} 
                type="text" placeholder="name" className="block w-full rounded-sm m-2 p-2" />
                <input 
                value={password} onChange={ev => setpassword(ev.target.value)}
                type="password" placeholder="password" className="block w-full rounded-sm m-2 p-2" />
                <button className="w-full bg-blue-500 block text-white rounded-sm p-2 m-2"> Register</button>
            </form>
        </div>
    )
}