import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Register.scss';



export default function Register() {

    const navigate = useNavigate();

    const [passwordIconBool, setPasswordIconBool] = useState(true);
    const [repeatPasswordIconBool, setRepeatPasswordIconBool] = useState(true);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");

    // Change state with hook useState()

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    // Change boolean value with hook useState()

    const onChangePassBool = () => {
        setPasswordIconBool(!passwordIconBool);
    }

    const onChangeRepPassBool = () => {
        setRepeatPasswordIconBool(!repeatPasswordIconBool);
    }

    const valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    async function SendMessage(evt) {
        await evt.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password
        }

        if (
            username &&
            email.match(valid_email) &&
            password &&
            repPassword &&
            password === repPassword
        ) {

            await fetch("/register/user/data", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setUsername("");
            setEmail("");
            setPassword("");
            setRepPassword("");

            // if (isAdmin) {
            //     navigate("/admin");
            // } else {
            navigate("/login");
            // }

        }

    }


    return (

        <div className='register_main_div'>

            <div className='links_in_register'>
                <Link to="/"><button className='to_page_button'>To Main</button></Link>
                <Link to="/login"><button className='to_page_button'>To Login</button></Link>
            </div>

            <h1 className='register_title'>Register</h1>

            <div className='register_form_div'>

                <form className='register_form'>

                    <div className='input_div'>
                        <input type="text"
                            name='username'
                            placeholder='Username'
                            className='register_input'
                            value={username}
                            onChange={handleChange(setUsername)}
                        />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <input type="text"
                            name='email'
                            placeholder='E-mail'
                            className='register_input'
                            value={email}
                            onChange={handleChange(setEmail)}
                        />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <div className='pass_and_icon'>
                            <input
                                type={passwordIconBool ? "password" : "text"}
                                name='password'
                                placeholder='Password'
                                className='register_input_pass'
                                value={password}
                                onChange={handleChange(setPassword)}
                            />

                            <div onClick={onChangePassBool} className='eye_icon'>
                                {
                                    passwordIconBool ?
                                        <i class="fa fa-eye fa-2x" aria-hidden="true" ></i> :
                                        <i class="fa fa-eye-slash fa-2x" aria-hidden="true"></i>
                                }

                            </div>

                            <span className='focus-border'></span>

                        </div>



                    </div>

                    <div className='input_div'>
                        <div className='pass_and_icon'>
                            <input
                                type={repeatPasswordIconBool ? "password" : "text"}
                                placeholder='Repeat the password'
                                className='register_input_pass'
                                value={repPassword}
                                onChange={handleChange(setRepPassword)}
                            />

                            <div onClick={onChangeRepPassBool} className='eye_icon'>
                                {
                                    repeatPasswordIconBool ?
                                        <i class="fa fa-eye fa-2x" aria-hidden="true"></i> :
                                        <i class="fa fa-eye-slash fa-2x" aria-hidden="true"></i>
                                }

                            </div>
                            <span className='focus-border'></span>
                        </div>
                    </div>

                    <button className='register_form_button'
                        onClick={(evt) => { SendMessage(evt) }}
                    >Register</button>

                </form>

            </div>
        </div>
    )
}