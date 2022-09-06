import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Spinner from '../components/Spinner.js'
import UserList from '../components/UserList.js'

const Users = () =>{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                setUsers(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Users</h1>
            { loading ? <Spinner /> : <UserList users={users} /> }
        </>
    )
}

export default Users