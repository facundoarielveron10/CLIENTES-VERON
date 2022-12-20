import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
	const location = useLocation();

	return (
		<div className="md:flex md:min-h-screen">
			<aside className="md:w-1/4 bg-blue-900 px-5 py-10">
				<h2 className="text-4xl font-black text-center text-white">
					CRM - Clientes
				</h2>
				<nav className="mt-10 text-center">
					<Link
						className={`${
							location.pathname === '/'
								? 'text-blue-300 bg-blue-800'
								: 'text-white bg-blue-700'
						} p-5 text-2xl block rounded shadow-md hover:text-blue-300 hover:bg-blue-800 transition-all`}
						to="/"
					>
						Clientes
					</Link>
					<Link
						className={`${
							location.pathname === '/clientes/nuevo'
								? 'text-blue-300 bg-blue-800'
								: 'text-white bg-blue-700'
						} p-5 text-2xl block rounded shadow-md mt-5 hover:text-blue-300 hover:bg-blue-800 transition-all`}
						to="/clientes/nuevo"
					>
						Nuevo Cliente
					</Link>
				</nav>
			</aside>
			<main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
