import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('./pages/Home/Home'));
const Kundportratt = lazy(() => import('./pages/Kundportratt/Kundportratt'));

const PageFallback = (
	<div style={{ minHeight: '100vh', background: '#acc5e4' }} />
);

function App() {
	return (
		<div className="app">
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={PageFallback}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="/kundportratt"
						element={
							<Suspense fallback={PageFallback}>
								<Kundportratt />
							</Suspense>
						}
					/>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
