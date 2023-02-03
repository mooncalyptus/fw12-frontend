import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../helpers/http"
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../redux/reducers/auth'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
import FeatherIcon from 'feather-icons-react'
YupPasword(Yup)


const phoneRegExpID = /^(^08)(\d{8,10})$/

const SignUpSChema = Yup.object().shape({
    firstName: Yup.string().required('First Name required'),
    lastName: Yup.string().required('Last Name required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExpID, 'Invalid phone number')
        .required('Phone Number Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string()
        .password()
        .min(8, 'Min lenght 8')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1')
        .required('Password Required'),
})

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [eyeClicked, setEyeClicked] = React.useState(false)
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

    const register = async (value) => {
        try {
            const response = await http().post("/auth/register", value)
            const token = response?.data?.results?.token
            dispatch(loginAction({ token }))
            cb()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex">
            <div className="hidden md:block flex-[55%]">
                <img src={require('../assets/images/bg.png')} alt="desc" />
            </div>
            <div className="flex-[45%] py-10 md:py-0">
                <div className="flex flex-col pt-20 pl-20 gap-3">
                    <div className="text-5xl font-semibold">Sign Up</div>
                    <div className="text-lg font-normal">Fill your additional details</div>
                </div>
                {/* FORM */}
                <div className="flex justify-center pt-4">
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignUpSChema}
                        onSubmit={(value) => register(value)}>
                        {({ errors, touched }) => (
                            <Form className='flex flex-col items-center gap-8'>
                                <div className='w-[25rem] border-b-2 md:border-b-0'>
                                    <label>First Name</label><br />
                                    <Field type='firstName' name='firstName' placeholder='Enter your first name' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl' />
                                    {errors.firstName && touched.firstName ? <div className='absolute text-red-500 text-sm'>{errors.firstName}</div> : null}
                                </div>
                                <div className='w-[25rem] border-b-2 md:border-b-0'>
                                    <label>Last Name</label><br />
                                    <Field type='lastName' name='lastName' placeholder='Enter your last name' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl' />
                                    {errors.lastName && touched.lastName ? <div className='absolute text-red-500 text-sm'>{errors.lastName}</div> : null}
                                </div>
                                <div className='w-[25rem] border-b-2 md:border-b-0'>
                                    <label>Phone Number :</label><br />
                                    <Field type='phoneNumber' name='phoneNumber' placeholder='Enter your phone number' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl' />
                                    {errors.phoneNumber && touched.phoneNumber ? <div className='absolute text-red-500 text-sm'>{errors.phoneNumber}</div> : null}
                                </div>
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
            </div>
        </div>
    )
}

export default SignUp;