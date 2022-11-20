import styled from "styled-components"

export default function TransactionPageModel(props) {
    return(
        <Container>
            {props.children}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
    h1 {
        font-size: 30px;
        color: white;
        font-weight: bold;
        margin-bottom: 40px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    input, button {
        height: 55px;
        margin: 5px 0px;
        font-size: 20px;
        border-radius: 5px;
        border: none;
    }
    input {
        padding-left: 10px;
    }
    input::placeholder {
        color: black;
    }
    input:focus, textarea:focus, select:focus{
    outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    button {
        background-color: #A328D6;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`;