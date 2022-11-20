import SignPageModel from "./SignPageModel";


export default function SignUp() {
    return(
        <SignPageModel>
            <form>
                <input type="name" placeholder="Nome" required />
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirme a senha" required />
                <button>Cadastrar</button>
            </form>
            <p>Já tem uma conta? Entre agora!</p>
        </SignPageModel>
    )
}