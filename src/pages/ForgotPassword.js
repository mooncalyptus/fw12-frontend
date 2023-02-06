import React from "react";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import http from "../helpers/http";

const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
})

function ForgotPassword() {
    const navigate = useNavigate()

    const cb = () => {
        navigate('/updatepassword')
    }

    const RequestEmail = async (value) => {
        try {
            const response = await http().post("/auth/forgotPassword", value)
            setTimeout(() => {
                cb()
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="grid grid-cols-3 font-mulish">
            <div className="w-[95%] hidden lg:block bg-fixed bg-[#DEF5E5] h-screen col-span-2 relative">
                <div className="flex justify-center items-center mx-8 my-12">
                    <img src={require('../assets/images/forgot-password.png')} alt="desc" className="w-[400px] h-[400px]" />
                </div>
            </div>
            <div>
                <div className="flex flex-col pt-20 pl-3 gap-3">
                    <div className="text-5xl font-semibold">Sign In</div>
                    <div className="text-lg font-normal">Fill your additional details</div>
                </div>
                <Formik
                    initialValues={{
                        email: ''
                    }}
                    validationSchema={ForgotSchema}
                    onSubmit={(value) => RequestEmail(value)}>
                    {({
                        errors, touched
                    }) => (
                        <Form className='flex flex-col items-center gap-8 mt-4'>
                            <div className='ml-5 w-full border-b-2 md:border-b-0'>
                                <label>Email Address :</label><br />
                                <Field type='email' name='email' placeholder='Enter your email adress' className='w-96 input md:input-bordered bg-transparent focus:outline-none mt-2 rounded-2xl' />
                                {errors.email && touched.email ? <div className='absolute text-red-500 text-sm'>{errors.email}</div> : null}
                            </div>
                            <div className='mt-3'>
                                <button type="submit" className="btn btn-outline btn-accent">Sign Up</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ForgotPassword