import React, { useState } from 'react';

function PackageList() {
    const [packages, setPackages] = useState(["DHL", "FedEx", "UPS"]);
    const [input, setInput] = useState("");

    function addPackage() {
        if (!input.trim()) return;
        setPackages([...packages, input]);
        setInput("");
    }

    function removePackage(i) {
        setPackages(packages.filter((_, idx) => idx !== i));
    }

    return (
        <div>
            <h2>Package List</h2>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter package name"
            />
            <button onClick={addPackage}>Add</button>
            <ul>
                {packages.map((pkg, i) => (
                    <li key={i}>
                        {pkg}
                        <button onClick={() => removePackage(i)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PackageList;
