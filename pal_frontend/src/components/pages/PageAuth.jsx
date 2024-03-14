import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import ButtonClassic from "../UI/buttons/ButtonClassic";

const PageAuth = () => {
    const { keycloak } = useKeycloak()
    const navigate = useNavigate(); 
    function navToMain() {
        navigate("/");
    }
    const [answer, setAnswer] = useState([]);

    function testGetRequest() {
        var URL = "http://localhost:5450/api/anonymous";

        const params = {
            method: "GET",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            //mode: "no-cors" // same-origin, no-cors, cors
        }  
        getData(URL, params)
    } 
     
    function adminGetInfo() {
        var URL = "http://localhost:5450/api/admin";
        const params = {
            method: "GET",
            headers: { 
                accept: 'application/json',
                authorization: `Bearer ${keycloak.token}` 
            },
        }
        getData(URL, params)

    };

    function userGetInfo() {
        const URL = "http://localhost:5450/api/user";
        const params = {
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${keycloak.token}`
            },

        };
    
        getData(URL, params)
    }

    function getData(URL, params) {
            fetch(URL, params)
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }
    

    return (     
            !keycloak.authenticated ? 
                <div>
                    <h1>Тест страница (выглядит по-разному для зарегистрированных и не зарегистрированных пользователей)</h1>
                    <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
                    <h3 style={{color: "red"}}>User is NOT authenticated</h3>
                    <ButtonClassic onClick={() => keycloak.login()}>Login</ButtonClassic>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для всех
                    </ButtonClassic>
                </div>
                :
                <div>
                    <h1>Тест страница (выглядит по-разному для зарегистрированных и не зарегистрированных пользователей)</h1>
                    <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
                    <h3 style={{color: "green"}}>User is authenticated</h3>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для всех
                    </ButtonClassic>
                    <ButtonClassic onClick={userGetInfo}>
                        Получить данные с сервера для user
                    </ButtonClassic>
                    <ButtonClassic onClick={adminGetInfo}>
                        Получить данные с сервера для admin
                    </ButtonClassic>
                    <ButtonClassic onClick={() => keycloak.logout()}>Logout</ButtonClassic>
                    <textarea>{answer}</textarea>
                </div> 
    )      
};

export default PageAuth;