import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car from "../types/Car";
import apiClient from "../services/apiClient";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [car, setCars] = useState<Car[]>([]);

  useEffect(() => {
    apiClient
      .get("/")
      .then(({ data }) => setCars(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Autók</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {car.map((car) => (
            <tr key={car.id} onClick={() => navigate(`/car/${car.id}`)}>
              <td>{car.id}</td>
              <td>{car.model}</td>
              <td>{car.brand}</td>
              <td>{car.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/new")}>uj</button>
    </div>
  );
};

export default LandingPage;
