import React, {useState} from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'



const MainApp = () => {

    const [user, setuser] = useState({});

    return (
        <UserContext.Provider value={ {
            user,
            setuser, 
        } }>
            <AppRouter />
        </UserContext.Provider>
    )
}

export default MainApp
