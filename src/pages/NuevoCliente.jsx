import { useNavigate, Form, useActionData } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';

export async function action({ request }) {
    const formData = await request.formData();

    const datos = Object.fromEntries(formData);

    // Validacion
    const errores = [];

    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }

    // Retornar los errores en caso de haber
    if (Object.keys(errores).length) {
        return errores;
    }
}

const NuevoCliente = () => {
    const navigate = useNavigate();
    const errores = useActionData();

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

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-18 mt-20 p-10 border">
                {errores.length &&
                    errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method="post">
                    <Formulario />
                    <input
                        type="submit"
                        className="mt-5 w-full p-3 uppercase font-bold text-lg cursor-pointer text-white bg-blue-800"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    );
};

export default NuevoCliente;
