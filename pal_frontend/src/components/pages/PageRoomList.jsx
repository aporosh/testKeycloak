import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonClassic from "../UI/buttons/ButtonClassic";

const PageRoomList = () => {
    const navigate = useNavigate(); 
    function navToMain() {
        navigate("/");
    }
    return (
        <div>
            <h1>Список комнат (доступен всем)</h1>
            <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
        </div>
    );
};

export default PageRoomList;