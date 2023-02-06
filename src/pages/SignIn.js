import { React, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import http from "../helpers/http"
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
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
const SignIn = () => {
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
            <section>
                <div className="flex">
                    <div className="hidden md:block flex-[55%] h-screen">
                        <img src={require('../assets/images/bg.png')} alt="desc" />
                    </div>
                    <div className="flex-[45%] py-10 md:py-0">
                        <div className="flex flex-col pt-20 pl-20 gap-3">
                            <div className="text-5xl font-semibold">Sign In</div>
                            <div className="text-lg font-normal">Fill your additional details</div>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={(value) => login(value)}>
                                {({ errors, touched }) => (
                                    <Form className='flex flex-col items-center gap-8'>
                                        <div className='w-[25rem] border-b-2 md:border-b-0'>
                                            <label>Email Address :</label><br />
                                            <Field type='email' name='email' placeholder='Enter your email adress' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl' />
                                            {errors.email && touched.email ? <div className='absolute text-red-500 text-sm'>{errors.email}</div> : null}
                                        </div>
                                        <div className='w-[25rem] relative border-b-2 md:border-b-0'>
                                            <label>Password :</label><br />
                                            <FeatherIcon onClick={showPassword} icon={eyeClicked ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 opacity-20 cursor-pointer' />
                                            <Field type={eyeClicked ? 'text' : 'password'} name='password' placeholder='Enter your password' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl' />
                                            {errors.password && touched.password ? <div className='text-red-500 text-sm absolute'>{errors.password}</div> : null}
                                        </div>
                                        <div className='mt-3'>
                                            <button type="submit" className="btn btn-outline btn-accent">Sign Up</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                        <Link to="/signup"><div className="flex justify-center items-center">Don`t have account? <p className="underline">Sign Up here</p></div></Link>
                        <Link to="/forgotpassword"><div className="flex justify-center items-center">Forgot your password? <p className="underline">Forgot Password</p></div></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn