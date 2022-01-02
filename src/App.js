import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Header from "./Pages/Header/Header";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
