import React from 'react';
import GarageList from './GarageList';
import PackageList from './PackageList';
import FormWithInputs from './FormWithInputs';
import FormWithSelect from './ FormWithSelect';      
import FormWithTextarea from './ FormWithTextarea';

import GreetingCard from './Greet';
import TodoApp from './TodoApp';
import Goal from './GoalList'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Glorious React App</h1>

      {/* Section 1: Garage */}
      <h2>Garage List</h2>
      <GarageList />

      {/* Section 2: Packages */}
      <h2>Package Management</h2>
      <p>Manage your packages efficiently!</p>
      <PackageList />

      {/* Section 3: React Forms */}
      <h2>React Forms Assignment</h2>
      <h3>Inputs</h3>
      <FormWithInputs />
      <h3>Textarea</h3>
      <FormWithTextarea />
      <h3>Select</h3>
      <FormWithSelect />

      {/* Section 4: To-do App */}
      <h2>Todo App</h2>
      <TodoApp />

      {/* Section 5: Greeting Cards */}
      <h2>Greeting Cards</h2>
      <GreetingCard
        name="Ainembabazi Glorious"
        Age="20"
        School="WITU"
        Address="Bukoto, Kampala"
      />
      <GreetingCard
        name="Apio Faith"
        Age="19"
        School="KYU"
        Address="Kampala, Uganda"
      />
      <GreetingCard
        name="Namono Faith"
        Age="24"
        School="MUST"
        Address="Mbarara, Uganda"
      />

      {/* Section 6: Goals */}
      <h2>My Goals</h2>
      <Goal />
    </div>
  );
}

export default App;



