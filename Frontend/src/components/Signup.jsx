import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            {/* Login Modal */}
            <dialog id="my_modal_1" className="modal">
                <form className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            className='w-80 px-3 border rounded-md outline-none'
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
                            className='w-80 px-3 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Sign Up </Link></p>
                    </div>
                    <div className="modal-action">
                        <Link to='/' onClick={() => document.getElementById('my_modal_1').close()} className="btn">Close</Link>
                    </div>
                </form>
            </dialog>

            {/* Sign Up Form */}
            <div className='flex item-center justify-center pt-20'>
                <div id="signup_form" className="border-[2px] shadow-md p-5 rounded-md w-[600]">
                    <h3 className="font-bold text-lg">Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5"> {/* Added padding here */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your Full Name'
                                {...register("name", { required: true })}
                                className='w-80 px-3 border rounded-md outline-none'
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your Email'
                                {...register("email", { required: true })}
                                className='w-80 px-3 border rounded-md outline-none'
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                {...register("password", { required: true })}
                                className='w-80 px-3 border rounded-md outline-none'
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign Up</button>
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
