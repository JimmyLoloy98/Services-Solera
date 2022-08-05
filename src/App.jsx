import "./App.css";

function App() {
  return (
    <main className="mt-8 m-auto w-11/12">
      <div>
        <h1 className="text-4xl font-semibold w-full text-center">Servicios</h1>
        <nav className="py-3 px-6 my-6 w-full bg-gray-100">
          <ul className="flex gap-4">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Todos
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Autos
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Salud
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Hogar
              </a>
            </li>
          </ul>
        </nav>
        <section className="flex w-full gap-x-8">
          <div className="w-2/3 grid grid-cols-3 gap-x-8 gap-y-4">
            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">Electricidad</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">Auxilio mecánico</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">Chofer reemplazo</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Médico a domicilio
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">Ambulancia</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="px-4 py-6">
                <h3 className="mb-3 text-xl font-semibold">Gasfitero</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-gray-100 border-t py-4 px-4 text-blue-500 flex gap-4">
                <span className="cursor-pointer hover:text-blue-700">
                  Editar
                </span>
                <span className="cursor-pointer hover:text-blue-700">
                  Eliminar
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <div className="rounded-md border">
              <form className="px-4 py-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Servicio</h3>
                <label htmlFor="name">
                  Nombre
                  <input
                    type="text"
                    name="form"
                    id="name"
                    className="py-1 px-2 mt-2 w-full block border outline-none rounded-md"
                  />
                </label>

                <label htmlFor="description">
                  Descripción
                  <input
                    type="text"
                    name="form"
                    id="description"
                    className="py-1 px-2 mt-2 w-full block border outline-none rounded-md"
                  />
                </label>
              </form>
              <div className="py-3 px-4 mt-4 flex gap-4 bg-gray-100 border-t">
                <button className="px-3 py-1 border border-green-500 rounded-md text-green-500 hover:bg-green-500 hover:text-white">
                  Grabar
                </button>
                <button className="px-3 py-1 border border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
