import TransactionPageModel from "./TransactionPageModel";

export default function EditGain() {
    return(
        <TransactionPageModel>
            <h1>Editar entrada</h1>
            <form>
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button>Atualizar entrada</button>
            </form>
        </TransactionPageModel>
    );
}