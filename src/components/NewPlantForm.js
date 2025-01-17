import React, {useState} from "react";

function NewPlantForm({onPlantSubmit}) {

  const [plantName, setPlantName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState()

  function handleSubmit(e){
    e.preventDefault()

    const newPlant = {
      name: plantName,
      image: image,
      price: price
    }

    console.log(newPlant)

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(newPlant => onPlantSubmit(newPlant))
  
    
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
