import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header/Header";
import Catagories from "./Pages/Home/Catagories/Catagories";

function App() {
	return (
		<div className="App">

			<Header />
			<h2>
				Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Repellendus animi aliquid facere dolorem explicabo cumque et
				alias aspernatur sint quas?
			</h2>
			<Catagories></Catagories>

		</div>
	);
}

export default App;
