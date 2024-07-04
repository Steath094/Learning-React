import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams()
    return (
        <div className='text-center text-3xl bg-gray-700 text-white py-3'>User: {userid}</div>
    )
}

export default User
