import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBar";

const ClientDetail = () => {
  const { id } = useParams();
  const [clients, setClients] = useState([]);
  const [fecha, setFecha] = useState("");

  const getClientById = async () => {
    const response = await axios.get(`/clients/${id}`);
    setClients(response.data);
    setFecha(response.data.createdAt);
  };

  useEffect(() => {
    getClientById(clients);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let splitDate = fecha.slice(0, 10).split("-").reverse().join("/");

  return (
    <div>
      <Navbar />
      <h2>Detalle de Cliente</h2>
      <div className="mb-3">
        <h5>
          Nombre y Apellido: {clients.name} {clients.lastName}
        </h5>
      </div>
      <div className="mb-3">
        <h5>Telefono: {clients.phone}</h5>
      </div>
      <div className="mb-3">
        <h5>Email: {clients.email}</h5>
      </div>
      <div className="mb-3">
        <h5>Edae: {clients.age}</h5>
      </div>
      <div className="mb-3">
        <h5>Estado: {clients.state}</h5>
      </div>
      <div className="mb-3">
        <h5>Fecha de Insercion: {splitDate} </h5>
      </div>
    </div>
  );
};

export default ClientDetail;
