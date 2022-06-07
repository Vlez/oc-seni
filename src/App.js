import "./App.scss";
import Navigation from "./components/Navigation";
import Homepage from "./routes/Homepage";
import Nosotros from "./routes/Nosotros";
import Unifilar from "./routes/Unifilar";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Navigation />
      <Routes>
        <Route path="/nosotros/*" element={<Nosotros />} />
        <Route path="/unifilar" element={<Unifilar />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Container>
  );
}

export default App;
