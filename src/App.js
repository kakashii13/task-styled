import Container from "./components/Container";
import styled from "styled-components";
import ContextProvider from "./context/Context";
import NavBar from "./components/NavBar";
import Category from "./components/Category/Category";
import { Main } from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

const Title = styled.h2`
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <BrowserRouter>
      <>
        <ContextProvider>
          <GlobalStyles />
          <NavBar />
          <Container>
            <Category />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:category" element={<Main />} />
            </Routes>
          </Container>
        </ContextProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
