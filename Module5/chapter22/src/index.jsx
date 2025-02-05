import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StoreProvider store={store}>
			<Router>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</StoreProvider>
	</StrictMode>
);
