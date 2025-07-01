import React, { useState } from 'react';

function GarageList() {
    const [cars, setCars] = useState(["Toyota", "Honda", "BMW"]);
    const [newCar, setNewCar] = useState("");

    const handleAddCar = () => {
        if (newCar.trim() === "") return;
        setCars([...cars, newCar]);
        setNewCar("");
    };

    const handleRemoveCar = (index) => {
        setCars(cars.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>My Garage</h2>
            <input
                value={newCar}
                onChange={e => setNewCar(e.target.value)}
                placeholder="Car name"
            />
            <button onClick={handleAddCar}>Add Car</button>
            <ul>
                {cars.map((car, idx) => (
                    <li key={idx}>
                        {car}
                        <button onClick={() => handleRemoveCar(idx)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GarageList;
