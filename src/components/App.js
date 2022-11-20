import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signpages/SignIn";
import SignUp from "./signpages/SignUp";
import MainPage from "./MainPage";

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<SignIn />}/> */}
                {/* <Route path="/" element={<SignUp />}/> */}
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )
}