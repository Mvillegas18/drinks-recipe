import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritePage from './views/FavoritePage';
import IndexPage from './views/IndexPage';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<IndexPage />}></Route>
				<Route
					path='/favorite'
					element={<FavoritePage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
