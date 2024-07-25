import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import FavoritePage from './views/FavoritePage';
import IndexPage from './views/IndexPage';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={<IndexPage />}
						index
					/>
					<Route
						path='/favorite'
						element={<FavoritePage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
