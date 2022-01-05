import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Register from "./Pages/Login/Register";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Dashborad from "./Pages/Dashboard/Dashborad/Dashborad";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/add" element={<AddProduct />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<Dashborad />
							</PrivateRoute>
						}
					/>
					{/* <Route path="/dashboard" element={<Dashborad />} /> */}
					<Route path="*" element={<NoMatch />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
