import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function WithAuth({ children }) {
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token)
    // console.log(token)
    React.useEffect(() => {
        if (!token) {
            navigate("/signin")
        }
    }, [token])
    return children
    // console.log(children)
}

export default WithAuth