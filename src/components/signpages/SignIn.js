import SignPageModel from "./SignPageModel";

export default function SignIn() {
    return(
        <SignPageModel>
            <form>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />
                <button>Entrar</button>
            </form>
            <p>Primeira vez? Cadastre-se!</p>
        </SignPageModel>
    )
}