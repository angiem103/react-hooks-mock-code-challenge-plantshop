import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, currentSearch}) {

    const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(currentSearch.toLowerCase())
    })
     
  return (
    <ul className="cards">{filteredPlants.map(plant => <PlantCard plant={plant} key={plant.name}/>)}</ul>
  );
}

export default PlantList;
