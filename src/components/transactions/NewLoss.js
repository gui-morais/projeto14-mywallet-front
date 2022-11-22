import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACK_URI } from "../const";
import TokenContext from "../TokenContext";
import TransactionPageModel from "./TransactionPageModel";

export default function NewLoss() {
    const [token] = useContext(TokenContext);
    const [number, setNumber] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function newTransaction(e) {
        e.preventDefault();

        try {
            const requisition = await axios.post(BACK_URI + "transactions", {value: number, description, type: "Saída"}, {headers: {Authorization: "Bearer " + token.token}});
            navigate("/main");
        } catch(error) {
            alert(error.response.data);
        }
    }
    return(
        <TransactionPageModel>
            <h1>Nova saída</h1>
            <form onSubmit={newTransaction}>
                <input type="number" placeholder="Valor" value={number} onChange={(e) => setNumber(e.target.value)} required />
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
                <button type="submit">Salvar saída</button>
            </form>
        </TransactionPageModel>
    );
}