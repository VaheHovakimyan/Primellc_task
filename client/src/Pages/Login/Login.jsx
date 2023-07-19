import { useEffect, useState } from 'react';
import './Login.scss';



export default function Login() {

    const [loginHidden, setLoginHidden] = useState(false);

    const [text, setText] = useState("");

    const onChangeLoginHidden = () => {
        setLoginHidden(!loginHidden);
    }

    // useEffect(() => {

    //     fetch("/account/data")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setText(data);
    //         })

    // }, [])

    return (
        <div className='login_main_div'>

            <h1>{text}</h1>

            <h1 className='login_title'>Login</h1>

            <div className='login_form_div'>

                <form action="/login" className='login_form'>

                    <div className='input_div'>
                        <input type="text" name='username' placeholder='Username' className='login_input' />
                        <span className='focus-border'></span>
                    </div>


                    <div className='input_div'>
                        <div className='pass_and_icon'>
                            <input type={loginHidden ? "password" : "text"} name='password' placeholder='Password' className='login_input_pass' />

                            <div onClick={onChangeLoginHidden} className='eye_icon'>
                                {
                                    loginHidden ?
                                        <i class="fa fa-eye fa-2x" aria-hidden="true"></i> :
                                        <i class="fa fa-eye-slash fa-2x" aria-hidden="true"></i>
                                }

                            </div>
                            
                            <span className='focus-border'></span>
                        </div>
                    </div>


                    <button className='login_form_button'>Login</button>

                </form>
            </div>
        </div>
    )
}