import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")


  const newitems = items.filter(item => item.name.includes(search))
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e){
    setSearch(e.target.value)
  }
  const itemsToDisplay = newitems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
    <Filter onCategoryChange={handleCategoryChange} search ={search} onSearchChange = {handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
