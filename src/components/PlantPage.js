import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handlePlantSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleSearch(search){
    setCurrentSearch(search)
  }



  return (
    <main>
      <NewPlantForm onPlantSubmit={handlePlantSubmit}/>
      <Search onPlantSearch={handleSearch} />
      <PlantList plants={plants} currentSearch={currentSearch}/>
    </main>
  );
}

export default PlantPage;
