import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Car from "../types/Car";
import apiClient from "../services/apiClient";

const CarPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car>({} as Car);

  const [updatedValues, setUpdatedValues] = useState<Car>(car);

  useEffect(() => {
    apiClient
      .get(`/${id}`)
      .then(({ data }) => setCar(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSave = () => {
    apiClient
      .put(`/${id}`, updatedValues)
      .then(() => {
        console.log("Sikeres mentés!");
        setCar(updatedValues);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    apiClient
      .delete(`/${id}`)
      .then(() => {
        console.log("Sikeres törlés!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Autó {car.id}</h1>
      <div className="row">
        <p>Model: {car.model}</p>
        <input
          type="text"
          onChange={(e) =>
            setUpdatedValues({ ...updatedValues, model: e.target.value })
          }
        />
      </div>
      <div className="row">
        <p>Brand: {car.brand}</p>
        <input
          type="text"
          onChange={(e) =>
            setUpdatedValues({ ...updatedValues, brand: e.target.value })
          }
        />
      </div>
      <div className="row">
        <p>Year: {car.year}</p>
        <input
          type="number"
          onChange={(e) =>
            setUpdatedValues({
              ...updatedValues,
              year: parseInt(e.target.value),
            })
          }
        />
      </div>
      <div className="row">
        <button onClick={handleSave}>Mentés</button>
        <button onClick={handleDelete}>Törlés</button>
      </div>
    </div>
  );
};

export default CarPage;
