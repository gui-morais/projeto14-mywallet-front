import TransactionPageModel from "./TransactionPageModel";

export default function NewGain() {
    return(
        <TransactionPageModel>
            <h1>Nova entrada</h1>
            <form>
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button>Salvar entrada</button>
            </form>
        </TransactionPageModel>
    );
}