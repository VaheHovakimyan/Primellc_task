import { Link } from 'react-router-dom';
import './Welcome.scss';



export default function Welcome() {



    return (
        <div className='welcome_main_div'>

            <h1 className='welcome_title'>Hello dear user welcome to our website</h1>
            <h3 className='welcome_to_pages_text'>You can register here or log in if you are already registered</h3>

            <div className='welcome_buttons_div'>
                <Link to={"/register"}><button className='to_page_button'>Register</button></Link>
                <Link to={"/login"}><button className='to_page_button'>Login</button></Link>
            </div>
        </div>
    )
}