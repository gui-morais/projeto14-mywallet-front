import TransactionPageModel from "./TransactionPageModel";

export default function NewLoss() {
    return(
        <TransactionPageModel>
            <h1>Nova saída</h1>
            <form>
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button>Salvar saída</button>
            </form>
        </TransactionPageModel>
    );
}