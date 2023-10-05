"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);
    alert("Added item: "+item.name+",Quantity: "+item.quantity+",Category: "+item.category);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input required onChange={(event)=>{setName(event.target.value)}} value={name} placeholder="Item Name"></input>
            <input required onChange={(event)=>{setQuantity(Number(event.target.value))}} value={quantity} type="number" min="1" max="99"></input>
            <select required onChange={(event)=>{setCategory(event.target.value)}} value={category} >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
            <button type="submit">+</button>
        </form>
    </div>
  );
}
