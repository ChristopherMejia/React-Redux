import React, {useContext} from 'react'
import { UserContext } from './UserContext'
const LoginScreen = () => {

    const {user, setuser} = useContext(UserContext)
    console.log(user);

    return (
        <div>
            <h1> LoginScreen </h1>
            <hr></hr>
            <button
                className='btn btn-primary'
                onClick={ ()=> setuser({
                    id: 23,
                    name: 'Natalia',
                })}
            > 
                Login
            </button>
        </div>
    )
}

export default LoginScreen
