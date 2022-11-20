import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signpages/SignIn";

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
    )
}