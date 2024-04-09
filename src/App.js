import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Form } from "./components/Form";
import { Help } from "./components/Help";
import { Navbar } from "./components/Navbar";
import { FirstForm } from "./components/FirstForm";
import { SecondForm } from "./components/SecondForm";
function App() {
  return (
    <>    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="form" element={<Form/>}></Route>
      <Route path="help" element={<Help/>}></Route>
      <Route path="form/:id" element={<FirstForm/>}></Route>
      <Route path="form/a" element={<SecondForm/>}></Route>
    </Routes>
    </>

  );
}

export default App;
