import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

export default function Layout() {
	return (
		<>
			<Header />
			<main className='contianer mx-auto py-16'>
				<Outlet />
			</main>
		</>
	);
}
