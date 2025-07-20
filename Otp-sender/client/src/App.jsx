import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sentotp from "./pages/Sentotp";
import Varifyotp from "./pages/Varifyotp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sentotp />} />
        <Route path="/verify" element={<Varifyotp />} />
      </Routes>
    </Router>
  );
};

export default App;