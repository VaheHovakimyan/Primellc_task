import { useEffect, useState } from 'react';
import './Account.scss';



export default function Account() {

    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
        fetch("/account/elems/data")
            .then((res) => res.json())
            .then((data) => {
                setAccountData(data);
            })
    }, []);


    return (
        <div className='account_main_div'>

            <h1 className='account_welcome_title'>Hello, dear user NamNamNam</h1>

            <div className='user_account_elements'>
                {accountData.map((item) => {
                    return (
                        <div key={item._id} className='account_elem'>
                            <h3 className='account_elem_title'>{item.title}</h3>
                            <p className='account_elem_text'>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}