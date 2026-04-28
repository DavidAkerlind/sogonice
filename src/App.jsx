import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const Kundportratt = lazy(() => import('./pages/Kundportratt/Kundportratt'));

function App() {
	return (
		<BrowserRouter basename="/sogonice/">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/kundportratt"
					element={
						<Suspense
							fallback={
								<div
									style={{
										minHeight: '100vh',
										background: '#acc5e4',
									}}
								/>
							}>
							<Kundportratt />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
