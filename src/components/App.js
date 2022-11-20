import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signpages/SignIn";
import SignUp from "./signpages/SignUp";
import MainPage from "./MainPage";
import NewGain from "./transactions/NewGain";
import EditGain from "./transactions/EditGain";
import NewLoss from "./transactions/NewLoss";
import EditLoss from "./transactions/EditLoss";

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignIn />}/>
                {/* <Route path="/" element={<SignUp />}/> */}
                {/* <Route path="/" element={<MainPage />}/> */}
                {/* <Route path="/" element={<NewGain />}/> */}
                {/* <Route path="/" element={<EditGain />}/> */}
                {/* <Route path="/" element={<NewLoss />}/> */}
                {/* <Route path="/" element={<EditLoss />}/> */}
            </Routes>
        </BrowserRouter>
    )
}