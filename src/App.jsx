import React, { useEffect, useState } from "react";
import "./App.css";

const categories = [
  { id: 1, name: "Autos", category: "A" },
  { id: 2, name: "Salud", category: "S" },
  { id: 3, name: "Hogar", category: "H" },
];

function App() {
  const [data, setData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [nameService, setNameService] = useState("");
  const [descriptionService, setDescriptionService] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getData = () => {
    fetch("services.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (services) {
        setData(services);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function getName(event) {
    const nameService = event.target.value;
    setNameService(nameService);
  }

  function getDescription(event) {
    const descriptionService = event.target.value;
    setDescriptionService(descriptionService);
  }

  function handleEditService(id) {
    let serviceFounded = data.find((item) => item.id === id);
    setSelectedService(serviceFounded);
    setNameService(serviceFounded.name);
    setDescriptionService(serviceFounded.description);
  }

  function handleDelete(id) {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  function resetForm() {
    setNameService("");
    setDescriptionService("");
    setSelectedService(null);
  }

  function handleSubmit() {
    if (selectedService) {
      selectedService.name = nameService;
      selectedService.description = descriptionService;
    } else {
      const newService = {
        name: nameService,
        description: descriptionService,
      };
      setData([...data, newService]);
    }
    resetForm();
  }

  function filterData(data) {
    if (selectedCategory === null) {
      return data;
    } else {
      return data.filter((item) => item.category === selectedCategory);
    }
  }

  return (
    <main className="my-8 m-auto w-11/12">
      <div>
        <h1 className="text-4xl font-semibold w-full text-center">Servicios</h1>
        <nav className="py-3 px-6 my-6 w-full bg-gray-100">
          <ul className="flex gap-4">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Todos
              </button>
            </li>
            {categories.map((category, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setSelectedCategory(category.category)}
                    className="text-gray-600 hover:text-gray-900 active:text-gray-900 cursor-pointer"
                  >
                    {category.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="flex w-full gap-x-8">
          <div className="w-2/3 grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-4">
            {filterData(data).map((service, index) => {
              return (
                <div className="rounded-md border relative" key={index}>
                  <div className=" mb-14 px-4 py-6">
                    <h3 className="mb-3 text-xl font-semibold">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 flex flex-wrap">
                      {service.description}
                    </p>
                  </div>
                  <div className="py-4 px-4 absolute bottom-0 w-full bg-gray-100 border-t text-blue-500 flex gap-4 flex-wrap">
                    <button
                      onClick={() => handleEditService(service.id)}
                      className="hover:text-blue-700"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="hover:text-blue-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-1/3">
            <div className="rounded-md border">
              <form className="px-6 py-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Servicio</h3>
                <label htmlFor="name">
                  Nombre
                  <input
                    onChange={getName}
                    value={nameService}
                    type="text"
                    name="form"
                    id="name"
                    className="py-1 px-2 mt-2 w-full block border outline-none rounded-md"
                  />
                </label>

                <label htmlFor="description">
                  Descripción
                  <input
                    onChange={getDescription}
                    value={descriptionService}
                    type="text"
                    name="form"
                    id="description"
                    className="py-1 px-2 mt-2 w-full block border outline-none rounded-md"
                  />
                </label>
              </form>
              <div className="py-3 px-6 mt-4 flex gap-4 bg-gray-100 border-t">
                <button
                  onClick={handleSubmit}
                  className="px-3 py-1 border border-green-500 rounded-md text-green-500 hover:bg-green-500 hover:text-white"
                >
                  Grabar
                </button>
                <button
                  onClick={resetForm}
                  className="px-3 py-1 border border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white"
                >
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
