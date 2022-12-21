import {
	useNavigate,
	useLoaderData,
	Form,
	redirect,
	useActionData,
} from 'react-router-dom';
import { obtenerClientesId, actualizarCliente } from '../data/clientes';
import Formulario from '../components/Formulario';
import Error from '../components/Error';

export async function loader({ params }) {
	const cliente = await obtenerClientesId(params.clienteId);
	if (Object.values(cliente).length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'El cliente no fue encontrado',
		});
	}
	return cliente;
}

export async function action({ request, params }) {
	const formData = await request.formData();

	const datos = Object.fromEntries(formData);

	// Validacion
	const errores = [];
	const email = formData.get('email');

	// Validamos todos los campos
	if (Object.values(datos).includes('')) {
		errores.push('Todos los campos son obligatorios');
	}

	// Validamos el Email
	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
	);
	if (!regex.test(email)) {
		errores.push('El Email no es valido');
	}
	// Retornar los errores en caso de haber
	if (Object.keys(errores).length) {
		return errores;
	}

	// Actualizar el Cliente
	await actualizarCliente(params.clienteId, datos);

	return redirect('/');
}

const EditarCliente = () => {
	const navigate = useNavigate();
	const cliente = useLoaderData();
	const errores = useActionData();

	return (
		<>
			<h1 className="font-black text-4xl text-blue-900">
				Editar Cliente
			</h1>
			<p className="mt-3">
				A continuacion podras modificar los datos de un cliente
			</p>

			<div className="flex justify-end">
				<button
					onClick={() => navigate('/')}
					className="bg-blue-800 text-white mt-5 px-3 py-1 font-bold uppercase"
				>
					Volver
				</button>
			</div>

			<div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-18 mt-20 p-10 border">
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}
				<Form method="post">
					<Formulario cliente={cliente} />
					<input
						type="submit"
						className="mt-5 w-full p-3 uppercase font-bold text-lg cursor-pointer text-white bg-blue-800"
						value="Editar Cliente"
					/>
				</Form>
			</div>
		</>
	);
};

export default EditarCliente;
