import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BACK_URI } from "../const";
import TokenContext from "../TokenContext";
import TransactionPageModel from "./TransactionPageModel";

export default function EditLoss() {
    const { id } = useParams();
    const [number, setNumber] = useState(0);
    const [description, setDescription] = useState("");
    const [token] = useContext(TokenContext);
    const navigate = useNavigate();

    async function editTransaction(e) {
        e.preventDefault();

        try {
            const requisition = await axios.put(BACK_URI + "transactions", {_id: id, value: number, description, type: "Saída"}, {headers: {Authorization: "Bearer " + token.token}});
            navigate("/main");
        } catch(error) {
            alert(error.response.data);
        }
    }

    return(
        <TransactionPageModel>
            <h1>Editar saída</h1>
            <form onSubmit={editTransaction}>
                <input type="number" placeholder="Valor" value={number} onChange={e => setNumber(Number(e.target.value))} required />
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
                <button type="submit">Atualizar saída</button>
            </form>
        </TransactionPageModel>
    );
}