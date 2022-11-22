import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BACK_URI } from "./const";
import TokenContext from "./TokenContext";

export default function MainPage() {
    const [token] = useContext(TokenContext);
    const [transactions, setTransactions] = useState([]);
    const renderWhiteBoard = [];
    if(transactions.length===0) {
            renderWhiteBoard.push(
                <EmptyWhiteBoard><div><p>Não há registros de</p><p>entrada ou saída</p></div></EmptyWhiteBoard>
            )
    } else {
        let total = 0;
        transactions.map((e) => {
            if(e.type==="Entrada") {
                total+=e.value;
            } else {
                total-=e.value;
            }
        });
        const transaction = [];
        transactions.map((e) => transaction.push(
            <Change>
                <div>
                    <Date>{e.date.day.toLocaleString({minimumIntegerDigits: 2})}/{e.date.month.toLocaleString({minimumIntegerDigits: 2})}</Date>
                    <Link to={e.type==="Entrada" ? "/editGain/" + e._id : "/editLoss/" + e._id} style={{textDecoration: 'none'}}><Description>{e.description}</Description></Link>
                </div>
                <div>
                    <Link to={e.type==="Entrada" ? "/editGain/" + e._id : "/editLoss/" + e._id} style={{textDecoration: 'none'}}><Value type={e.type}>{e.value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Value></Link>
                    <Remove>X</Remove>
                </div>
            </Change>
        ));
        renderWhiteBoard.push(
        <WhiteBoard>
            <div>
                {transaction}
            </div>
            <Footer>
                <Balance>SALDO</Balance>
                <Total type={total}>{total>=0 ? total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) : (-1*total).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Total>
            </Footer>
        </WhiteBoard>);
    }

    async function getTransactions() {
        try {
            const requisition = await axios.get(BACK_URI + "transactions", {headers: {Authorization: "Bearer " + token.token}});
            setTransactions(requisition.data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(getTransactions,[]);

    return(
        <Container>
            <TopMenu>
                <h1>Olá, {token.name}</h1>
                <Link to={"/"}><ion-icon name="exit-outline"></ion-icon></Link>
            </TopMenu>
            {renderWhiteBoard}
            <Buttons>
            
            <Button>
            <Link to="/newGain" style={{textDecoration: 'none', width: '100%', height: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
            </Link>
            </Button>
            <EmptyDiv />
            <Button>
            <Link to="/newLoss" style={{textDecoration: 'none', width: '100%', height: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
            </Link>
            </Button>
            </Buttons>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 25px;
    box-sizing: border-box;
`;

const TopMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h1 {
        font-size: 25px;
        color: white;
        font-weight: bold;
    }
    ion-icon {
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`;

const WhiteBoard = styled.div`
    width: 100%;
    height: calc(100% - 200px);
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const EmptyWhiteBoard = styled.div`
    width: 100%;
    height: calc(100% - 200px);
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #868686;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
`;

const Buttons = styled.div`
    width: 100%;
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
`

const EmptyDiv = styled.div`
    width: 15px;
    height: 145px;
`;

const Button = styled.div`
    width: 50%;
    height: 115px;
    padding: 15px;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    p {
        font-size: 20px;
        color: white;
        font-weight: bold;
    }
    ion-icon {
        font-size: 30px;
        color: white;
    }
`;

const Change = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 0px;
    div {
        display: flex;
    }
`;

const Date = styled.p`
    color: #C6C6C6;
    margin-right: 10px;
`;

const Description = styled.p`
    color: black;
`;

const Value = styled.p`
    color: ${props => {
        if(props.type==="Entrada") {
            return "#03AC00";
        } else {
            return "#C70000";
        }
    }}
`;

const Remove = styled.p`
    color: #C6C6C6;
    margin-left: 10px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`;

const Balance = styled.p`
    color: black;
    font-weight: bolder;
`;

const Total = styled.p`
    color: ${props => {
        if(props.type>=0) {
            return "#03AC00";
        } else {
            return "#C70000";
        }
    }}
`;