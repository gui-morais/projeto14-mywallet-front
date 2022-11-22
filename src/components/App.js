import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signpages/SignIn";
import SignUp from "./signpages/SignUp";
import MainPage from "./MainPage";
import NewGain from "./transactions/NewGain";
import EditGain from "./transactions/EditGain";
import NewLoss from "./transactions/NewLoss";
import EditLoss from "./transactions/EditLoss";
import { useState } from "react";
import TokenContext from "./TokenContext";

export default function App() {
  const [token, setToken] = useState({});
  return (
    <TokenContext.Provider value={[token, setToken]}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/main" element={<MainPage />}/>
          <Route path="/newGain" element={<NewGain />}/>
          <Route path="/editGain/:id" element={<EditGain />}/>
          <Route path="/newLoss" element={<NewLoss />}/>
          <Route path="/editLoss/:id" element={<EditLoss />}/>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
