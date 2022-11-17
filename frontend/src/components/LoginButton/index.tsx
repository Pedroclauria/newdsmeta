import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import SalesCard from '../SalesCard';
import './styles.css';
import {User} from "../../models/user";
import { useState } from 'react';

type Props = {
    emailR: string;
}



function handleClick(emailReceived: string){
    const [user, setUser] = useState<User>();

    axios.get(`${BASE_URL}/login?email=${emailReceived}`)
                    .then(Response => {
                        setUser(Response.data.content);
                      
                    });
        

        if(user){              

            window.alert("SUCCESS");
            return <SalesCard />;
        } else {
            window.alert("Usuário inválido")
        }
    
}

function LoginButton({emailR }: Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(emailR)}>
                <img src={icon}  />
            </div>
        </>
    )


}

export default LoginButton;