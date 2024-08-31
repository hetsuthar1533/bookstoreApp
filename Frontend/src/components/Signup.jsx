import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // useNavigate hook for programmatic navigation

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Successful');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                navigate("/"); // navigate to home page
            }
        } catch (err) {
            if (err.response) {
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    return (
        <>
            {/* Login Modal */}
            <dialog id="my_modal_1" className="modal">
                <form className="modal-box max-w-sm mx-4 sm:mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            className='w-full px-3 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-full px-3 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='flex flex-col items-center mt-4 space-y-2'>
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-2 w-full hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Sign Up </Link></p>
                    </div>
                    <div className="modal-action">
                        <Link to='/' onClick={() => document.getElementById('my_modal_1').close()} className="btn">Close</Link>
                    </div>
                </form>
            </dialog>

            {/* Sign Up Form */}
            <div className='flex item-center justify-center pt-12 px-4'>
                <div id="signup_form" className="border-[2px] shadow-md p-5 rounded-md w-full max-w-md"> {/* Adjusted width for mobile */}
                    <h3 className="font-bold text-lg text-center">Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className='space-y-2'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your Full Name'
                                {...register("fullname", { required: true })}
                                className='w-full px-3 border rounded-md outline-none'
                            />
                            {errors.fullname && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your Email'
                                {...register("email", { required: true })}
                                className='w-full px-3 border rounded-md outline-none'
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                {...register("password", { required: true })}
                                className='w-full px-3 border rounded-md outline-none'
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col items-center mt-4 space-y-2'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-4 py-2 w-full hover:bg-pink-700 duration-200'>Sign Up</button>
                            <p>Already have an account?{" "}
                                <button
                                    type="button"
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById('my_modal_1').showModal()}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Login Component (Already separated) */}
            <Login />
        </>
    );
}

export default Signup;
