import React, { useState } from "react";

// Importing default animal images
import dogImage from "../../assets/dog.jpeg";
import catImage from "../../assets/cat.jpeg";
import "../../styles/Adoption.css";

function Adoption() {
  const [animals, setAnimals] = useState([
    {
      name: "Buddy",
      breed: "Dog",
      image: dogImage,
    },
    {
      name: "Whiskers",
      breed: "Cat",
      image: catImage,
    },
  ]);

  const [newAnimal, setNewAnimal] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newImageFile, setNewImageFile] = useState(null); // uploaded image file

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageFile(file);
    }
  };

  const handleAddAnimal = (e) => {
    e.preventDefault();

    if (newAnimal.trim() !== "" && newBreed.trim() !== "" && newImageFile) {
      const imageUrl = URL.createObjectURL(newImageFile);

      setAnimals([
        ...animals,
        {
          name: newAnimal,
          breed: newBreed,
          image: imageUrl,
        },
      ]);

      // Reset form
      setNewAnimal("");
      setNewBreed("");
      setNewImageFile(null);
      e.target.reset(); // reset file input visually
    }
  };

  return (
    <section id="adoption">
    <div className="adoption-container">
      <h1>Animal Adoption</h1>

      <div className="add-animal-form">
        <h2>Add a New Animal</h2>
        <form onSubmit={handleAddAnimal}>
          <input
            type="text"
            value={newAnimal}
            onChange={(e) => setNewAnimal(e.target.value)}
            placeholder="Enter animal name"
            required
          />
          <input
            type="text"
            value={newBreed}
            onChange={(e) => setNewBreed(e.target.value)}
            placeholder="Enter animal breed"
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

      <div>
        <h2>Available Animals for Adoption</h2>
        {animals.length === 0 ? (
          <p className="empty-state">No animals available for adoption yet. Add some!</p>
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

      
    </div>

    </section>
  );
}

export default Adoption;
