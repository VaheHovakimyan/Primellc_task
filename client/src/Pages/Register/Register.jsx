import './Register.scss';



export default function Register() {

    

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
                        <input type="text" name='password' placeholder='Password' className='register_input' />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <input type="text" placeholder='Repeat the password' className='register_input' />
                        <span className='focus-border'></span>
                    </div>

                    <button className='register_form_button'>Register</button>

                </form>

            </div>
        </div>
    )
}