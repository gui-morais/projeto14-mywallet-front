import logo from "../../images/MyWallet.png"
import styled from "styled-components";

export default function PageModel(props) {
    return(
        <Container>
            <img src={logo} alt="Não foi possível carregar a imagem" />
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    img {
        margin: 20px 0px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 325px;
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
    button {
        background-color: #A328D6;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    p {
        font-size: 15px;
        color: white;
        cursor: pointer;
        margin: 30px 0px;
        font-weight: bold;
    }
`;