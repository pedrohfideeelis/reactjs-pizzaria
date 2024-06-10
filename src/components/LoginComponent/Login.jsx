import React from "react";

import "./styles.css";

export class Login extends React.Component{
    render(){
        return(
            <>
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <label htmlFor="password">Usuário:</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Senha:</label>
                        <div className="password-container">
                            <input type= "password" id="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            </>
        );
    }
}