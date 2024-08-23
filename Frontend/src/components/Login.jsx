import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                {/* The form element should wrap the inputs and button */}
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
                        <br/>
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input
                            type="password" // Changed type to "password" for better security
                            placeholder='Enter your password'
                            className='w-80 px-3 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                         <br/>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Sign Up </Link></p>
                    </div>
                    <div className="modal-action">
                        <button type="button" onClick={() => document.getElementById('my_modal_1').close()} className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}

export default Login;
