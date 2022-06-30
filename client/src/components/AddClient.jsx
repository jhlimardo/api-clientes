import { useState, Fragment } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const options = [
  { value: "nuevo", label: "Nuevo" },
  { value: "no interesado", label: "No interesado" },
  { value: "número equivocado", label: "número equivocado" },
  { value: "información equivocada", label: "Información equivocada" },
  { value: "alto potencial", label: " Alto potencial" },
  { value: "bajo potencial", label: "Bajo potencial" },
];

const AddClient = () => {
  const navigate = useNavigate();
  const [selectOption, setSelectOption] = useState(null);
  const [client, setClient] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    state: "",
  });
  
  const saveClient = async (e) => {
    e.preventDefault();
    await axios.post("/clients", {
      name: client.name,
      lastName: client.lastName,
      phone: client.phone,
      email: client.email,
      age: client.age,
      state: selectOption.value,
    });
    setClient({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      age: "",
      state: "",
    });
    navigate("/");
  };

  const handleChange = (e) => {
    //e.persist();
    setClient({
      ...client,
      [e.target.name]: e.target.value,
      [e.target.lastName]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.age]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div>
        <Navbar />
        <h2>Alta de Cientes</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Nombre
            </label>
            <input
              style={{ width: "500px" }}
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ingrese el Nombre"
              value={client.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span id="name-error">Please enter a first name</span>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Apellido
            </label>
            <input
              style={{ width: "500px" }}
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Ingrese el Apellido"
              value={client.lastName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Telefono
            </label>
            <input
              style={{ width: "500px" }}
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ingrese el Telefono"
              value={client.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Email
            </label>
            <input
              style={{ width: "500px" }}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingrese el Email"
              value={client.email}
              onChange={(e) => {
                handleChange(e);
              }}
              pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Edad
            </label>
            <input
              style={{ width: "500px" }}
              type="number"
              className="form-control"
              id="age"
              name="age"
              placeholder="Ingrese la Edad"
              value={client.age}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Opciones
            </label>
            <Select
              id="state"
              name="state"
              value={selectOption}
              options={options}
              onChange={setSelectOption}
            />
          </div>

          <div className="field">
            <button
              onClick={saveClient}
              type="button"
              className="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddClient;
