import React, { useState } from "react";
import dogImage from "../../assets/dog.jpeg";
import catImage from "../../assets/cat.jpeg";
import "../../styles/Adoption.css";

function Adoption() {
  const [animals, setAnimals] = useState([
    { name: "Buddy", breed: "Dog", image: dogImage },
    { name: "Whiskers", breed: "Cat", image: catImage },
  ]);

  const [newAnimal, setNewAnimal] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  const handleImageUpload = (e) => {
    setNewImageFile(e.target.files[0] || null);
  };

  const handleAddAnimal = (e) => {
    e.preventDefault();
    if (!newAnimal.trim() || !newBreed.trim() || !newImageFile) return;

    const imageUrl = URL.createObjectURL(newImageFile);

    setAnimals([
      ...animals,
      {
        name: newAnimal.trim(),
        breed: newBreed.trim(),
        image: imageUrl,
      },
    ]);

    // Reset form inputs
    setNewAnimal("");
    setNewBreed("");
    setNewImageFile(null);
    e.target.reset();
  };

  return (
    <section className="adoption-container">
      <h1>Adopt a Friend</h1>

      {/* Add New Animal */}
      <div className="add-animal-form">
        <form onSubmit={handleAddAnimal}>
          <input
            type="text"
            value={newAnimal}
            onChange={(e) => setNewAnimal(e.target.value)}
            placeholder="Animal Name"
            required
          />
          <input
            type="text"
            value={newBreed}
            onChange={(e) => setNewBreed(e.target.value)}
            placeholder="Breed"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
          <button type="submit">Add Animal</button>
        </form>
      </div>

      {/* Available Animals */}
      <div className="adoption-list-section">
        {animals.length === 0 ? (
          <p className="empty-state">No animals yet. Add some!</p>
        ) : (
          <div className="animal-list">
            {animals.map((animal, index) => (
              <div className="animal-card" key={index}>
                <img src={animal.image} alt={animal.name} />
                <div className="animal-card-content">
                  <strong>{animal.name}</strong>
                  <p>{animal.breed}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Adoption;
