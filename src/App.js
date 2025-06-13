import React from 'react';
import GreetingCard from './Greet';
import './Greet.css';

function App(){
    return (
        <div>
         
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
        </div>
    );
}
export default App;


