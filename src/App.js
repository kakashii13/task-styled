import "./App.css";
import Container from "./components/Container";
import styled from "styled-components";
import ContextProvider from "./context/Context";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

const Title = styled.h2`
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <NavBar />
        <Container>
          <SideBar />
          <Main />
        </Container>
      </ContextProvider>
    </div>
  );
}

export default App;
