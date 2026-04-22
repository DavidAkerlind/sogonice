import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Kundportratt from './pages/Kundportratt/Kundportratt';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/kundportratt" element={<Kundportratt />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
