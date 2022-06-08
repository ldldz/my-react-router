import { Link, Route, Router, Routes } from "./lib/geon-react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/hi">하이로</Link>
        <Link to="/bye">바이로</Link>
        <Routes>
          <Route path={"/hi"} element={<div>하이</div>} />
          <Route path={"/bye"} element={<div>바이</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
