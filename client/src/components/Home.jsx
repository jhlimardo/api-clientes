import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

const Home = () => {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const res = await axios.get("/clients");
      setClients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteClient = async (id) => {
    await axios.delete(`/clients/${id}`);
    getClients();
  };

  return (
    <div>
      <Navbar />
      
      <table className="table">
        <thead className="table-secondary">
          <tr>
            <th>No</th>
            <th>Cliente</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Estado</th>
            <th>Fecha Insercion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client.id}>
              <td>{index + 1}</td>

              <td>
                <Link to={`/${client.id}`} style={{ textDecoration: "none" }}>
                  {client.name} {client.lastName}
                </Link>
              </td>
              <td> {client.phone} </td>
              <td> {client.email} </td>
              <td> {client.age} </td>
              <td> {client.state} </td>
              <td> {(client.createdAt).slice(0, 10).split("-").reverse().join("/")} </td>
              <td>
                <Link
                  to={`/edit/${client.id}`}
                  style={{ textDecoration: "none" }}
                  className="button is-small is-danger"
                >
                  Edit{" "}
                </Link>
                <button
                  onClick={() => deleteClient(client.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
