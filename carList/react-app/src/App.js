import React from "react";

const cars = [
  { make: "Toyota", model: "Corolla", year: 2021 },
  { make: "Honda", model: "Civic", year: 2022 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Camaro", year: 2023 },
];

const CarTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;
