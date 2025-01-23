import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const handleNameChange = () => {
		const names = ["Owen", "Bob", "Kevin"];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<p>Hello {handleNameChange()}</p>
		</>
	);
}

export default App;
