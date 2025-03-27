import React, { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [newStuff, setNewStuff] = useState({
    name: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStuff.name && newStuff.price) {
      onAddStuff({ name: newStuff.name, price: parseFloat(newStuff.price) });
      setNewStuff({ name: "", price: "" });
    }
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={newStuff.name}
        onChange={(e) => setNewStuff({ ...newStuff, name: e.target.value })}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={newStuff.price}
        onChange={(e) => setNewStuff({ ...newStuff, price: e.target.value })}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
