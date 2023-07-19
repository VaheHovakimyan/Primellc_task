import { useEffect, useState } from 'react';
import './Login.scss';



export default function Login() {

    const [text, setText] = useState("");

    useEffect(() => {

        fetch("/account/data")
            .then((res) => res.json())
            .then((data) => {
                setText(data);
            })

    }, [])

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
                        <input type="text" name='password' placeholder='Password' className='login_input' />
                        <span className='focus-border'></span>
                    </div>


                    <button className='login_form_button'>Login</button>

                </form>
            </div>
        </div>
    )
}