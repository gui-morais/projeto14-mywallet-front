import TransactionPageModel from "./TransactionPageModel";

export default function EditLoss() {
    return(
        <TransactionPageModel>
            <h1>Editar saída</h1>
            <form>
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button>Atualizar saída</button>
            </form>
        </TransactionPageModel>
    );
}