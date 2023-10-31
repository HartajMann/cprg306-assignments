"use client";
import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context"; 
import { useRouter } from "next/router"; 
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth(); 
  const router = useRouter(); 

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(ItemName) {
    let newName = ItemName.split(",")[0].trim();
    newName = newName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();  
    setSelectedItemName(newName);
  }

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  
  if (!user) {
    
    router.push('/app/week8/page.js'); 
    
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-left mt-4 ml-4">Shopping List</h1>
      <div className="flex">
        <div className="flex">
          <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName}/>
        </div>
      </div>
    </main>
  );
}
