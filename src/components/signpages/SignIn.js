import PageModel from "./PageModel";

export default function SignIn() {
    return(
        <PageModel>
            <form>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />
                <button>Entrar</button>
            </form>
            <p>Primeira vez? Cadastre-se!</p>
        </PageModel>
    )
}