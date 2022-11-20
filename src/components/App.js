import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signpages/SignIn";
import SignUp from "./signpages/SignUp";

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<SignIn />}/> */}
                <Route path="/" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    )
}