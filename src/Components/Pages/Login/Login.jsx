import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef()
    const [disabled, setDisabled]=useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleForm = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

    const handleCaptcha = () =>{
        const value = captchaRef.current.value;
        if(validateCaptcha(value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" placeholder="Enter The Captcha" name="captcha" className="input input-bordered" required />
                            <button onClick={handleCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;