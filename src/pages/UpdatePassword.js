import React, { useState } from "react";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import http from "../helpers/http";
import FeatherIcon from 'feather-icons-react'

const UpdateSchema = Yup.object().shape({
    code: Yup.string().required('Reset Code required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .password()
        .min(8, 'Min length 8')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1')
        .required('Password required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
    )
})

const UpdatePassword = () => {
    const navigate = useNavigate()

    const [eyeClicked1, setEyeClicked1] = useState(false)
    const showConfirmPassword = () => {
        if (eyeClicked1 === false) {
            setEyeClicked1(true)
        } else {
            setEyeClicked1(false)
        }
    }

    const [eyeClicked, setEyeClicked] = useState(false)
    const showPassword = () => {
        if (eyeClicked === false) {
            setEyeClicked(true)
        } else {
            setEyeClicked(false)
        }
    }

    const SetPassword = async (value) => {
        try {
            const response = await http().post("/auth/resetPassword", value)
            navigate('/signin')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="grid grid-cols-3 font-mulish h-screen">
                <div className="hidden md:block lg:block bg-[#DEF5E5] col-span-2">
                    <div className="flex justify-center items-center mt-12">
                        <img src={require('../assets/images/reset-password.png')} alt="desc" className="w-[400px] h-[400px]" />
                    </div>
                </div>
                <div className="flex flex-col pt-20 pl-3 gap-3">
                    <div className="text-3xl font-semibold">Update Password</div>
                    <div className="text-lg font-normal">Fill your additional details</div>
                    <Formik
                        initialValues={{
                            code: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={UpdateSchema}
                        onSubmit={(value) => SetPassword(value)}>
                        {({
                            errors, touched
                        }) => (
                            <Form className='flex flex-col items-center gap-8 mt-4'>
                                <div className='ml-5 border-b-2 md:border-b-0'>
                                    <label>Code :</label><br />
                                    <Field type='code' name='code' placeholder='Enter your code' className='w-96 input md:input-bordered bg-transparent focus:outline-none mt-2 rounded-2xl' />
                                    {errors.code && touched.code ? <div className='absolute text-red-500 text-sm'>{errors.code}</div> : null}
                                </div>
                                <div className='ml-5 border-b-2 md:border-b-0'>
                                    <label>Email Address :</label><br />
                                    <Field type='email' name='email' placeholder='Enter your email adress' className='w-96 input md:input-bordered bg-transparent focus:outline-none mt-2 rounded-2xl' />
                                    {errors.email && touched.email ? <div className='absolute text-red-500 text-sm'>{errors.email}</div> : null}
                                </div>
                                <div className='relative border-b-2 md:border-b-0'>
                                    <label>Password :</label><br />
                                    <FeatherIcon onClick={showPassword} icon={eyeClicked ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 opacity-20 cursor-pointer' />
                                    <Field type={eyeClicked ? 'text' : 'password'} name='password' placeholder='Enter your password' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-96 rounded-2xl' />
                                    {errors.password && touched.password ? <div className='text-red-500 text-sm absolute'>{errors.password}</div> : null}
                                </div>
                                <div className='relative border-b-2 md:border-b-0'>
                                    <label>Confirm Password :</label><br />
                                    <FeatherIcon onClick={showConfirmPassword} icon={eyeClicked1 ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 opacity-20 cursor-pointer' />
                                    <Field type={eyeClicked1 ? 'text' : 'password'} name='confirmPassword' placeholder='Enter your Confirm Password' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-96 rounded-2xl' />
                                    {errors.confirmPassword && touched.confirmPassword ? <div className='text-red-500 text-sm absolute'>{errors.confirmPassword}</div> : null}
                                </div>
                                <div className='mt-3'>
                                    <button type="submit" className="btn btn-outline btn-accent">Reset Password</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword