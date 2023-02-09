// import React from "react";
// import {useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import jwt_decode from 'jwt-decode'

// const withAuth = (Components) => {
//     return (props) => {
//         const navigate = useNavigate()
//         const token = useSelector((state) => state?.auth?.token.token)
//         console.log(token)
//             if(token === null) {
//               return (navigate("/signin"))
//             } else if(token){
//                 navigate("/home")
//             }
//         return <Components {...props} />
//     }
// }

// export default withAuth