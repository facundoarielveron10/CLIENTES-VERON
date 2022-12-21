import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="space-y8">
			<h1 className="text-center text-5xl font-extrabold mt-20 text-blue-900">
				CRM - Clientes
			</h1>
			<p className="text-center mt-10 uppercase">Hubo un error</p>
			<p className="text-center mt-10">{error.message}</p>
		</div>
	);
}