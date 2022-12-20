import { useNavigate } from 'react-router-dom';

const NuevoCliente = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
			<p className="mt-3">
				Llena todos los campos para registrar un nuevo cliente
			</p>

			<div className="flex justify-end">
				<button
					onClick={() => navigate('/')}
					className="bg-blue-800 text-white mt-5 px-3 py-1 font-bold uppercase"
				>
					Volver
				</button>
			</div>

			<div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-18">
				<p>Formulario Aqui</p>
			</div>
		</>
	);
};

export default NuevoCliente;
