import ContextProvider from "./context/Context";
import Category from "./components/Category/Category";
import { Main } from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Alert } from "./components/Alert";

function App() {
  return (
    <BrowserRouter>
      <>
        <ContextProvider>
          <GlobalStyles />
          <Category />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:category" element={<Main />} />
            <Route path="/search/:id" element={<Main />} />
          </Routes>
          <Alert />
        </ContextProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
