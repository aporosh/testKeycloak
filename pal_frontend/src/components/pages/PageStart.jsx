import keycloak from '../../keycloak.js';
import { useNavigate } from 'react-router-dom';
import ButtonClassic from "../UI/buttons/ButtonClassic";

const PageStart = () => {
    const navigate = useNavigate(); 
    function navToRoomList() {
        navigate("/rooms");
    }
    function navToAuth() {
        navigate("/auth");
    }

    return (
       
            <div >
                <h1>Тестируем подключение к Keycloak</h1>            
                <ButtonClassic onClick={() => keycloak.login()}>Login</ButtonClassic>
                <ButtonClassic onClick={() => keycloak.logout()}>Logot</ButtonClassic>
                <ButtonClassic onClick={navToRoomList}>Список комнат</ButtonClassic>
                <ButtonClassic onClick={navToAuth}>Тест</ButtonClassic>                                       
            </div>
        
    )
};

export default PageStart;