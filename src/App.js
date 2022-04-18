import "./App.css";
import Container from "./components/Container";
import styled from "styled-components";
import ContextProvider from "./context/Context";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Title = styled.h2`
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ContextProvider>
          <NavBar />
          <Container>
            <SideBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:category" element={<Main />} />
            </Routes>
          </Container>
        </ContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
