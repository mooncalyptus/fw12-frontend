import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import http from '../helpers/http'
import {Formik, Form, Field} from 'formik'
import {useDispatch} from 'react-redux'
import { login as loginAction } from '../redux/reducers/auth'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
import FeatherIcon from 'feather-icons-react'
import jwt_decode from "jwt-decode";
YupPasword(Yup)

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .password()
        .min(8, 'Min lenght 8')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1')
        .required('Password required')
})

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [eyeClicked, setEyeClicked] = useState(false)
    const showPassword = () => {
        if (eyeClicked === false) {
            setEyeClicked(true)
        } else {
            setEyeClicked(false)
        }
    }

    const cb = () => {
        navigate('/home')
    }

    const login = async (value) => {
        try {
            const response = await http().post('/auth/login', value)
            const token = response?.data?.results?.token
            const decode = jwt_decode(token)
            dispatch(loginAction({ token }))
            cb()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div>Ini adalah login page</div>
        </>
    )
}

export default LoginPage