import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header/Header";
import { Footer } from "react-bootstrap/lib/modal";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<h2>
					Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellendus animi aliquid facere dolorem explicabo cumque et
					alias aspernatur sint quas?
				</h2>
			</header>
			<Footer>hello</Footer>
		</div>
	);
}

export default App;
