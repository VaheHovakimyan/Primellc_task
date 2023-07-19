import { useState } from 'react';
import icon from '../../Images/close.png';
// import icon from '../../logo.svg';
import './Register.scss';



export default function Register() {

    const [passwordIconBool, setPasswordIconBool] = useState(false);
    const [repeatPasswordIconBool, setRepeatPasswordIconBool] = useState(false);

    const [username, setUsername] = useState("");

    const onChangePassBool = () => {
        setPasswordIconBool(!passwordIconBool);
    }

    const onChangeRepPassBool = () => {
        setRepeatPasswordIconBool(!repeatPasswordIconBool);
    }

    

    return (

        <div className='register_main_div'>

            <h1 className='register_title'>Register</h1>

            <div className='register_form_div'>

                <form action="/register" className='register_form'>

                    <div className='input_div'>
                        <input type="text" name='username' placeholder='Username' className='register_input' />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <input type="text" name='email' placeholder='E-mail' className='register_input' />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <div className='pass_and_icon'>
                            <input type={passwordIconBool ? "password" : "text"} name='password' placeholder='Password' className='register_input_pass' />

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
                            <input type={repeatPasswordIconBool ? "password" : "text"} placeholder='Repeat the password' className='register_input_pass' />

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

                    <button className='register_form_button'>Register</button>

                </form>

            </div>
        </div>
    )
}