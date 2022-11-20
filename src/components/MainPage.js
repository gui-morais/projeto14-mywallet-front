import styled from "styled-components";

export default function MainPage() {
    return(
        <Container>
            <TopMenu>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </TopMenu>
            <WhiteBoard>
                
            </WhiteBoard>
            <Buttons>
            <Button>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
            </Button>
            <EmptyDiv />
            <Button>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
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