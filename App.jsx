
import React from "react";
import Card from "./Card";
import contact from "../contact";

function createCard(contact){
    return(
        <Card
            key = {contact.id} 
            name = {contact.name} 
            img={contact.img}
            tel={contact.tel}
            email={contact.email}
        />
    );
}

function App(){

    return (
        <div>
            <h1 className="heading">My contacts</h1>
            {contact.map(createCard)}
    {/*
        <Card 
            name={contact[0].name} 
            img={contact[0].img}
            tel={contact[0].tel}
            email={contact[0].email}
        />
        <Card 
        name={contact[1].name}
        img={contact[1].img}
        tel={contact[1].tel}
        email={contact[1].email}

        />

        <Card 
        name={contact[2].name}
        img= {contact[2].img}
        tel={contact[2].tel}
        email={contact[2].email}

        />
        */}
        
       
        </div>
        
        
        
    
    );
}
export default App;