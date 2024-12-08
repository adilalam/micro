import { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'

const signin = () => {
    const [email, setEmail] = useState('ad15@gmail.com')
    const [password, setPassword] = useState('0000')
    const [errors, setErrors] = useState({})

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/user/signin', {
                email, password
            });

            // console.log('response ', response.data);
            localStorage.setItem('user-data', JSON.stringify(response.data));
            Router.push('/')
        } catch (error) {
            setErrors(error.response?.data)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Sign In</h1>
                <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                        <h4>
                            {errors?.message}
                        </h4>
                    </div>
                )}
                <div>
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default signin;