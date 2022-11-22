import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACK_URI } from "../const";
import SignPageModel from "./SignPageModel";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    async function signUp(e) {
        e.preventDefault();
        if(confirmPassword === password) {
            try{
                const requisition = await axios.post(BACK_URI + "sign-up", {name, email, password});
                alert("Cadastro realizado com sucesso!");
                navigate("/");
            } catch(error) {
                alert(error.response.data);
            }
        } else {
            alert("Os campos Senha e Confirme sua senha devem ser iguais!");
        }
    }

    return(
        <SignPageModel>
            <form onSubmit={signUp}>
                <input type="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/" style={{ textDecoration: 'none' }}><p>Já tem uma conta? Entre agora!</p></Link>
        </SignPageModel>
    )
}