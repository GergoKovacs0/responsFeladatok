import { useState } from "react";
import Car from "../types/Car";
import apiClient from "../services/apiClient";

const NewCar = () => {
  const [newCar, setNewCar] = useState<Car>({} as Car);

  const handleSave = () => {
    console.log(newCar);
    apiClient.post("/", newCar).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>New Car</h1>
      <div className="row">
        <h2>Model</h2>
        <input
          type="text"
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        />
      </div>
      <div className="row">
        <h2>Brand</h2>
        <input
          type="text"
          onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
        />
      </div>
      <div className="row">
        <h2>Year</h2>
        <input
          type="number"
          onChange={(e) =>
            setNewCar({ ...newCar, year: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <button onClick={handleSave}>Mentés</button>
      </div>
    </div>
  );
};

export default NewCar;
