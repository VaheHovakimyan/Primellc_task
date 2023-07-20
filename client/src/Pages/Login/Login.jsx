import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.scss';



export default function Login() {

    const navigate = useNavigate();

    const [loginHidden, setLoginHidden] = useState(true);

    const [navBool, setNavBool] = useState();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeLoginHidden = () => {
        setLoginHidden(!loginHidden);
    }

    // Change state with hook useState()

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    // Send message function

    async function SendMessage(evt) {
        await evt.preventDefault();

        const data = {
            username: username,
            password: password
        }

        if (username && password) {

            await fetch("/login/user/data", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })


            await fetch("/login/user/navigate/data")
                .then((stream) => stream.json())
                .then((data) => {
                    console.log("data", data);
                    setNavBool(data);
                })

            console.log(navBool);

            // navigate("/account");

            setUsername("");
            setPassword("");


        }

    }


    // useEffect(() => {
    //     fetch("/login/user/navigate/data")
    //         .then((stream) => stream.json())
    //         .then((data) => {
    //             console.log("data", data);
    //             setNavBool(data);
    //         })

    //     console.log(navBool);

    //     // navigate("/account");
    // }, []);





    return (
        <div className='login_main_div'>

            <h1 className='login_title'>Login</h1>

            <div className='login_form_div'>

                <form className='login_form'>

                    <div className='input_div'>
                        <input type="text"
                            name='username'
                            placeholder='Username'
                            className='login_input'
                            value={username}
                            onChange={handleChange(setUsername)}
                        />
                        <span className='focus-border'></span>
                    </div>


                    <div className='input_div'>
                        <div className='pass_and_icon'>
                            <input type={loginHidden ? "password" : "text"}
                                name='password'
                                placeholder='Password'
                                className='login_input_pass'
                                value={password}
                                onChange={handleChange(setPassword)}
                            />

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


                    <button className='login_form_button'
                        onClick={(evt) => { SendMessage(evt) }}
                    >Login</button>

                </form>
            </div>
        </div>
    )
}