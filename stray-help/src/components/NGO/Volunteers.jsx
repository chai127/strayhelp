import React from "react";
import "../../styles/Volunteers.css";

const dummyVolunteers = [
  { id: 1, name: "Alice", contact: "9876543210" },
  { id: 2, name: "Bob", contact: "9123456780" },
  { id: 3, name: "Charlie", contact: "9988776655" },
];

const Volunteers = () => {
  return (
    <section id="volunteers-page">
    <div className="volunteers-page">
      <h2>Volunteers</h2>
      <ul>
        {dummyVolunteers.map((v) => (
          <li key={v.id}>
            <span>{v.name}</span>
            <span>Contact: {v.contact}</span>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default Volunteers;
