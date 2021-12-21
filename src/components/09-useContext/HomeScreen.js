import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {

    const {user, setuser} = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h1> HomeScreen </h1>
            <hr></hr>

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}

export default HomeScreen
