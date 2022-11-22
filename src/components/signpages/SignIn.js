import axios from "axios";
import { useContext, useState } from "react";
import SignPageModel from "./SignPageModel";
import dotenv from "dotenv";
import { BACK_URI } from "../const";
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../TokenContext";
dotenv.config();

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [ ,setToken] = useContext(TokenContext);

    async function login(e) {
        e.preventDefault();
        try{
            const requisition = await axios.post(BACK_URI + "sign-in", {email, password});
            setToken(requisition.data);
            navigate("/main");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <SignPageModel>
            <form onSubmit={login}>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}><p>Primeira vez? Cadastre-se!</p></Link>
        </SignPageModel>
    )
}