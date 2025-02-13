import { Route, Routes } from "react-router-dom";
import Header from "@components/header/Header";
import Home from "@components/home/Home";
import Summary from "@components/summary/Summary";
import ModalsContainer from "@components/reusables/Modals/ModalsContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
      <ModalsContainer />
    </>
  );
}

export default App;
